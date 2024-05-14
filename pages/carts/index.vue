<script setup>
  import {useCartStore} from '@/stores/cart.js'
  const cartStore = useCartStore()
  const config = useRuntimeConfig()
  console.log(config.success__url)
</script>

<template>
  <section id="cart__page">
    <div class="grid lg:grid-cols-4 grid-cols-1 container mx-auto lg:p-36 p-3 lg:mt-0 mt-20">
      <div class="lg:col-span-3 col-span-1 p-6 border shadow-md">
        <div class="flex items-center justify-between text-2xl my-10">
          <h1>Shopping Carts</h1>
          {{ cartStore.items.length }} Items
        </div>
        <hr>
        <CheckOut__Card />
      </div>
      <div class="lg:col-span-1 col-span-1 p-6 border shadow-md">
        <h1 class="text-2xl my-10">Order Summary</h1>
        <hr>
        <Order__Card/>
      </div>
    </div>
  </section>
</template>
