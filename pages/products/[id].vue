<script setup>
import { useCartStore } from "@/stores/cart.js";
const cartStore = useCartStore();

const { id } = useRoute().params;
const { data: product } = await useFetch(
  `https://fakestoreapi.com/products/${id}`
);
const links = ref([
  {
    icon: "logos:facebook",
  },
  {
    icon: "skill-icons:instagram",
  },
  {
    icon: "logos:telegram",
  },
  {
    icon: "skill-icons:twitter",
  },
  {
    icon: "logos:tiktok-icon",
  },
]);
const reviews = ref([
  {
    name: "Description",
    article:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, autem!",
  },
  {
    name: "Reviews",
    article: "This is review",
  },
]);

const showReview = ref(true);
const currentLink = ref(0);
const toast = useToast();

const showReviewBtn = (i) => {
  showReview.value = !showReview.value;
  currentLink.value = i;
};

const addToCartBtn = (product) => {
  try {
    cartStore.addItem(product);
    toast.add({ title: `Add x1 product`, description: `${product.title}` });
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <section id="product__detail" class="w-full">
    <div
      v-if="product"
      class="container mx-auto lg:p-36 p-3 grid lg:grid-cols-2 grid-cols-1 place-items-stretch gap-10"
    >
      <NuxtLink
        to="/products"
        class="lg:col-span-2 col-span-1 flex items-center gap-1 hover:underline"
        ><Icon name="material-symbols:arrow-back-ios" />Go Back</NuxtLink
      >
      <img
        :src="product.image"
        class="bg-white p-3 w-full h-[400px] object-contain"
      />
      <div class="flex flex-col items-start">
        <!-- top -->
        <div class="flex flex-col">
          <h1 class="font-semibold text-3xl">{{ product.title }}</h1>
          <div class="flex items-center gap-3">
            <Stars />
            <span class="mt-1">({{ product.rating.count }} Reviews)</span>
          </div>
          <span class="text-2xl font-semibold text-primary"
            >${{ product.price }}
          </span>
        </div>
        <hr class="w-full my-3" />
        <!-- mid -->
        <p>{{ product.description }}</p>
        <hr class="w-full my-3" />
        <!-- bot -->
        <div class="flex items-center gap-9">
          <UButton
            @click="addToCartBtn(product)"
            label="Add To Cart"
            color="primary"
            size="xl"
          >
            <template #trailing>
              <UIcon name="i-heroicons-shopping-cart" class="w-5 h-5" />
            </template>
          </UButton>
        </div>
        <hr class="w-full my-3" />
        <!-- foot -->
        <div class="flex flex-col gap-3">
          <h1 class="font-semibold">
            Category: <span class="font-normal">{{ product.category }}</span>
          </h1>
          <div class="flex items-center gap-10">
            <h1 class="font-semibold">Share to:</h1>
            <div v-for="link in links" :key="link">
              <Icon :name="link.icon" size="20" />
            </div>
          </div>
        </div>
      </div>

      <!-- description -->
      <div class="lg:col-span-2 col-span-1 mt-20 flex flex-col gap-6">
        <ul class="flex justify-start gap-20">
          <li
            v-for="(review, index) in reviews"
            :key="review"
            @click="showReviewBtn(index)"
            :class="{ active: currentLink === index }"
            class="cursor-pointer"
          >
            {{ review.name }}
          </li>
        </ul>
        <hr class="w-full" />
        <div v-if="showReview">
          {{ product.description }}
        </div>
        <div v-else>
          <span>{{ product.rating.count }}+ Of People Reviews</span>
        </div>
      </div>
    </div>
    <div v-else class="container mx-auto lg:p-36 p-3">
      <skeleton />
    </div>
  </section>
</template>

<style>
.active {
  color: #0e9f6e;
  border-bottom: 2px #0e9f6e solid;
}
</style>
