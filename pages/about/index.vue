<template>
  <section id="about__page">
    <div class="container mx-auto lg:p-36 p-3 flex flex-col gap-52">
      <div class="flex flex-col gap-3">
        <h1 class="text-2xl font-semibold">About Us</h1>
        <h1 class="text-primary">Welcome to B-commerce!</h1>
        <p>
          At B-commerce, we are passionate about bringing you the best shopping
          experience possible. Our mission is to provide high-quality products,
          excellent customer service, and a seamless online shopping journey. At
          B-commerce, we are passionate about bringing you the best shopping
          experience possible. Our mission is to provide high-quality products,
          excellent customer service, and a seamless online shopping journey.
        </p>
        <hr />
      </div>

      <div class="grid grid-cols-2 place-items-stretch gap-10">
        <img src="/Logo/akatsuki.jpg" class="border shadow-sm" />
        <div class="flex flex-col gap-3">
          <h1 class="text-2xl font-semibold">From Founder</h1>
          <p class="text-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Amet, veritatis.
          </p>
          <div class="text-xl">
            <h1>Braya Cheat</h1>
            <p>Founder</p>
          </div>

          <hr />

          <span class="font-semibold">Social Media</span>
          <div class="flex items-center gap-10">
            <div v-for="link in links" :key="link">
              <Icon :name="link.icon" size="25" />
            </div>
          </div>
          
        </div>
        <hr class="lg:col-span-2">
      </div>

      <div class="grid grid-cols-2 place-items-stretch">
        <h1 class="text-2xl font-semibold">Our Story</h1>
        <div class="flex flex-col gap-10">
          <h1 class="text-xl font-semibold">
            Producing the highest quality skin cleanser products diam aliquam,
            libero tortor est risus diam ut sodales pharetra nibh lorem feugiat
            interdum.
          </h1>
          <p>
            Accumsan viverra volutpat vulputate pretium in sed ac feugiat
            rhoncus consectetur sagittis velit sollicitudin euismod amet non
            donec enim egestas auctor arcu id sed vulputate elementum, a aliquam
            proin viverra rutrum at praesent lorem feugiat viverra dictum lectus
            sed sit non venenatis risus ut viverra venenatis sagittis in.
            Aliquam scelerisque scelerisque ac laoreet laoreet faucibus
            vestibulum fringilla ut aliquet dictumst dignissim id eget cras
            nulla in venenatis dictum tristique faucibus lectus egestas aenean
            placerat dolor dolor phasellus eros vestibulum velit turpis ornare
            facilisis ante ornare.
          </p>
        </div>
        <hr>
      </div>
    </div>
  </section>
</template>

<script setup>
const links = ref([
  {
    icon: "skill-icons:instagram",
    path: "",
  },
  {
    icon: "logos:facebook",
    path: "",
  },
  {
    icon: "logos:pinterest",
    path: "",
  },
  {
    icon: "skill-icons:twitter",
    path: "",
  },
  {
    icon: "logos:youtube-icon",
    path: "",
  },
]);
</script>
