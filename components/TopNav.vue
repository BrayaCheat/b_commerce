<script setup>
import { initFlowbite } from "flowbite";
import { useCartStore } from "@/stores/cart.js";
import { useColorMode } from "@vueuse/core";

const { data: products } = await useFetch("https://fakestoreapi.com/products");
const mode = useColorMode();

const { state, next } = useCycleList(
  ["dark", "light"],
  { initialValue: mode }
);

watchEffect(() => (mode.value = state.value));

const cartStore = useCartStore();
const Links = ref([
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Shop",
    path: "/products",
  }
]);
const searchValue = ref("");

watch(searchValue, () => {
  console.log(searchValue.value);
});

const SearchData = computed(() => {
  return products.value.filter((p) =>
    p.title.toLowerCase().includes(searchValue.value)
  );
});

onMounted(() => {
  initFlowbite();
});
const currentLink = ref(null);
const isShowSearch = ref(false);
const isShowNav = ref(false);

const chnagePage = (page) => {
  currentLink.value = page;
};

const showSearch = () => {
  isShowSearch.value = !isShowSearch.value;
};

const showNav = () => {
  isShowNav.value = !isShowNav.value;
};

const clearSearch = () => {
  searchValue.value = "";
};
</script>

<template>
  <nav class="border-b shadow-md">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <NuxtLink
        to="/"
        class="flex items-center space-x-3 rtl:space-x-reverse font-semibold text-2xl"
      >
        B-Commerce
      </NuxtLink>
      <div class="flex md:order-2">
        <button
          type="button"
          data-collapse-toggle="navbar-search"
          aria-controls="navbar-search"
          aria-expanded="false"
          class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
        >
          <Icon name="material-symbols:search-rounded" class="text-xl" />
        </button>
        <div class="relative hidden md:block">
          <div
            id="search-box"
            class="px-3 py-2 border border-primary rounded w-[300px] flex items-center"
          >
            <button v-if="searchValue.length" @click="clearSearch">
              <Icon
                name="bitcoin-icons:cross-filled"
                class="text-2xl text-text"
              />
            </button>
            <button v-else>
              <Icon
                name="material-symbols:search-rounded"
                class="text-2xl text-text"
              />
            </button>
            <input
              type="text"
              v-model="searchValue"
              class="w-full h-[30px] bg-transparent border-0 outline-none focus:ring-0"
              placeholder="Search..."
            />
          </div>

          <ul
            v-if="searchValue.length"
            class="absolute bg-gray-100 p-1 border shadow-sm rounded flex flex-col gap-3 w-full z-50"
          >
            <li v-for="item in SearchData" :key="item">
              <NuxtLink
                id="nuxtLink"
                :to="`/products/${item.id}`"
                class="flex items-center gap-6 bg-white border rounded shadow-sm p-3 hover:opacity-75"
              >
                <img
                  :src="item.image"
                  class="w-10 h-10 rounded-full object-contain"
                />
                <p class="text-sm">{{ item.title.slice(0, 20) }}...</p>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <button
          data-collapse-toggle="navbar-search"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-controls="navbar-search"
          aria-expanded="false"
        >
          <Icon name="ic:baseline-menu" class="text-xl" />
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-search"
      >
        <div class="relative mt-3 md:hidden">
          <div
            id="search-box"
            class="px-3 py-2 border border-primary rounded w-full flex items-center"
          >
            <button v-if="searchValue.length" @click="clearSearch">
              <Icon
                name="bitcoin-icons:cross-filled"
                class="text-2xl text-text"
              />
            </button>
            <button v-else>
              <Icon
                name="material-symbols:search-rounded"
                class="text-2xl text-text"
              />
            </button>
            <input
              type="text"
              v-model="searchValue"
              class="w-full h-[30px] bg-transparent border-0 outline-none focus:ring-0"
              placeholder="Search..."
            />

            <ul
              v-if="searchValue.length"
              class="absolute top-12 left-0 bg-gray-100 p-1 border shadow-sm rounded flex flex-col gap-3 w-full z-50"
            >
              <li v-for="item in SearchData" :key="item">
                <NuxtLink
                  id="nuxtLink"
                  :to="`/products/${item.id}`"
                  class="flex items-center gap-6 bg-white border rounded shadow-sm p-3 hover:opacity-75"
                >
                  <img
                    :src="item.image"
                    class="w-10 h-10 rounded-full object-contain"
                  />
                  <p class="text-sm">{{ item.title.slice(0, 20) }}...</p>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <ul
          class="flex flex-col md:items-center gap-3 p-4 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0"
        >
          <li v-for="(link, index) in Links" :key="link.id">
            <NuxtLink
              @click="chnagePage(index)"
              :to="link.path"
              :class="{ active: currentLink === index }"
              class="block py-2 px-3 hover:text-primary md:bg-transparent md:p-0"
              >{{ link.name }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/carts"
              class="relative block py-2 px-3 hover:text-primary md:bg-transparent md:p-0 text-xl"
            >
              <span
                class="absolute font-light bg-primary px-1 rounded-full text-xs left-4 text-white"
                >{{ null || cartStore.items.length }}</span
              >
              <Icon
                name="material-symbols:shopping-bag-outline-sharp"
                class="mb-0.5"
              />
            </NuxtLink>
          </li>
          <li>
            <button @click="next()">
              <Icon name="material-symbols:dark-mode-outline"
                v-if="state === 'dark'"
                i-carbon-moon
                inline-block
                align-middle
                class="align-middle text-xl"
              />
              <Icon name="material-symbols:light-mode-outline"
                v-if="state === 'light'"
                i-carbon-sun
                inline-block
                align-middle
                class="align-middle text-xl"
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.active {
  color: #0e9f6e;
  border-bottom: 2px #0e9f6e solid;
}
</style>
