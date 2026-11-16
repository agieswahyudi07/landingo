<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PreviewLeadTeaser from '@/components/previews/shared/PreviewLeadTeaser.vue';
import { whatsappHref } from '@/lib/whatsapp';

gsap.registerPlugin(ScrollTrigger);

const rootRef = ref(null);
const heroImg = ref(null);
const heroCopy = ref(null);
let gsapCtx = null;

const shades = [
  {
    code: 'BL3',
    name: 'Pearl Ivory Natural',
    swatch: '#F7F5EE',
    translucency: 'Translusensi Tinggi — Efek Enamel Alami',
    note: 'Putih bersih yang mempertahankan gradasi transparan di ujung gigi seperti struktur email asli. Favorit untuk eksekutif.',
    image: 'https://images.unsplash.com/photo-1664529842504-5743d286ec1b?w=1200&auto=format&fit=crop',
  },
  {
    code: 'B1',
    name: 'Classic Bright Enamel',
    swatch: '#F0EAD6',
    translucency: 'Translusensi Seimbang — Hangat Alami',
    note: 'Warna gigi sehat alami paling cerah tanpa kesan kapur; harmonis untuk tone kulit sawo matang hingga kuning langsat.',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&auto=format&fit=crop',
  },
  {
    code: 'BL2',
    name: 'Editorial Radiant White',
    swatch: '#FCFAF5',
    translucency: 'Kilau Kamera — Simetri Garis Bibir',
    note: 'Memberikan pantulan cahaya ekstra cerah dengan kontur proporsional untuk pengantin, presenter, dan public figure.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1200&auto=format&fit=crop',
  },
];

const selectedShade = ref('BL3');
const activeShade = computed(
  () => shades.find((s) => s.code === selectedShade.value) || shades[0]
);

const signatureWorks = [
  {
    index: '01',
    tag: 'Signature Veneer',
    title: 'Ultra-Thin E.max Porcelain',
    price: 'Mulai Rp 4.800.000 / gigi',
    desc: 'Ketebalan 0.3mm dengan teknik minimal-prep agar struktur gigi asli tetap sehat. Anda mencoba mockup senyum langsung di cermin studio sebelum porselen dicetak.',
    image: 'https://images.unsplash.com/photo-1664529842504-5743d286ec1b?w=1200&auto=format&fit=crop',
    specs: ['3D Digital Smile Design', 'Trial Smile Mockup', 'Garansi Lab 5 Tahun'],
  },
  {
    index: '02',
    tag: 'Invisible Orthodontics',
    title: 'Clear Aligner Architecture',
    price: 'Program 6–12 Bulan',
    desc: 'Merapikan susunan gigi dan gigitan tanpa kawat logam. Dirancang menggunakan pemindaian intraoral 3D sehingga progres pergeseran gigi terlihat sejak hari pertama.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&auto=format&fit=crop',
    specs: ['Tanpa Kawat Logam', 'Nyaman Saat Rapat', 'Kontrol Bulanan Privat'],
  },
  {
    index: '03',
    tag: 'Permanent Restoration',
    title: 'Titanium Dental Implant',
    price: 'Konsultasi CBCT 3D',
    desc: 'Menggantikan gigi yang hilang hingga ke akarnya dengan implan titanium medis dan mahkota porselen sewarna gigi asli, tanpa mengasah gigi sehat di sebelahnya.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1200&auto=format&fit=crop',
    specs: ['Pemindaian CT 3D', 'Abutment Presisi', 'Fungsi Kunyah Alami'],
  },
];

const consultHref = (topic) =>
  whatsappHref(`Halo AUREA Dental Atelier, saya ingin menjadwalkan konsultasi privat untuk ${topic}.`);

