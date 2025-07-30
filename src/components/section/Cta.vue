<script setup>

const buttonColor = "#5356FF"; 

const redirectToWhatsApp = () => {
  // use international fomat, without '+', space, atau '-'. example: 6281234567890
  const phoneNumber = '6281398257238'; 

  // --- default message ---
  const defaultMessage = 'Halo, saya tertarik dengan jasa pembuatan landing page/website untuk bisnis saya. Bisa minta informasi lebih lanjut?';
  
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
};
</script>

<template>
  <section class="relative min-h-screen flex flex-col text-gray-600 body-font justify-center bg-[url(/assets/abstract_paper.svg)] bg-cover bg-center">
    <div class="absolute inset-0 bg-black/5 backdrop-blur-md z-0"></div>
    <div class="relative z-10 container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full max-w-4xl mx-auto">
        
        <h2 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">
          Siap Naikan Level Penjualanmu?
        </h2>

        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
          Dari landing page yang professional hingga website custom yang fungsional, kami siap membantu UMKM dan brand lokal untuk tumbuh lebih cepat di dunia digital.
        </p>

        <div class="mt-10">
          <n-button 
            size="large" 
            @click="redirectToWhatsApp"
            strong
            :color="buttonColor"
            round
          >
            Konsultasi Gratis via WhatsApp
            <Icon  icon="mdi:whatsapp" width="24" class="ml-3"></Icon>
          </n-button>
        </div>
      </div>
    </div>
  </section>
</template>
