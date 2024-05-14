import { defineStore } from "pinia";

export const useCartStore = defineStore("CartItems", {
  state: () => ({
    items: [],
  }),
  actions: {
    addItem(product) {
      this.items.push(product);
      this.saveToCart();
    },
    deleteItem(id) {
      const index = this.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
      this.saveToCart();
    },
    saveToCart() {
      localStorage.setItem("CartItems", JSON.stringify(this.items));
    },
  },
  getters: {
    total() {
      const total = this.items.reduce((total, item) => {
        return item.price + total
      }, 0)
      const totalP = parseFloat(total)
      const totalF = totalP.toFixed(2)
      return totalF
    },
    shipping() {
      const ship =
        this.items.reduce((total, item) => {
          return item.price + total;
        }, 0) * 0.1;
      const shipP = parseFloat(ship);
      const shipF = shipP.toFixed(2);
      return shipF;
    },
    tax() {
      const tax =
        this.items.reduce((total, item) => {
          return total + item.price;
        }, 0) * 0.05;
      const taxP = parseFloat(tax);
      const taxF = taxP.toFixed(2);
      return taxF;
    },
    totalAmount() {
      const res__tax =
        this.items.reduce((total, item) => {
          return total + item.price;
        }, 0) * 0.05;
      const res__total = this.items.reduce((total, item) => {
        return total + item.price;
      }, 0);
      const res__ship =
        this.items.reduce((total, item) => {
          return total + item.price;
        }, 0) * 0.1;
      const res__toalAmount = res__tax + res__ship + res__total;
      const parseAmount = parseFloat(res__toalAmount)
      const fixedAmount = parseAmount.toFixed(2)
      return fixedAmount
    },
  },
});
