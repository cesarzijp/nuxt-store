import { createMollieClient } from "@mollie/api-client";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  body.value = body.value.toString() + ".00";

  // console.log(body);

  const mollieClient = createMollieClient({
    apiKey: process.env.MOLLIE_KEY,
  });

  const payment = await mollieClient.payments.create({
    amount: {
      value: body.value,
      currency: "EUR",
    },
    description: body.description,
    redirectUrl: "https://yourwebshop.example.org/order/123456",
    webhookUrl: "https://yourwebshop.example.org/webhook",
  });

  // console.log(payment);

  return payment;
});
