<script setup>
import { useCartStore } from "@/stores/cart.js";
const cartStore = useCartStore();

const isOpen = ref(false);
const totalAmount = ref(cartStore.shipping + cartStore.tax + cartStore.total);

const ShowAlert = (amount) => {
  alert(amount);
};

</script>

<template>
  <ul 
  v-if="cartStore.items.length"
  class="flex flex-col items-start gap-6 mt-10">
    <li class="flex items-center justify-between w-full">
      <h1>Total Product:</h1>
      <span class="font-semibold">{{ cartStore.items.length }} Units</span>
    </li>
    <li class="flex items-center justify-between w-full">
      <h1>Shipping:</h1>
      <span class="font-semibold"
        >${{ cartStore.shipping }}</span
      >
    </li>
    <li class="flex items-center justify-between w-full">
      <h1>Tax:</h1>
      <span class="font-semibold"
        >${{ cartStore.tax }}</span
      >
    </li>
    <li class="flex items-center justify-between w-full">
      <h1>Sub Total:</h1>
      <span class="font-semibold"
        >${{ cartStore.total }}</span
      >
    </li>
    <li class="flex items-center justify-between w-full">
      <h1>Total Amount:</h1>
      <span class="font-semibold"
        >${{ cartStore.totalAmount }}</span
      >
    </li>
  </ul>
  <hr class="w-full border my-10" />

  <button
    :disabled="cartStore.totalAmount === 0"
    :class="{ off: cartStore.totalAmount === 0 }"
    @click="isOpen = true"
    class="w-full px-6 py-2 bg-primary rounded shadow-sm font-medium text-white hover:opacity-75 flex items-center justify-center gap-3"
  >
    Checkout
    <Icon name="material-symbols:attach-money" class="text-xl" />
  </button>

  <UModal v-model="isOpen">
    <UCard
      :ui="{
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      }"
    >
      <template #header>
        <Placeholder class="h-8" />
        <span class="text-xl font-semibold flex justify-between items-center">
          You have x{{ cartStore.items.length }} items
          <UIcon
          @click="isOpen = false"
          name="i-heroicons-x-mark"
           class="w-5 h-5 hover:bg-primary" />
        </span>
      </template>

      <Placeholder class="h-32" />
      <div v-for="item in cartStore.items" :key="item">
        {{ item.title.slice(0, 40) }} ... <span class="font-semibold">x1</span>
      </div>

      <template #footer>
        <Placeholder class="h-8" />
        <button
          :disabled="cartStore.totalAmount === 0"
          @click="ShowAlert(cartStore.totalAmount)"
          class="w-full px-6 py-2 bg-primary rounded shadow-sm font-medium text-white hover:opacity-75 flex items-center justify-center gap-3"
        >
          Pay now ${{ cartStore.totalAmount }}
        </button>
      </template>
    </UCard>
  </UModal>
</template>

<style>
.off {
  cursor: not-allowed;
}
</style>
