<template>
  <div class="font-sans antialiased text-slate-600 bg-white">
    
    <div class="bg-rose-600 text-white text-xs md:text-sm py-2 px-4 flex justify-between items-center z-50 relative">
      <div class="flex items-center gap-2">
        <Icon icon="mdi:ambulance" class="animate-pulse" />
        <span class="font-bold uppercase tracking-wider">Gawat Darurat (24 Jam):</span>
        <span class="font-mono font-bold">1500-911</span>
      </div>
      <div class="hidden md:flex gap-4">
        <a href="#" class="hover:underline">Lokasi Cabang</a>
        <span>|</span>
        <a href="#" class="hover:underline">Asuransi Rekanan</a>
      </div>
    </div>

    <header 
      class="sticky top-0 z-40 transition-all duration-300 w-full"
      :class="isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-white'"
    >
      <div class="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" class="flex items-center gap-2 group">
          <div class="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
            <Icon icon="mdi:heart-pulse" class="text-2xl" />
          </div>
          <div class="leading-tight">
            <h1 class="font-bold text-xl text-slate-900 tracking-tight">VITALIS<span class="text-emerald-600">MED</span></h1>
            <p class="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">Family Health Center</p>
          </div>
        </a>

        <nav class="hidden md:flex items-center gap-8">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" class="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">
            {{ link.text }}
          </a>
        </nav>

        <div class="flex items-center gap-3">
          <button class="hidden md:flex items-center gap-2 text-slate-500 hover:text-emerald-600 font-medium text-sm">
            <Icon icon="mdi:account-circle-outline" class="text-xl" />
            Portal Pasien
          </button>
          <button @click="handleConsultation" class="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg shadow-emerald-600/20 flex items-center gap-2">
            Buat Janji Temu
            <Icon icon="mdi:arrow-right" class="text-xs" />
          </button>
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden text-2xl text-slate-800">
            <Icon :icon="isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'" />
          </button>
        </div>
      </div>

      <transition name="slide-fade">
        <div v-if="isMobileMenuOpen" class="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl md:hidden p-6 flex flex-col gap-4">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" @click="isMobileMenuOpen = false" class="text-lg font-medium text-slate-800 py-2 border-b border-slate-50">
            {{ link.text }}
          </a>
          <button class="w-full py-3 bg-slate-100 text-slate-700 rounded-lg font-bold">Masuk Portal Pasien</button>
        </div>
      </transition>
    </header>

    <section id="home" class="relative pt-12 pb-20 lg:pt-20 overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div class="lg:w-1/2 relative z-10">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mb-6">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Klinik Terakreditasi Paripurna
            </div>
            
            <h1 class="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6">
              Perawatan Kesehatan <br/>
              yang <span class="text-emerald-600 relative inline-block">
                Mengerti Anda
                <svg class="absolute w-full h-3 -bottom-1 left-0 text-emerald-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="8" fill="none" /></svg>
              </span>
            </h1>
            
            <p class="text-lg text-slate-500 mb-8 leading-relaxed max-w-xl">
              Kami menggabungkan teknologi medis terkini dengan sentuhan manusiawi. Dari pemeriksaan rutin hingga spesialis, kesehatan keluarga Anda adalah prioritas kami.
            </p>

            <div class="flex flex-col sm:flex-row gap-4">
              <button @click="handleConsultation" class="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                <Icon icon="mdi:calendar-check" />
                Jadwalkan Konsultasi
              </button>
              <button class="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:border-emerald-500 hover:text-emerald-600 transition-all flex items-center justify-center gap-2">
                <Icon icon="mdi:play-circle-outline" class="text-xl" />
                Lihat Fasilitas
              </button>
            </div>

            <div class="mt-10 flex items-center gap-4 text-sm text-slate-500">
              <div class="flex -space-x-3">
                <img v-for="i in 4" :key="i" :src="`https://i.pravatar.cc/100?img=${i+20}`" class="w-10 h-10 rounded-full border-2 border-white" alt="Doctor">
              </div>
              <p>Didukung oleh <span class="font-bold text-slate-900">50+ Dokter Spesialis</span></p>
            </div>
          </div>

          <div class="lg:w-1/2 relative">
            <div class="absolute inset-0 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            
            <div class="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop" 
                alt="Doctor smiling" 
                class="w-full object-cover"
              />
              
              <div class="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg border border-emerald-50">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <Icon icon="mdi:check-decagram" class="text-2xl" />
                  </div>
                  <div>
                    <p class="font-bold text-slate-900">Dr. Sarah Wijaya</p>
                    <p class="text-xs text-slate-500">Spesialis Penyakit Dalam</p>
                    <div class="flex items-center gap-1 mt-1 text-xs text-emerald-600 font-bold">
                      <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                      Available Today
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 bg-emerald-600 text-white">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
          <div>
            <div class="text-3xl font-extrabold mb-1">24/7</div>
            <div class="text-emerald-100 text-sm">Layanan UGD</div>
          </div>
          <div>
            <div class="text-3xl font-extrabold mb-1">150+</div>
            <div class="text-emerald-100 text-sm">Dokter Ahli</div>
          </div>
          <div>
            <div class="text-3xl font-extrabold mb-1">12k+</div>
            <div class="text-emerald-100 text-sm">Pasien Sembuh</div>
          </div>
          <div>
            <div class="text-3xl font-extrabold mb-1">4.9/5</div>
            <div class="text-emerald-100 text-sm">Rating Kepuasan</div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="py-24 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Layanan Medis Komprehensif</h2>
          <p class="text-slate-500">Kami menyediakan fasilitas lengkap mulai dari pencegahan, diagnosis, hingga pengobatan.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          <div class="md:col-span-2 row-span-1 bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow border border-slate-200 relative overflow-hidden group">
            <div class="relative z-10">
              <div class="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-4">
                <Icon icon="mdi:heart-pulse" class="text-2xl" />
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-2">Pusat Jantung & Pembuluh Darah</h3>
              <p class="text-slate-500 max-w-sm">Dilengkapi dengan Cath Lab modern dan tim dokter spesialis jantung intervensi terbaik.</p>
            </div>
            <Icon icon="mdi:heart-pulse" class="absolute -bottom-8 -right-8 text-9xl text-rose-50 group-hover:scale-110 transition-transform" />
          </div>

          <div class="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow border border-slate-200 group">
            <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
              <Icon icon="mdi:baby-carriage" class="text-2xl" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Ibu & Anak</h3>
            <p class="text-sm text-slate-500">Layanan obstetri, ginekologi, dan pediatri terpadu.</p>
          </div>

          <div class="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow border border-slate-200 group">
            <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4">
              <Icon icon="mdi:tooth" class="text-2xl" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Dental Center</h3>
            <p class="text-sm text-slate-500">Perawatan gigi estetika dan bedah mulut.</p>
          </div>

          <div class="md:col-span-2 bg-emerald-600 p-8 rounded-3xl shadow-lg relative overflow-hidden flex items-center justify-between group text-white">
            <div class="relative z-10 max-w-md">
              <h3 class="text-2xl font-bold mb-2">Medical Check-Up (MCU)</h3>
              <p class="text-emerald-100 mb-6">Paket pemeriksaan kesehatan berkala untuk deteksi dini penyakit.</p>
              <button @click="handleConsultation" class="bg-white text-emerald-600 px-6 py-2 rounded-lg font-bold text-sm hover:bg-emerald-50 transition-colors">Lihat Paket</button>
            </div>
            <Icon icon="mdi:clipboard-pulse" class="hidden sm:block text-8xl text-emerald-500 group-hover:rotate-12 transition-transform" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white border-y border-slate-100">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="md:w-1/2">
             <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop" 
              class="rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" 
              alt="Telemedicine"
            />
          </div>
          <div class="md:w-1/2">
            <span class="text-emerald-600 font-bold tracking-widest text-sm uppercase mb-2 block">Vitalis Telehealth</span>
            <h2 class="text-4xl font-bold text-slate-900 mb-6">Konsultasi Dokter dari Rumah</h2>
            <p class="text-lg text-slate-500 mb-8">
              Tidak perlu antre. Dapatkan diagnosa, resep obat, dan rujukan laboratorium melalui panggilan video aman dengan dokter kami.
            </p>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center gap-3 text-slate-700">
                <Icon icon="mdi:check-circle" class="text-emerald-500 text-xl" />
                <span>Video call HD terenkripsi</span>
              </li>
              <li class="flex items-center gap-3 text-slate-700">
                <Icon icon="mdi:check-circle" class="text-emerald-500 text-xl" />
                <span>Resep digital langsung ke aplikasi</span>
              </li>
              <li class="flex items-center gap-3 text-slate-700">
                <Icon icon="mdi:check-circle" class="text-emerald-500 text-xl" />
                <span>Obat diantar ke rumah</span>
              </li>
            </ul>
            <button @click="handleConsultation" class="bg-slate-100 text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-emerald-100 hover:text-emerald-700 transition-colors">
              Mulai Konsultasi Online
            </button>
          </div>
        </div>
      </div>
    </section>

    <section id="doctors" class="py-24 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="flex justify-between items-end mb-12">
          <div>
            <h2 class="text-3xl font-bold text-slate-900 mb-2">Dokter Spesialis Kami</h2>
            <p class="text-slate-500">Berpengalaman dan berdedikasi untuk kesembuhan Anda.</p>
          </div>
          <a href="#" class="text-emerald-600 font-bold hover:underline hidden sm:block">Lihat Semua Dokter</a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(doc, idx) in doctors" :key="idx" class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
            <div class="aspect-[4/5] overflow-hidden relative">
              <img :src="doc.image" :alt="doc.name" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
              <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                <h3 class="text-white text-xl font-bold">{{ doc.name }}</h3>
                <p class="text-emerald-300 font-medium">{{ doc.specialization }}</p>
              </div>
            </div>
            <div class="p-6">
              <div class="flex justify-between items-center mb-4">
                <div class="text-sm text-slate-500">
                  <Icon icon="mdi:briefcase-outline" class="inline mr-1" /> {{ doc.exp }} Pengalaman
                </div>
                <div class="flex text-amber-400 text-sm">
                  <Icon icon="mdi:star" /> {{ doc.rating }}
                </div>
              </div>
              <button @click="handleDoctorBooking(doc)" class="w-full py-3 border border-slate-200 rounded-lg text-slate-700 font-bold hover:bg-slate-900 hover:text-white transition-colors">
                Buat Janji
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="py-20 bg-emerald-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 30px 30px;"></div>
      
      <div class="container mx-auto px-6 text-center relative z-10">
        <h2 class="text-3xl md:text-5xl font-bold mb-6">Siap untuk Hidup Lebih Sehat?</h2>
        <p class="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
          Jangan tunda kesehatan Anda. Hubungi kami untuk informasi lebih lanjut atau langsung datang ke klinik VitalisMed terdekat.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button @click="handleConsultation" class="bg-white text-emerald-900 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2">
            <Icon icon="mdi:whatsapp" class="text-xl" /> Chat WhatsApp
          </button>
          <button class="bg-transparent border border-emerald-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-800 transition-colors">
            Lokasi Klinik
          </button>
        </div>
      </div>
    </section>

    <footer class="bg-white pt-16 pb-8 border-t border-slate-200">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div class="md:col-span-1">
            <div class="flex items-center gap-2 mb-4">
               <div class="w-8 h-8 bg-emerald-600 text-white rounded flex items-center justify-center">
                <Icon icon="mdi:heart-pulse" />
              </div>
              <span class="font-bold text-xl text-slate-900">VITALIS<span class="text-emerald-600">MED</span></span>
            </div>
            <p class="text-slate-500 text-sm leading-relaxed">
              Jalan Sehat No. 123<br>
              Jakarta Selatan, 12000<br>
              Indonesia
            </p>
          </div>
          
          <div>
            <h4 class="font-bold text-slate-900 mb-4">Pasien</h4>
            <ul class="space-y-3 text-sm text-slate-500">
              <li><a href="#" class="hover:text-emerald-600">Cari Dokter</a></li>
              <li><a href="#" class="hover:text-emerald-600">Jadwal Praktek</a></li>
              <li><a href="#" class="hover:text-emerald-600">Asuransi & Pembayaran</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-bold text-slate-900 mb-4">Layanan</h4>
            <ul class="space-y-3 text-sm text-slate-500">
              <li><a href="#" class="hover:text-emerald-600">Unit Gawat Darurat</a></li>
              <li><a href="#" class="hover:text-emerald-600">Medical Check Up</a></li>
              <li><a href="#" class="hover:text-emerald-600">Laboratorium</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-slate-900 mb-4">Jam Operasional</h4>
            <ul class="space-y-3 text-sm text-slate-500">
              <li class="flex justify-between"><span>Senin - Jumat</span> <span class="font-semibold">08:00 - 21:00</span></li>
              <li class="flex justify-between"><span>Sabtu</span> <span class="font-semibold">08:00 - 17:00</span></li>
              <li class="flex justify-between text-rose-500"><span>UGD</span> <span class="font-bold">24 Jam</span></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-slate-100 pt-8 text-center text-sm text-slate-400">
          &copy; 2025 VitalisMed Healthcare Group. Hak Cipta Dilindungi. <span class="text-slate-500">Built by <span class="font-semibold text-emerald-600">Landingo</span></span>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);