onMounted(() => {
  const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
  const inThumbnail = Boolean(rootRef.value?.closest('.design-thumbnail-wrapper'));
  if (prefersReduced || inThumbnail) return;

  gsapCtx = gsap.context(() => {
    if (heroImg.value) {
      gsap.fromTo(
        heroImg.value,
        { scale: 1.08 },
        { scale: 1, duration: 2.2, ease: 'power2.out' }
      );
    }

    if (heroCopy.value) {
      gsap.from(heroCopy.value, {
        opacity: 0,
        y: 36,
        duration: 1.1,
        ease: 'power3.out',
      });
    }

    const reveals = rootRef.value?.querySelectorAll('.aurea-reveal') || [];
    reveals.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 86%',
          once: true,
        },
        opacity: 0,
        y: 32,
        duration: 0.9,
        ease: 'power2.out',
      });
    });
  }, rootRef.value);
});

onUnmounted(() => {
  gsapCtx?.revert();
});
</script>

<template>
  <div ref="rootRef" class="aurea">
    <header class="aurea-header">
      <div class="aurea-wrap aurea-header-row">
        <a href="#top" class="aurea-brand">
          <strong>AUREA</strong>
          <span>DENTAL ATELIER</span>
        </a>

        <nav class="aurea-nav" aria-label="Navigasi klinik dental kosmetik">
          <a href="#filosofi">Filosofi</a>
          <a href="#shade">Shade Guide</a>
          <a href="#karya">Prosedur</a>
          <a href="#konsultasi">Private Suite</a>
        </nav>

        <a :href="consultHref('konsultasi 3D Smile Design')" target="_blank" rel="noopener" class="aurea-nav-cta">
          Private Booking
        </a>
      </div>
    </header>

    <!-- 1. Full-Viewport Cinematic Hero -->
    <section id="top" class="aurea-hero">
      <div class="aurea-hero-bg">
        <img
          ref="heroImg"
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1800&auto=format&fit=crop"
          alt="Studio perawatan kosmetik gigi AUREA Dental Atelier"
        />
        <div class="aurea-hero-scrim"></div>
      </div>

      <div ref="heroCopy" class="aurea-wrap aurea-hero-inner">
        <div class="aurea-hero-headline">
          <span class="aurea-kicker">SENOPATI &bull; PIK &bull; BY APPOINTMENT ONLY</span>
          <h1>
            SENYUM<br />
            <em>DIRANCANG</em><br />
            PRESISI.
          </h1>
          <p>
            Klinik kosmetik &amp; implan gigi privat. Coba langsung desain mockup senyum Anda di cermin sebelum satu milimeter pun enamel disentuh.
          </p>
          <div class="aurea-hero-actions">
            <a :href="consultHref('sesi 3D Smile Scan & Trial Smile')" target="_blank" rel="noopener" class="aurea-btn-gold">
              Jadwalkan 3D Smile Scan
            </a>
            <a href="#filosofi" class="aurea-btn-link">Pelajari Pendekatan Kami &darr;</a>
          </div>
        </div>
      </div>

      <div class="aurea-hero-dock" aria-label="Standar studio">
        <div><strong>0.3 mm</strong><span>Minimal-Prep Porcelain</span></div>
        <div><strong>CBCT 3D</strong><span>Digital Smile Architecture</span></div>
        <div><strong>1-on-1</strong><span>Private Patient Suite</span></div>
      </div>
    </section>

    <!-- 2. Staggered Asymmetric Philosophy -->
    <section id="filosofi" class="aurea-philosophy">
      <div class="aurea-wrap aurea-phil-grid">
        <div class="aurea-phil-copy aurea-reveal">
          <span class="aurea-kicker">THE ANTI-COOKIE-CUTTER SMILE</span>
          <h2>Kami tidak mencetak bentuk gigi yang sama untuk setiap wajah.</h2>
          <div class="aurea-rule"></div>
          <p>
            Senyum yang berkelas tidak terlihat seperti “gigi palsu” yang putih rata dan kaku. Di Aurea, proporsi rahang, kontur bibir, dan cara Anda berbicara direkam dalam foto serta pemindaian 3D sebelum ceramist kami membentuk tiap lengkung porselen.
          </p>
          <p>
            Melalui sesi <strong>Trial Smile</strong>, Anda dapat melihat dan merasakan bentuk akhir di mulut Anda sendiri sebelum proses permanen dimulai.
          </p>
        </div>

        <div class="aurea-staggered aurea-reveal">
          <figure class="aurea-stagger-a">
            <img
              src="https://images.unsplash.com/photo-1663755489920-5e09f66d011a?w=900&auto=format&fit=crop"
              alt="Pemeriksaan presisi bersama dokter spesialis"
              loading="lazy"
            />
          </figure>
          <figure class="aurea-stagger-b">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&auto=format&fit=crop"
              alt="Ruang perawatan steril dan privat"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>

    <!-- 3. Dramatic Pearl Ivory Band: Interactive Shade Guide -->
    <section id="shade" class="aurea-ivory-band">
      <div class="aurea-wrap aurea-ivory-grid">
        <div class="aurea-ivory-media aurea-reveal">
          <div class="aurea-ivory-frame">
            <img :src="activeShade.image" :alt="activeShade.name" loading="lazy" />
          </div>
          <div class="aurea-overlap-card" aria-live="polite">
            <span class="aurea-swatch-badge" :style="{ background: activeShade.swatch }">{{ activeShade.code }}</span>
            <strong>{{ activeShade.name }}</strong>
            <small>{{ activeShade.translucency }}</small>
          </div>
        </div>

        <div class="aurea-ivory-copy aurea-reveal">
          <span class="aurea-kicker-dark">INTERACTIVE SHADE SELECTION</span>
          <h2>Temukan spektrum putih yang paling natural bagi karakter wajah Anda.</h2>
          <p>{{ activeShade.note }}</p>

          <div class="aurea-shade-tabs" role="tablist" aria-label="Pilih warna gigi">
            <button
              v-for="s in shades"
              :key="s.code"
              type="button"
              role="tab"
              :aria-selected="selectedShade === s.code"
              :class="{ active: selectedShade === s.code }"
              @click="selectedShade = s.code"
            >
              <span class="aurea-dot" :style="{ background: s.swatch }" aria-hidden="true"></span>
              <span>{{ s.code }} &bull; {{ s.name }}</span>
            </button>
          </div>

          <a :href="consultHref(`uji coba shade ${activeShade.code} (${activeShade.name})`)" target="_blank" rel="noopener" class="aurea-btn-dark">
            Coba Shade {{ activeShade.code }} di Studio &rarr;
          </a>
        </div>
      </div>
    </section>

    <!-- 4. Alternating Full-Scale Signature Procedures -->
    <section id="karya" class="aurea-showcase">
      <div class="aurea-wrap">
        <div class="aurea-showcase-head aurea-reveal">
          <span class="aurea-kicker">SIGNATURE PROCEDURES</span>
          <h2>Tiga pilar transformasi estetika &amp; fungsi kunyah jangka panjang.</h2>
        </div>

        <div class="aurea-work-list">
          <article
            v-for="(work, idx) in signatureWorks"
            :key="work.index"
            class="aurea-work-row aurea-reveal"
            :class="{ reverse: idx % 2 !== 0 }"
          >
            <div class="aurea-work-photo">
              <img :src="work.image" :alt="work.title" loading="lazy" />
            </div>

            <div class="aurea-work-copy">
              <span class="aurea-work-num">{{ work.index }} // {{ work.tag }}</span>
              <h3>{{ work.title }}</h3>
              <strong class="aurea-work-price">{{ work.price }}</strong>
              <p>{{ work.desc }}</p>
              <ul>
                <li v-for="spec in work.specs" :key="spec">{{ spec }}</li>
              </ul>
              <a :href="consultHref(work.title)" target="_blank" rel="noopener" class="aurea-sweep-btn">
                <span>Konsultasi Prosedur Ini</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 5. Private Suite Teaser Form -->
    <div id="konsultasi" class="aurea-teaser-wrap">
      <PreviewLeadTeaser
        business-name="AUREA Dental Atelier"
        heading="Reservasi Sesi Private Smile Consultation"
        subheading="Nikmati konsultasi 1-on-1 dengan dokter spesialis prostodonsia atau ortodonti kami tanpa keramaian ruang tunggu."
        cta-label="Ajukan Jadwal Konsultasi Privat"
        :service-options="[
          '3D Digital Smile Design & Veneer E.max',
          'Invisible Clear Aligner',
          'Titanium Dental Implant',
          'Cold-Light Laser Bleaching',
          'Second Opinion Estetika Gigi'
        ]"
        accent-color="#D4AF37"
        accent-text-color="#09090B"
        surface-bg="#09090B"
        :dark="true"
      />
    </div>

    <footer class="aurea-footer">
      <div class="aurea-wrap aurea-footer-row">
        <div>
          <strong>AUREA DENTAL ATELIER</strong>
          <p>Jl. Senopati Raya No. 64, Jakarta Selatan &bull; Private Suite 10.00 – 20.00 WIB</p>
        </div>
        <span>Preview Niche Dokter Gigi Kosmetik &bull; Landingo</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&family=Space+Grotesk:wght@400;500;600;700&display=swap');

