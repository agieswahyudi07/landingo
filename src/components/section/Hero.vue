<template>
    <section class="relative min-h-screen flex flex-row gap-5 items-center justify-center bg-[url(/assets/hero.svg)] bg-cover bg-right md:bg-center" id="hero">
        <div class="absolute inset-0 bg-white/35 sm:bg-white/5 backdrop-blur-sm z-0"></div>
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center xl:px-20 z-10" >
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 text-gray-900 font-black uppercase">Landing Page Siap Pakai, 
                <br class="hidden lg:inline-block">Untuk UMKM & Brand Lokal !
            </h1>
            <p class="mb-8 leading-relaxed">Bangun kepercayaan dan convert penjualan lewat landing page profesional yang cepat, ringan, dan mobile-friendly.</p>
            <div class="flex flex-col lg:flex-row justify-center gap-4 sm:gap-6">
                <n-button type="info" size="large" color="#5356FF" round><span class=" mx-1 text-lg uppercase">promo kemerdekaan <span class="font-semibold">999k</span></span></n-button>
                <n-button type="info" size="large" ghost round>Konsultasi Gratis <Icon icon="mdi:whatsapp" class=" text-2xl ml-1"/></n-button>
            </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hidden sm:inline-block">
                <img class=" object-cover object-center rounded" alt="hero" src="/assets/images/digital-marketing.webp">
            </div>
        </div>
    </section>
</template>