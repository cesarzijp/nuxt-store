import { defineStore } from "pinia";

export const useFietsStore = defineStore("fietsstore", {
  state: () => {
    return {
      st: {
        kleur: "black",
        slot: "geen",
        extraPower: false,
        extraConnectivity: false,
        name: "Cowbouw ST",
        price: 2300,
        priceCurrency: "EUR",
        imgPrefix: "cruiserst__",
        totalPrice: 0,
      },
      classic: {
        kleur: "black",
        slot: "geen",
        extraPower: false,
        extraConnectivity: false,
        name: "Cowbouw Classic",
        price: 2600,
        priceCurrency: "EUR",
        imgPrefix: "cruiserclassic__",
      },
      cross: {
        kleur: "black",
        slot: "geen",
        extraPower: false,
        extraConnectivity: false,
        name: "Cowbouw Cross",
        price: 4000,
        priceCurrency: "EUR",
        imgPrefix: "cruisercross__",
      },
    };
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    setKleur(kleur) {
      this.$state.st.kleur = kleur;
    },
  },
  persist: true,
});