.aurea {
  min-height: 100vh;
  background: #09090b;
  color: #fafafa;
  font-family: 'Space Grotesk', sans-serif;
  line-height: 1.65;
  overflow-x: hidden;
}

.aurea-wrap {
  width: min(1220px, calc(100% - 40px));
  margin-inline: auto;
}

.aurea-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(9, 9, 11, 0.85);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.aurea-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  min-height: 76px;
}

.aurea-brand {
  text-decoration: none;
  color: #fafafa;
}

.aurea-brand strong {
  display: block;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  line-height: 1;
}

.aurea-brand span {
  display: block;
  margin-top: 3px;
  font-size: 0.6rem;
  letter-spacing: 0.24em;
  color: #d4af37;
}

.aurea-nav {
  display: flex;
  gap: 28px;
}

.aurea-nav a {
  color: #a1a1aa;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.2s ease;
}

.aurea-nav a:hover {
  color: #fafafa;
}

.aurea-nav-cta,
.aurea-btn-gold,
.aurea-btn-dark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 10px 22px;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.25s ease, color 0.25s ease;
}

.aurea-nav-cta {
  border: 1px solid #d4af37;
  color: #d4af37;
}

.aurea-nav-cta:hover,
.aurea-btn-gold {
  background: #d4af37;
  color: #09090b;
}

