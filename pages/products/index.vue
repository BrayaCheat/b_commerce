<script setup>
import axios from "axios";

const productsCategories = ref([]);
const productList = ref([]);
const selectedCategories = ref([]);
let currentPage = ref(1);
let itemsPerPage = 6;

const toast = useToast();

const totalPages = computed(() => {
  return Math.ceil(productList.value.length / itemsPerPage);
});

const paginate = computed(() => {
  const startIndex = (currentPage.value - 1) * totalPages.value;
  const endIndex = startIndex + itemsPerPage;
  return productList.value.slice(startIndex, endIndex);
});

const changePage = (page) => {
  currentPage.value = page;
};

const fetchCategory = async () => {
  await axios
    .get("https://fakestoreapi.com/products/categories")
    .then((res) => {
      productsCategories.value = res.data;
    })
    .catch((err) => console.log(err));
};

const fetchProduct = async () => {
  await axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      productList.value = res.data;
    })
    .catch((err) => console.log(err));
};

watch(selectedCategories, () => {
  productList.value = [];
  selectedCategories.value.forEach(async (category) => {
    productList.value.push.apply(
      productList.value,
      await fetchProductsByCategory(category)
    );
  });
  if (!selectedCategories.value.length) {
    fetchProduct();
  }
  // console.log("products: ", productList.value);
});

const fetchProductsByCategory = async (category) => {
  const response = await useFetch(
    "https://fakestoreapi.com/products/category/" + category
  )
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return response.value;
};

onMounted(() => {
  try {
    fetchProduct();
    fetchCategory();
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <section id="products__page" class="w-full">
    <div class="container mx-auto lg:p-36 p-3">
      <h1 class="text-4xl font-semibold lg:mt-0 mt-20">All Products</h1>
      <hr class="w-full border my-10" />
      <div class="grid lg:grid-cols-4 grid-cols-1 gap-10">
        <div class="rounded p-6 shadow-md border">
          <h1 class="font-semibold text-xl">Product categories</h1>
          <hr class="w-full border my-3" />
          <ul
            v-if="productsCategories.length"
            class="flex flex-col gap-6 lg:col-span-1"
          >
            <li
              v-for="product in productsCategories"
              :key="product.id"
              class="flex flex-wrap items-center gap-3 uppercase font-semibold border border-primary shadow-md p-3 rounded shadow-sm"
            >
              <input
                type="checkbox"
                v-model="selectedCategories"
                :value="product"
                class="rounded shadow-sm ring-0 outline-none focus:ring-0"
              />
              {{ product }}
            </li>
          </ul>
          <div v-else>
            <Skeleton />
          </div>
        </div>
        <div
          v-if="paginate.length"
          class="grid lg:grid-cols-3 grid-cols-1 gap-10 lg:col-span-3 col-span-1 place-items-stretch"
        >
          <div v-for="product in paginate" :key="product.id">
            <Card :product="product" />
          </div>

          <hr class="w-full border lg:col-span-3 col-span-1" />

          <!-- Pagination -->
          <nav class="flex items-center -space-x-px lg:col-span-3 mx-auto">
            <button
              @click="currentPage--"
              :disabled="currentPage === 1"
              type="button"
              class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
            >
                <Icon name="material-symbols:arrow-back-ios"/>
            </button>
            <button
              :class="{ active: currentPage === page }"
              @click="changePage(page)"
              v-for="page in totalPages"
              :key="page"
              type="button"
              class="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
            >
              {{ page }}
            </button>
            <button
              @click="currentPage++"
              :disabled="currentPage === totalPages"
              type="button"
              class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
            >              
                <Icon name="ic:outline-arrow-forward-ios"/>
            </button>
          </nav>
          <!-- End Pagination -->
        </div>
        <div v-else class="grid w-full lg:col-span-3 col-span-1">
          <Skeleton />
        </div>
      </div>
    </div>
  </section>
</template>
