<script setup>
const { product } = defineProps(["product"]);
</script>

<template>
  <NuxtLink
    :to="`/products/${product.id}`"
    class="flex flex-col gap-3 items-center border shadow-md p-3 hover:ring hover:ring-primary hover:border-primary"
  >
    <div
      class="w-full flex items-center justify-center p-6 shadow-sm"
    >
      <img :src="product.image" class="w-56 h-56 object-contain" />
    </div>
    <div class="flex flex-col items-center">
      <h1 class="font-semibold text-lg">
        {{ product.title.slice(0, 20) }}
      </h1>
      <h1 class="font-semibold text-primary text-md">${{ product.price }}</h1>
    </div>
  </NuxtLink>
  <!-- <button
    type="button"
    @click="addToCartBtn(product)"
    class="px-4 py-2 border border-primary text-sm text-black font-semibold rounded shadow-sm w-full hover:opacity-75 flex items-center justify-center"
  >
    ADD TO CART
    <Icon
      name="material-symbols-light:shopping-bag"
      class="text-2xl mb-0.5"
    />
  </button> -->
</template>