.aurea-btn-gold:hover {
  background: #e5c458;
}

.aurea-btn-dark {
  background: #111111;
  color: #faf9f6;
}

.aurea-btn-dark:hover {
  background: #9a6b2f;
  color: #ffffff;
}

.aurea-kicker {
  display: block;
  margin-bottom: 16px;
  color: #d4af37;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.aurea-kicker-dark {
  display: block;
  margin-bottom: 14px;
  color: #8a5a19;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

/* 1. Full-Viewport Hero */
.aurea-hero {
  position: relative;
  min-height: min(92vh, 840px);
  display: flex;
  align-items: flex-end;
  padding: 120px 0 76px;
  overflow: hidden;
  border-bottom: 1px solid #27272a;
}

.aurea-hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.aurea-hero-bg img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.68) contrast(1.06);
}

.aurea-hero-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    #09090b 8%,
    rgba(9, 9, 11, 0.58) 52%,
    rgba(9, 9, 11, 0.25) 100%
  );
}

.aurea-hero-inner {
  position: relative;
  z-index: 10;
}

.aurea-hero-headline {
  max-width: 780px;
}

.aurea-hero-headline h1 {
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(3.4rem, 8.5vw, 7rem);
  font-weight: 600;
  line-height: 0.92;
  letter-spacing: -0.02em;
}

