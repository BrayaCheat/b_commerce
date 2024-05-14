<script setup>
import axios from "axios";
import { useCartStore } from "@/stores/cart.js";
const cartStore = useCartStore();
const product = ref();

onMounted(async () => {
  try {
    await axios
      .get("https://fakestoreapi.com/products/5")
      .then((res) => {
        product.value = res.data;
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <section id="hero__section" class="w-full relative">
    <div
      v-if="product"
      class="container mx-auto lg:p-36 p-3 grid md:grid-cols-2 grid-cols-1 gap-10"
    >
      <div class="title flex flex-col gap-6">
        <h1 class="md:text-5xl text-2xl font-bold">
          {{ product.title }}
        </h1>
        <p>{{ product.description }}</p>
        <span class="flex items-center gap-3">
          <h1 class="font-semibold">Rating {{ product.rating.rate }}</h1>
          <Stars />
        </span>
        <div class="flex items-center gap-10">
          <NuxtLink to="/products"
            class="flex items-center gap-3 md:px-4 md:py-2 p-2 md:text-lg text-sm bg-primary rounded shadow-sm text-white font-medium hover:opacity-75"
          >
            Shop Now
            <Icon
              name="material-symbols:shopping-bag-outline"
              class="text-white text-xl cursor-pointer"
            />
          </NuxtLink>
          <NuxtLink
            :to="`/products/${product.id}`"
            class="flex items-center gap-3 md:px-4 md:py-2 p-2 md:text-lg text-sm font-medium border border-primary rounded shadow-sm hover:bg-primary hover:text-white"
          >
            View Product
            <Icon name="ph:eye" class="text-xl cursor-pointer" />
          </NuxtLink>
        </div>
      </div>

      <img
        :src="product.image"
        class="w-full h-96 object-contain animate-[wiggle_3s_ease-in-out_infinite]"
      />
    </div>
  </section>
</template>
