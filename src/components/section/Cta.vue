<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const buttonColor = "#25D366"; 

const redirectToWhatsApp = () => {
  const phoneNumber = '6281398257238'; 
  const defaultMessage = 'Halo, saya tertarik dengan jasa pembuatan landing page/website untuk bisnis saya. Bisa minta informasi lebih lanjut?';
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#cta",
      start: "top 80%",
      once: true, 
    },
  });

  tl.from("#cta h2", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
  });

  tl.from("#cta p", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out",
  }, "-=0.5");

  tl.from("#cta .cta-button", {
    opacity: 0,
    scale: 0.8,
    duration: 0.7,
    ease: "back.out(1.7)",
  }, "-=0.3"); 
});
</script>

<template>
  <section 
    id="cta" 
    class="relative min-h-screen flex flex-col text-gray-600 body-font justify-center bg-[url(/assets/abstract_paper.svg)] bg-cover bg-center"
  >
    <div class="relative z-10 container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full max-w-4xl mx-auto">
        
        <h2 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">
          Siap Naikan Level Penjualanmu?
        </h2>

        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
          Dari landing page yang professional hingga website custom yang fungsional, kami siap membantu UMKM dan brand lokal untuk tumbuh lebih cepat di dunia digital.
        </p>

        <div class="mt-10 cta-button">
          <n-button 
            size="large" 
            @click="redirectToWhatsApp"
            strong
            :color="buttonColor"
            round
          >
            Konsultasi Gratis via WhatsApp
            <Icon icon="mdi:whatsapp" width="24" class="ml-3"></Icon>
          </n-button>
        </div>
      </div>
    </div>
  </section>
</template>