.aurea-hero-headline h1 em {
  font-style: italic;
  font-weight: 500;
  color: #e5c76b;
}

.aurea-hero-headline p {
  margin: 26px 0 32px;
  max-width: 520px;
  color: #d4d4d8;
  font-size: 1.05rem;
}

.aurea-hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 22px;
}

.aurea-btn-link {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  color: #fafafa;
  font-size: 0.86rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border-bottom: 1px solid rgba(250, 250, 250, 0.45);
}

.aurea-hero-dock {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 32px;
  padding: 24px 36px;
  background: rgba(15, 15, 18, 0.92);
  border-top: 1px solid #27272a;
  border-left: 1px solid #27272a;
}

.aurea-hero-dock strong {
  display: block;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.65rem;
  color: #e5c76b;
  line-height: 1.1;
}

.aurea-hero-dock span {
  display: block;
  margin-top: 4px;
  font-size: 0.72rem;
  color: #a1a1aa;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

/* 2. Staggered Philosophy */
.aurea-philosophy {
  padding: clamp(80px, 11vw, 140px) 0;
}

.aurea-phil-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: clamp(36px, 6vw, 84px);
  align-items: center;
}

.aurea-phil-copy h2 {
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.3rem, 4.2vw, 3.5rem);
  font-weight: 600;
  line-height: 1.08;
}

.aurea-rule {
  width: 56px;
  height: 2px;
  background: #d4af37;
  margin: 26px 0;
}

.aurea-phil-copy p {
  margin: 0 0 18px;
  color: #a1a1aa;
  font-size: 1rem;
}

.aurea-staggered {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: start;
}

.aurea-staggered figure {
  margin: 0;
  overflow: hidden;
  background: #141418;
}

.aurea-stagger-a {
  margin-top: 52px !important;
}

.aurea-staggered img {
  display: block;
  width: 100%;
  height: 390px;
  object-fit: cover;
  filter: grayscale(35%) contrast(1.05);
  transition: transform 0.6s ease, filter 0.6s ease;
}

.aurea-staggered figure:hover img {
  transform: scale(1.04);
  filter: grayscale(0%) contrast(1.05);
}

/* 3. Ivory Band: Interactive Shade Guide */
.aurea-ivory-band {
  padding: clamp(76px, 10vw, 128px) 0;
  background: #f4efe6;
  color: #161412;
}

.aurea-ivory-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: clamp(36px, 6vw, 76px);
  align-items: center;
}

.aurea-ivory-media {
  position: relative;
  padding-bottom: 24px;
}

.aurea-ivory-frame {
  overflow: hidden;
  aspect-ratio: 4 / 4.6;
  background: #e3dcd0;
}

.aurea-ivory-frame img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.aurea-overlap-card {
  position: absolute;
  right: -16px;
  bottom: 0;
  max-width: 280px;
  padding: 18px 20px;
  background: #ffffff;
  color: #161412;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
  border-left: 3px solid #9a6b2f;
}

