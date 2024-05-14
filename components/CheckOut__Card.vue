<script setup>
import { useCartStore } from "@/stores/cart.js";

const cartStore = useCartStore();
const totalCartitems = cartStore.items
const toast = useToast();

const removeItem = (id, product) => {
  cartStore.deleteItem(id);
  toast.add({
    title: `Remove x1 product`,
    description: `${product.title}`,
    color: "red",
    icon: "i-heroicons-x-circle",
  });
};

const link = (id) => {
  window.open(`/products/${id}`, "_self");
};

</script>

<template>
  <div v-if="cartStore.items.length">
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right">
        <thead class="text-md">
          <tr>
            <th scope="col" class="px-6 py-3">Photo</th>
            <th scope="col" class="px-6 py-3">Product Name</th>
            <th scope="col" class="px-6 py-3">Category</th>
            <th scope="col" class="px-6 py-3">Price</th>
            <th scope="col" class="px-6 py-3">Operation</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="product in totalCartitems"
            :key="product.id"
            class="cursor-pointer border-b dark:hover:bg-gray-800 hover:bg-gray-100"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                :src="product.image"
                class="w-36 h-36 object-contain shadow-sm"
              />
            </th>
            <td class="px-6 py-4">
              {{ product.title }}
            </td>
            <td class="px-6 py-4 text-primary">
              {{ product.category }}
            </td>
            <td class="px-6 py-4">${{ product.price }}</td>
            <td class="px-6 py-4 text-right">
              <button
                @click="removeItem(product.id, product)"
                class="hover:underline text-red-600"
              >
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div v-else class="py-10 flex items-center gap-3">
    <h1>No product found!</h1>
    <NuxtLink to="/products" class="hover:underline text-primary">
      Get Some Products!
    </NuxtLink>
  </div>
</template>
