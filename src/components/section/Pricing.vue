<script setup>
    const title = 'Pilih Paket Sesuai Kebutuhanmu'
    const package_list = [
        {
            name:'Basic',
            price:'Rp950.000',
            description:'Cocok untuk UMKM & Brand Lokal yang ingin tampil professional dengan cepat dan siap mulai branding ',
            isMostLiked: false,
            list:[
                {
                    // icon:'',
                    text:'1 halaman landing',
                },
                {
                    // icon:'',
                    text:'Button WhatsApp',
                },
                {
                    // icon:'',
                    text:'Desain simpel & cepat',
                },
                {
                    // icon:'',
                    text:'Hosting + domain .my.id',
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
                    // icon:'',
                    text:'Desain eksklusif',
                },
                {
                    // icon:'',
                    text:'Analytics + SEO dasar',
                },
                {
                    // icon:'',
                    text:'Form kontak & Google Sheet',
                },
                {
                    // icon:'',
                    text:'Integrasi lebih fleksibel',
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
                    // icon:'',
                    text:'Funnel iklan profesional',
                },
                {
                    // icon:'',
                    text:'WhatsApp API / CRM',
                },
                {
                    // icon:'',
                    text:'Google Tag Manager',
                },
                {
                    // icon:'',
                    text:'Auto response & tracking',
                },
            ]
        },
    ]
</script>

<template>
    <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">{{ title }}</h1>
            </div>
            <div class="flex flex-wrap -m-4 justify-center lg:gap-10">
                <div class=" p-4 xl:w-1/4 md:w-1/2 w-full" v-for="(item, index) in package_list" :key="index">
                    <div   
                        :class="[
                            'h-full p-6 rounded-lg border-2 flex flex-col relative overflow-hidden',
                            item.isMostLiked ? 'border-indigo-500' : ''
                        ]"
                    >
                    <span class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl" v-if="item.isMostLiked">Best Deal - Limited Time Only</span>
                    <h2 class="text-sm tracking-widest title-font mb-1 font-medium">{{ item.name }}</h2>
                    <h1 class="text-3xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                        <span>{{ item.price }}</span>
                    </h1>
                    <p class="flex items-center text-gray-600 mb-2" v-for="(list, index) in item.list" :key="index">
                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>{{ list.text }}
                    </p>
                    <n-button type="info" size="large" color="#5356FF">
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
    </section>
</template>