.aurea-swatch-badge {
  display: inline-block;
  padding: 3px 10px;
  border: 1px solid #d6cfc3;
  color: #161412;
  font-size: 0.72rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.aurea-overlap-card strong {
  display: block;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.35rem;
}

.aurea-overlap-card small {
  display: block;
  color: #57534e;
  font-size: 0.78rem;
}

.aurea-ivory-copy h2 {
  margin: 0 0 16px;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 600;
  line-height: 1.08;
}

.aurea-ivory-copy > p {
  margin: 0 0 26px;
  color: #44403c;
  font-size: 1rem;
}

.aurea-shade-tabs {
  display: grid;
  gap: 10px;
  margin-bottom: 28px;
}

.aurea-shade-tabs button {
  display: flex;
  align-items: center;
  gap: 14px;
  min-height: 54px;
  padding: 12px 18px;
  border: 1px solid #d6cfc3;
  background: #faf7f2;
  color: #161412;
  font: inherit;
  font-size: 0.92rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.aurea-shade-tabs button.active {
  border-color: #161412;
  background: #161412;
  color: #faf7f2;
}

.aurea-dot {
  flex: none;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  border: 1px solid #a8a29e;
}

/* 4. Alternating Full-Scale Showcase */
.aurea-showcase {
  padding: clamp(80px, 11vw, 140px) 0;
  background: #0e0e11;
  border-bottom: 1px solid #27272a;
}

.aurea-showcase-head {
  max-width: 720px;
  margin-bottom: clamp(48px, 7vw, 88px);
}

.aurea-showcase-head h2 {
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.3rem, 4.5vw, 3.6rem);
  font-weight: 600;
  line-height: 1.08;
}

.aurea-work-list {
  display: grid;
  gap: clamp(64px, 9vw, 120px);
}

.aurea-work-row {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: clamp(28px, 5vw, 68px);
  align-items: center;
}

.aurea-work-row.reverse {
  grid-template-columns: 0.8fr 1.2fr;
}

.aurea-work-row.reverse .aurea-work-photo {
  order: 2;
}

.aurea-work-photo {
  overflow: hidden;
  aspect-ratio: 16 / 10;
  background: #18181b;
}

.aurea-work-photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(40%);
  transition: transform 0.7s ease, filter 0.7s ease;
}

.aurea-work-row:hover .aurea-work-photo img {
  transform: scale(1.04);
  filter: grayscale(0%);
}

.aurea-work-num {
  display: block;
  color: #d4af37;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.aurea-work-copy h3 {
  margin: 0 0 6px;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.9rem, 3.2vw, 2.6rem);
  font-weight: 600;
  line-height: 1.1;
}

.aurea-work-price {
  display: block;
  margin-bottom: 16px;
  color: #e5c76b;
  font-size: 0.94rem;
}

.aurea-work-copy p {
  margin: 0 0 18px;
  color: #a1a1aa;
  font-size: 0.95rem;
}

.aurea-work-copy ul {
  margin: 0 0 26px;
  padding-left: 16px;
  border-left: 2px solid #d4af37;
  list-style: none;
  display: grid;
  gap: 6px;
  color: #e4e4e7;
  font-size: 0.86rem;
}

.aurea-sweep-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  min-height: 46px;
  padding: 12px 24px;
  border: 1px solid #3f3f46;
  color: #fafafa;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  overflow: hidden;
}

.aurea-sweep-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  width: 0;
  background: #d4af37;
  transition: width 0.25s ease;
  z-index: 0;
}

.aurea-sweep-btn:hover::before {
  width: 100%;
}

.aurea-sweep-btn span {
  position: relative;
  z-index: 1;
  transition: color 0.25s ease;
}

.aurea-sweep-btn:hover span {
  color: #09090b;
}

.aurea-teaser-wrap {
  border-bottom: 1px solid #27272a;
}

.aurea-footer {
  padding: 28px 0;
  background: #050506;
  color: #a1a1aa;
  font-size: 0.82rem;
}

.aurea-footer-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
}

.aurea-footer p {
  margin: 4px 0 0;
  color: #71717a;
}

@media (max-width: 900px) {
  .aurea-nav {
    display: none;
  }
  .aurea-hero {
    padding-bottom: 48px;
  }
  .aurea-hero-dock {
    display: none;
  }
  .aurea-phil-grid,
  .aurea-ivory-grid,
  .aurea-work-row,
  .aurea-work-row.reverse {
    grid-template-columns: 1fr;
  }
  .aurea-work-row.reverse .aurea-work-photo {
    order: 0;
  }
  .aurea-overlap-card {
    right: 12px;
  }
}

@media (max-width: 560px) {
  .aurea-staggered {
    grid-template-columns: 1fr;
  }
  .aurea-stagger-a {
    margin-top: 0 !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .aurea-staggered img,
  .aurea-work-photo img,
  .aurea-sweep-btn::before {
    transition: none;
  }
}
</style>