const navLinks = [
  { text: 'Beranda', href: '#home' },
  { text: 'Layanan', href: '#services' },
  { text: 'Dokter', href: '#doctors' },
  { text: 'Telehealth', href: '#telehealth' },
];

const doctors = [
  {
    name: 'Dr. Sarah Wijaya, Sp.PD',
    specialization: 'Spesialis Penyakit Dalam',
    rating: '5.0',
    exp: '12 Thn',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Dr. Budi Santoso, Sp.A',
    specialization: 'Spesialis Anak',
    rating: '4.9',
    exp: '15 Thn',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Dr. Jessica Tan, Sp.JP',
    specialization: 'Spesialis Jantung',
    rating: '4.9',
    exp: '8 Thn',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop'
  }
];

// Scroll Logic
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// WA Integration (Contextual)
const whatsappBase = '6285183077289';

const handleConsultation = () => {
  const msg = encodeURIComponent('Halo VitalisMed, saya ingin membuat janji temu / konsultasi. Kapan jadwal yang tersedia?');
  window.open(`https://wa.me/${whatsappBase}?text=${msg}`, '_blank');
};

const handleDoctorBooking = (doctor) => {
  const msg = encodeURIComponent(`Halo, saya ingin membuat janji dengan ${doctor.name} (${doctor.specialization}).`);
  window.open(`https://wa.me/${whatsappBase}?text=${msg}`, '_blank');
};
</script>

<style scoped>
.animate-blob {
  animation: blob 10s infinite;
}

@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

/* Transitions */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>