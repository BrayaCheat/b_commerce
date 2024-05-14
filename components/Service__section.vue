<script setup>
    const services = ref([
        {
            name: 'Free Delivery',
            article: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, itaque.',
            icon: 'iconamoon:delivery-thin'
        },
        {
            name: 'Active 24/7',
            article: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, itaque.',
            icon: 'arcticons:just24hours'
        },
        {
            name: 'Good Service',
            article: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, itaque.',
            icon: 'carbon:customer-service'
        }
    ])
</script>

<template>
    <section id="service__section" class="w-full bg-primary text-white py-9">
        <div class="grid md:grid-cols-3 container mx-auto lg:px-36 px-3 place-items-center md:gap-0 gap-10">
        <div v-for="service in services" :key="service.name" class="grid place-items-center text-center gap-3">
            <Icon :name="service.icon" class="text-6xl"/>
            <h1 class="font-bold text-2xl">{{ service.name }}</h1>
            <p class="text-white font-medium">{{ service.article }}</p>
        </div>
    </div>
    </section>
    
</template>