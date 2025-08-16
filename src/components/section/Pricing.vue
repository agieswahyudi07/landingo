<script setup>
    const title = 'Pilih Paket Sesuai Kebutuhanmu'
    const package_list = [
        {
            name:'Basic',
            price:'Rp999.000',
            description:'Cocok untuk UMKM & Brand Lokal yang ingin tampil professional dengan cepat dan siap mulai branding ',
            isMostLiked: false,
            list:[
                {
                    icon:'mdi:checkbox-marked-circle-outline',
                    text:'1 halaman landing page modern dan profesional',
                },
                {
                    icon:'mdi:checkbox-marked-circle-outline',
                    text:'Desain responsive (mobile-first, clean, trustable)',
                },
                {
                    icon:'mdi:checkbox-marked-circle-outline',
                    text:'Shared Hosting (6 bulan)',
                },
                {
                    icon:'mdi:checkbox-marked-circle-outline',
                    text:'gratis domain (.com)',
                },
                {
                    icon:'mdi:checkbox-marked-circle-outline',
                    text:'1 Email Bisnis',
                },
                {
                    icon:'mdi:checkbox-marked-circle-outline',
                    text:'handle ~1.000 pengunjung',
                },
                {
                    icon:'mdi:checkbox-marked-circle-outline',
                    text:'1 GB STORAGE',
                },
                {
                    icon:'mdi:checkbox-marked-circle-outline',
                    text:'CTA langsung ke WhatsApp',
                },
                {
                    icon:'mdi:checkbox-marked-circle-outline',
                    text:'Website kamu aman & dipercaya Google – Gratis Sertifikat SSL seumur hidup!',
                },
                {
                    icon:'mdi:checkbox-marked-circle-outline',
                    text:'Support teknis 15 hari pertama',
                },
                {
                    icon:'mdi:checkbox-marked-circle-outline',
                    text:'Gratis 1x revisi minor',
                },
            ]
        },
        {
            name:'Pro',
            price:'Rp1.750.000',
            description:'Cocok untuk UMKM & Brand Lokal yang ingin tampil professional dengan cepat dan siap mulai branding ',
            isMostLiked: true,
            list:[
                {
                    icon:'mdi:checkbox-marked-circle-outline',
                    text:'Semua fitur BASIC, plus:',
                },
                {
                    icon:'mdi:checkbox-marked-circle-outline',
                    text:'1-3 halaman landing page',
                },
                {
                    icon:'mdi:checkbox-marked-circle-outline',
                    text:'Content Management System',
                },
                {
                    icon:'mdi:checkbox-marked-circle-outline',
                    text:'Hosting (1 Tahun)',
                },
                {
                    icon:'mdi:checkbox-marked-circle-outline',
                    text:'Handle ~10.000 pengunjung',
                },
                {
                    icon:'mdi:checkbox-marked-circle-outline',
                    text:'10 GB STORAGE',
                },
                {
                    icon:'mdi:checkbox-marked-circle-outline',
                    text:'CTA langsung ke WhatsApp',
                },
                {
                    icon:'mdi:checkbox-marked-circle-outline',
                    text:'2 Email Bisnis',
                },
                {
                    icon:'mdi:checkbox-marked-circle-outline',
                    text:'Performance optimized (lighthouse >90)',
                },
                {
                    icon:'mdi:checkbox-marked-circle-outline',
                    text:'Basic SEO setup (meta title + desc)',
                },
                {
                    icon:'mdi:checkbox-marked-circle-outline',
                    text:'Support teknis 30 hari pertama',
                },
                {
                    icon:'mdi:checkbox-marked-circle-outline',
                    text:'3x revisi minor',
                },
            ]
        },
        {
            name:'Smart Funnel',
            price:'Rp2.500.000',
            description:'Cocok untuk UMKM & Brand Lokal yang ingin tampil professional dengan cepat dan siap mulai branding ',
            isMostLiked: false,
            list:[
                {
                    icon:'',
                    text:'Semua fitur **Pro**, plus:',
                },
                {
                    icon:'',
                    text:'1-5 halaman landing page',
                },
                {
                    icon:'',
                    text:'Interactive Design (Animate on Scroll, Parallax, dll.)',
                },
                {
                    icon:'',
                    text:'Hosting (1 Tahun)',
                },
                {
                    icon:'',
                    text:'Bisa menangani ~25.000 pengunjung',
                },
                {
                    icon:'',
                    text:'25 GB STORAGE',
                },
                {
                    icon:'',
                    text:'3 Email Bisnis',
                },
                {
                    icon:'',
                    text:'Speed Optimization',
                },
                {
                    icon:'',
                    text:'Auto-responder via WA Gateway / Email',
                },
                {
                    icon:'',
                    text:'Countdown timer / upsell popup (opsional)',
                },
                {
                    icon:'',
                    text:'Support teknis 60 hari pertama',
                },
                {
                    icon:'',
                    text:'3x revisi minor',
                },
            ]
        },
    ]
</script>

<template>
    <section class="min-h-screen text-gray-600 body-font overflow-hidden bg-[url(/assets/contour_line.svg)] bg-cover bg-center">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">{{ title }}</h1>
            </div>
            <div class="flex flex-wrap -m-4 justify-center lg:gap-10">
                <div class=" p-4 xl:w-1/4 md:w-1/2 w-full" v-for="(item, index) in package_list" :key="index">
                    <div   
                        :class="[
                            'h-full p-6 rounded-lg border-2 flex flex-col relative overflow-hidden justify-between bg-white',
                            item.isMostLiked ? 'border-indigo-500' : ''
                        ]"
                    >
                    <span class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl" v-if="item.isMostLiked">Best Deal - Limited Time Only</span>
                    <div class="">
                        <h2 class="text-sm tracking-widest title-font mb-1 font-medium">{{ item.name }}</h2>
                        <h1 class="text-3xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                            <span>{{ item.price }}</span>
                        </h1>
                    </div>
                    <div class=" justify-self-start">
                        <p class="flex items-center text-gray-600 mb-2" v-for="(list, index) in item.list" :key="index">
                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>{{ list.text }}
                        </p>
                    </div>
                    <div class="flex flex-col">
                        <n-button type="info" size="large" color="#5356FF" class="justify-self-end">
                            <div class="flex flex-row ">
                                <p>Pilih Paket</p>
                                <div class=" ml-1">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </n-button>
                        <p class="text-xs text-gray-500 mt-3">{{ item.description }}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>