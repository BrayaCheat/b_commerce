<script setup>
const { data: products } = await useFetch(
  "https://fakestoreapi.com/products?limit=8"
);
</script>

<template>
  <section id="trending__section" class="w-full">
    <div
      class="container mx-auto grid lg:grid-cols-4 grid-cols-1 gap-20 lg:px-36 p-3"
    >
      <h1
        class="font-semibold lg:text-4xl text-xl lg:col-span-4 col-span-1 pt-10 flex flex-col gap-3"
      >
        Trending Products
        <span class="lg:text-lg text-sm"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          perspiciatis.</span
        >
      </h1>
      <div v-for="product in products" :key="product.id">
        <Card :product="product" />
      </div>
    </div>
  </section>
</template>
