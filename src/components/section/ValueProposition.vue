<script setup>
    const list = [
        {
            // icon:'',
            text:'Desain simpel, cepat dibuat (2-5 hari)'
        },
        {
            // icon:'',
            text:'Mobile-friendly dan siap iklan'
        },
        {
            // icon:'',
            text:'Leads masuk langsung ke WhatsApp'
        },
        {
            // icon:'',
            text:'Tanpa repot domain & hosting (kami bantu)'
        },
        {
            // icon:'',
            text:'Siap SEO basic untuk tampil di Google'
        },
        {
            // icon:'',
            text:'Tampil Professional di hadapan client'
        },
    ]
</script>

<template>
    <section id="value-proposition" class="relative min-h-screen flex flex-row gap-5 items-center justify-center bg-[url(/assets/rect_light.svg)] bg-cover bg-center">
        <!-- <div class="absolute inset-0 bg-black/15 backdrop-blur-md z-0"></div> -->
        <div class="container px-5 py-24 mx-auto relative z-10">
            <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-100 mb-4">Kenapa Bisnismu Butuh Landingo ?</h1>
            <p class="text-base text-gray-100 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">UMKM & brand lokal kini bisa punya landing page profesional tanpa ribet dan tanpa mahal.</p>
            </div>
            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="p-2 sm:w-1/2 w-full" v-for="(item, index) in list" :key="index">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">{{ item.text }}</span>
                </div>
            </div>

            </div>
        </div>
    </section>
</template>