<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const modules = [Pagination, Navigation];

const { data: users } = await useFetch("https://fakestoreapi.com/users");
</script>

<template>
  <section id="testimorial__section" class="py-32 bg-gray-50">
    <h1 class="font-bold md:text-2xl text-xl text-center">What Our Customer Say</h1>
    <div class="container mx-auto lg:px-36 p-3 flex flex-col items-center">
      <swiper
        :breakpoints="{
          '640': {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }"
        :navigation="true"
        :pagination="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="user in users" :key="user.id">
          <img
            src="https://picsum.photos/200/300"
            alt=""
            class="w-20 h-20 rounded-full object-cover"
          />
          <h1 class="font-bold text-xl">
            {{ user.name.firstname }} {{ user.name.lastname }}
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
            minus!
          </p>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 10px;
  background-color: rgb(243 244 246);
  padding: 36px;
}
</style>
