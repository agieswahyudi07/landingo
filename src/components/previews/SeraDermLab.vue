<script setup>
import { computed, ref } from 'vue';
import PreviewLeadTeaser from '@/components/previews/shared/PreviewLeadTeaser.vue';
import { whatsappHref } from '@/lib/whatsapp';

const concerns = [
  {
    id: 'pigment',
    label: 'Flek & Melasma',
    code: 'PIG-755',
    protocol: 'Pico Clarity Dual-Wavelength',
    modality: 'Picosecond Laser 755nm + Tranexamic Infusion',
    sessions: '3–5 Sesi (Interval 4 Minggu)',
    downtime: 'Kemerahan ringan 2–4 jam',
    price: 'Mulai Rp 1.350.000',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&auto=format&fit=crop',
    summary:
      'Memecah partikel melanin membandel dengan energi fotoakustik ultra-singkat tanpa memicu efek panas berlebih pada kulit Asia.',
    steps: [
      'Pemetaan kedalaman pigmen dengan 3D Skin Analyzer',
      'Penembakan laser picosecond terkalibrasi oleh Sp.DVE',
      'Aplikasi serum pencerah steril & tabir surya medis SPF 50+',
    ],
  },
  {
    id: 'scar',
    label: 'Acne Scar & Pori',
    code: 'TEX-294',
    protocol: 'Fractional Microneedle RF + Exosome',
    modality: 'Gold-Plated Insulated RF + 5B Exosome',
    sessions: '3 Sesi (Interval 4–6 Minggu)',
    downtime: '1–2 Hari (Micro-crust halus)',
    price: 'Mulai Rp 1.850.000',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1200&auto=format&fit=crop',
    summary:
      'Merangsang neokolagenesis langsung di lapisan dermis untuk meratakan tekstur bopeng (rolling/boxcar) dan mengecilkan pori.',
    steps: [
      'Anestesi topikal presisi 35 menit untuk kenyamanan optimal',
      'Penghantaran energi RF ke kedalaman dermis 1.5–2.5 mm',
      'Infusi Exosome untuk mempercepat pemulihan jaringan 2x lebih cepat',
    ],
  },
  {
    id: 'lifting',
    label: 'Jawline & Lifting',
    code: 'LFT-SMAS',
    protocol: 'MFU-V Non-Surgical SMAS Lift',
    modality: 'Micro-Focused Ultrasound Visualization',
    sessions: '1 Sesi (Bertahan 12–18 Bulan)',
    downtime: 'Tanpa Downtime',
    price: 'Mulai Rp 3.900.000',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&auto=format&fit=crop',
    summary:
      'Mengencangkan lapisan otot SMAS di area pipi bawah, double chin, dan garis rahang tanpa sayatan bedah maupun jarum.',
    steps: [
      'Visualisasi ultrasound real-time untuk memetakan kedalaman jaringan',
      'Tembakan titik koagulasi termal pada kedalaman 3.0mm & 4.5mm',
      'Kompres dingin peptida untuk meredakan rasa hangat pasca-tindakan',
    ],
  },
  {
    id: 'barrier',
    label: 'Glass Skin & Barrier',
    code: 'HYD-PN2',
    protocol: 'Polynucleotide Cellular Booster',
    modality: 'PN 2% + Cross-Linked Hyaluronic',
    sessions: '2–3 Sesi (Interval 3 Minggu)',
    downtime: 'Bintik mikro hilang dalam 24 jam',
    price: 'Mulai Rp 2.150.000',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&auto=format&fit=crop',
    summary:
      'Memulihkan skin barrier tipis, kemerahan kronis, dan dehidrasi dalam dengan nutrisi DNA polinukleotida murni.',
    steps: [
      'Evaluasi hidrasi & transepidermal water loss (TEWL)',
      'Mikro-injeksi merata di seluruh area wajah dan leher',
      'Terapi LED Red Light 633nm untuk menenangkan kulit',
    ],
  },
];

const devices = [
  {
    code: 'DEVICE 01',
    name: 'PicoSure Pro 755nm',
    spec: '750ps Pulse • FDA Cleared',
    desc: 'Standar emas laser picosecond untuk melasma, tato, dan peremajaan tanpa merusak epidermis.',
  },
  {
    code: 'DEVICE 02',
    name: 'Ultherapy MFU-V',
    spec: '1.5mm / 3.0mm / 4.5mm Depth',
    desc: 'Satu-satunya teknologi lifting non-invasif dengan visualisasi layar ultrasound real-time.',
  },
  {
    code: 'DEVICE 03',
    name: 'Visia 3D Complexion',
    spec: 'Multi-Spectral UV & RBX',
    desc: 'Mendeteksi flek tersembunyi, pori, dan profil vaskular di bawah kulit sebelum tindakan.',
  },
];

const doctors = [
  {
    name: 'dr. Nadya Larasati, Sp.DVE',
    role: 'Medical Director • Laser & Pigment Specialist',
    cred: 'STR & SIP Terverifikasi • 11 Tahun Pengalaman Klinis',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop',
  },
  {
    name: 'dr. Ardiansyah Putra, Sp.KK',
    role: 'Lead Aesthetic Dermatologist • Injectables & Lifting',
    cred: 'Fellowship Korea Aesthetic Medicine • 9 Tahun Pengalaman',
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop',
  },
];

const activeId = ref(concerns[0].id);
const activeConcern = computed(
  () => concerns.find((item) => item.id === activeId.value) || concerns[0]
);

const consultHref = (topic) =>
  whatsappHref(`Halo SÉRA Derm Lab, saya ingin reservasi konsultasi untuk ${topic}.`);
</script>

<template>
  <div class="sera-lab" id="top">
    <!-- Sticky Clinical Header -->
    <header class="sera-header">
      <div class="sera-wrap sera-header-inner">
        <a href="#top" class="sera-brand" aria-label="SÉRA Derm Lab Beranda">
          <span class="sera-brand-mark" aria-hidden="true"></span>
          <span class="sera-brand-text">
            <strong>SÉRA</strong>
            <small>DERM LAB</small>
          </span>
        </a>

        <nav class="sera-nav" aria-label="Navigasi utama klinik">
          <a href="#protokol">Protokol Kulit</a>
          <a href="#teknologi">Teknologi</a>
          <a href="#dokter">Tim Dokter</a>
          <a href="#reservasi">Reservasi</a>
        </nav>

        <a
          :href="consultHref('Analisa Kulit 3D')"
          target="_blank"
          rel="noopener"
          class="sera-header-cta"
        >
          Konsultasi Dokter
        </a>
      </div>
    </header>

    <!-- 1. Cinematic Full-Viewport Hero -->
    <section class="sera-hero">
      <div class="sera-hero-media" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1600&auto=format&fit=crop"
          alt=""
        />
        <div class="sera-hero-scrim"></div>
      </div>

      <div class="sera-wrap sera-hero-content">
        <div class="sera-hero-copy">
          <p class="sera-eyebrow">CLINICAL DERMATOLOGY &bull; SENOPATI &bull; MENTENG</p>
          <h1>Presisi Medis untuk <em>Kulit Bercahaya</em>.</h1>
          <p class="sera-hero-lead">
            Klinik dermatologi estetika berbasis diagnosa 3D dan teknologi laser berizin FDA. Setiap tindakan ditangani langsung oleh dokter spesialis kulit (Sp.DVE/Sp.KK) tanpa paket paksaan.
          </p>

          <div class="sera-hero-actions">
            <a href="#protokol" class="sera-btn-primary">
              Cek Protokol Keluhan
            </a>
            <a
              :href="consultHref('Jadwal Analisa Kulit 3D')"
              target="_blank"
              rel="noopener"
              class="sera-btn-ghost"
            >
              Jadwalkan Analisa 3D &rarr;
            </a>
          </div>
        </div>

        <!-- Floating Clinical Trust Dock -->
        <div class="sera-stat-dock" aria-label="Standar klinis SÉRA Derm Lab">
          <div class="sera-stat-item">
            <span class="sera-mono">01 / SPESIALIS</span>
            <strong>100% Dokter Sp.DVE</strong>
            <small>Diagnosa &amp; tindakan medis langsung</small>
          </div>
          <div class="sera-stat-item">
            <span class="sera-mono">02 / OTORISASI</span>
            <strong>FDA &amp; Kemenkes RI</strong>
            <small>Perangkat laser &amp; lifting tersertifikasi</small>
          </div>
          <div class="sera-stat-item">
            <span class="sera-mono">03 / TRANSPARAN</span>
            <strong>Protokol Terukur</strong>
            <small>Estimasi sesi &amp; biaya jelas sejak awal</small>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Interactive Skin Concern Finder (Light Alabaster Band) -->
    <section id="protokol" class="sera-section sera-section-light">
      <div class="sera-wrap">
        <div class="sera-section-head">
          <div>
            <span class="sera-kicker">DIAGNOSTIC PROTOCOL FINDER</span>
            <h2>Pilih keluhan kulit Anda, lihat protokol medisnya.</h2>
          </div>
          <p class="sera-section-desc">
            Tidak perlu menebak treatment yang cocok. Klik fokus masalah kulit untuk melihat rekomendasi alat, durasi pemulihan, dan estimasi biaya.
          </p>
        </div>

        <div class="sera-finder">
          <div class="sera-concern-tabs" role="tablist" aria-label="Pilih keluhan kulit">
            <button
              v-for="item in concerns"
              :key="item.id"
              type="button"
              role="tab"
              :aria-selected="activeId === item.id"
              class="sera-concern-btn"
              :class="{ 'is-active': activeId === item.id }"
              @click="activeId = item.id"
            >
              <span class="sera-mono">{{ item.code }}</span>
              <strong>{{ item.label }}</strong>
              <span class="sera-concern-arrow" aria-hidden="true">&rarr;</span>
            </button>
          </div>

          <div class="sera-protocol-card" role="tabpanel">
            <div class="sera-protocol-media">
              <img :src="activeConcern.image" :alt="activeConcern.protocol" />
              <span class="sera-protocol-badge">{{ activeConcern.downtime }}</span>
            </div>

            <div class="sera-protocol-body">
              <div class="sera-protocol-top">
                <span class="sera-mono sera-teal-text">{{ activeConcern.modality }}</span>
                <h3>{{ activeConcern.protocol }}</h3>
                <p>{{ activeConcern.summary }}</p>
              </div>

              <div class="sera-protocol-meta">
                <div>
                  <small>Rekomendasi Sesi</small>
                  <strong>{{ activeConcern.sessions }}</strong>
                </div>
                <div>
                  <small>Estimasi Investasi</small>
                  <strong>{{ activeConcern.price }}</strong>
                </div>
              </div>

              <ul class="sera-protocol-steps">
                <li v-for="(step, idx) in activeConcern.steps" :key="step">
                  <span class="sera-mono">0{{ idx + 1 }}</span>
                  <span>{{ step }}</span>
                </li>
              </ul>

              <div class="sera-protocol-cta">
                <a
                  :href="consultHref(activeConcern.protocol)"
                  target="_blank"
                  rel="noopener"
                  class="sera-btn-primary"
                >
                  Reservasi Protokol Ini
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. High-Contrast Obsidian Rhythm Band: Medical Technology -->
    <section id="teknologi" class="sera-section sera-section-dark">
      <div class="sera-wrap sera-tech-grid">
        <div class="sera-tech-intro">
          <span class="sera-kicker sera-kicker-teal">MEDICAL INFRASTRUCTURE</span>
          <h2>Perangkat klinis terkalibrasi untuk keamanan kulit Asia.</h2>
          <p>
            Setiap mesin di SÉRA Derm Lab menjalani kalibrasi berkala oleh teknisi medis resmi untuk memastikan energi laser tepat sasaran tanpa risiko hiperpigmentasi pasca-inflamasi.
          </p>

          <div class="sera-tech-photo">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"
              alt="Ruang diagnosa dan teknologi medis SÉRA Derm Lab"
            />
          </div>
        </div>

        <div class="sera-device-list">
          <article v-for="device in devices" :key="device.code" class="sera-device-card">
            <div class="sera-device-head">
              <span class="sera-mono sera-teal-text">{{ device.code }}</span>
              <span class="sera-mono sera-device-spec">{{ device.spec }}</span>
            </div>
            <h3>{{ device.name }}</h3>
            <p>{{ device.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- 4. Asymmetric Specialist Team & Private Suite -->
    <section id="dokter" class="sera-section sera-section-white">
      <div class="sera-wrap">
        <div class="sera-section-head">
          <div>
            <span class="sera-kicker">BOARD-CERTIFIED SPECIALISTS</span>
            <h2>Ditangani dokter spesialis kulit, bukan terapis tanpa supervisi.</h2>
          </div>
          <a
            :href="consultHref('Konsultasi dengan Dokter Spesialis')"
            target="_blank"
            rel="noopener"
            class="sera-link-underline"
          >
            Cek Jadwal Praktek Dokter &rarr;
          </a>
        </div>

        <div class="sera-doctors-layout">
          <article v-for="doc in doctors" :key="doc.name" class="sera-doctor-card">
            <div class="sera-doctor-photo">
              <img :src="doc.photo" :alt="doc.name" />
            </div>
            <div class="sera-doctor-info">
              <span class="sera-mono sera-teal-text">{{ doc.cred }}</span>
              <h3>{{ doc.name }}</h3>
              <p>{{ doc.role }}</p>
            </div>
          </article>

          <aside class="sera-suite-card">
            <img
              src="https://images.unsplash.com/photo-1663755489920-5e09f66d011a?w=1200&auto=format&fit=crop"
              alt="Private treatment suite SÉRA Derm Lab"
            />
            <div class="sera-suite-caption">
              <span class="sera-mono">PRIVATE SUITE</span>
              <strong>Ruang Tindakan Steril &amp; Privat</strong>
              <p>1 pasien per ruangan dengan sistem filtrasi udara HEPA medis.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- 5. Integrated Dual-Action Lead Teaser -->
    <section id="reservasi" class="sera-lead-band">
      <PreviewLeadTeaser
        business-name="SÉRA Derm Lab"
        heading="Jadwalkan Analisa Kulit 3D &amp; Konsultasi Dokter"
        subheading="Isi data singkat di bawah untuk mendapatkan slot konsultasi prioritas di cabang Senopati atau Menteng."
        cta-label="Lanjut ke WhatsApp Klinik"
        :service-options="[
          'Analisa Kulit 3D + Konsultasi Dokter',
          'Pico Clarity Laser (Flek & Melasma)',
          'MFU-V Lifting (Jawline & Anti-Aging)',
          'Fractional RF + Exosome (Acne Scar)',
          'Polynucleotide Glass Skin Booster',
        ]"
        accent-color="#0F766E"
        accent-text-color="#FFFFFF"
        surface-bg="#F1F5F9"
      />
    </section>

    <!-- 6. Minimalist Clinical Footer -->
    <footer class="sera-footer">
      <div class="sera-wrap sera-footer-inner">
        <div>
          <strong class="sera-footer-brand">SÉRA DERM LAB</strong>
          <p>Klinik Dermatologi Estetika &amp; Laser Medis Berizin Resmi.</p>
        </div>

        <div class="sera-footer-cols">
          <div>
            <span class="sera-mono">SENOPATI</span>
            <p>Jl. Suryo No. 42, Kebayoran Baru, Jakarta Selatan</p>
          </div>
          <div>
            <span class="sera-mono">MENTENG</span>
            <p>Jl. Teuku Cik Ditiro No. 18, Jakarta Pusat</p>
          </div>
          <div>
            <span class="sera-mono">JAM PRAKTEK</span>
            <p>Selasa – Minggu, 10.00 – 19.00 WIB</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=IBM+Plex+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

.sera-lab {
  --sera-bg: #f7f8fa;
  --sera-surface: #ffffff;
  --sera-obsidian: #0d1418;
  --sera-ink: #0f172a;
  --sera-muted: #475569;
  --sera-teal: #0f766e;
  --sera-teal-bright: #2dd4bf;
  --sera-border: #e2e7ee;

  background: var(--sera-bg);
  color: var(--sera-ink);
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
}

.sera-wrap {
  width: min(1220px, calc(100% - 2.5rem));
  margin-inline: auto;
}

.sera-mono {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.sera-teal-text {
  color: var(--sera-teal);
}

.sera-section-dark .sera-teal-text,
.sera-kicker-teal {
  color: var(--sera-teal-bright);
}

/* Header */
.sera-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(247, 248, 250, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--sera-border);
}

.sera-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  min-height: 70px;
}

.sera-brand {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  text-decoration: none;
  color: var(--sera-ink);
}

.sera-brand-mark {
  width: 10px;
  height: 28px;
  background: var(--sera-teal);
  border-radius: 2px;
}

.sera-brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.05;
}

.sera-brand-text strong {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.45rem;
  font-weight: 600;
  letter-spacing: 0.14em;
}

.sera-brand-text small {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  color: var(--sera-muted);
}

.sera-nav {
  display: flex;
  align-items: center;
  gap: 1.8rem;
}

.sera-nav a {
  color: var(--sera-muted);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.sera-nav a:hover,
.sera-nav a:focus-visible {
  color: var(--sera-teal);
}

.sera-header-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 1.25rem;
  background: var(--sera-obsidian);
  color: #ffffff;
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  border-radius: 999px;
  transition: background-color 0.2s ease;
}

.sera-header-cta:hover,
.sera-header-cta:focus-visible {
  background: var(--sera-teal);
}

/* Cinematic Full-Viewport Hero */
.sera-hero {
  position: relative;
  min-height: clamp(620px, 88vh, 840px);
  display: flex;
  align-items: flex-end;
  padding: clamp(4.5rem, 8vw, 7rem) 0 clamp(2.5rem, 4vw, 3.5rem);
  color: #ffffff;
  overflow: hidden;
}

.sera-hero-media {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.sera-hero-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 22%;
}

.sera-hero-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    100deg,
    rgba(13, 20, 24, 0.9) 0%,
    rgba(13, 20, 24, 0.68) 48%,
    rgba(13, 20, 24, 0.28) 100%
  );
}

.sera-hero-content {
  position: relative;
  z-index: 2;
  display: grid;
  gap: 2.5rem;
}

.sera-hero-copy {
  max-width: 660px;
}

.sera-eyebrow {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.74rem;
  letter-spacing: 0.16em;
  color: var(--sera-teal-bright);
  margin: 0 0 1rem;
}

.sera-hero-copy h1 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(2.75rem, 5.4vw, 4.75rem);
  font-weight: 500;
  line-height: 1.03;
  letter-spacing: -0.02em;
  margin: 0 0 1.25rem;
}

.sera-hero-copy h1 em {
  font-style: italic;
  color: #cbd5e1;
}

.sera-hero-lead {
  font-size: clamp(1rem, 1.3vw, 1.125rem);
  color: #e2e8f0;
  max-width: 56ch;
  margin: 0 0 2rem;
}

.sera-hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}

.sera-btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 1.5rem;
  background: var(--sera-teal);
  color: #ffffff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 999px;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.sera-btn-primary:hover,
.sera-btn-primary:focus-visible {
  background: #0d9488;
  transform: translateY(-1px);
}

.sera-btn-ghost {
  display: inline-flex;
  align-items: center;
  min-height: 46px;
  padding: 0 1.15rem;
  color: #ffffff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.34);
  border-radius: 999px;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.sera-btn-ghost:hover,
.sera-btn-ghost:focus-visible {
  border-color: var(--sera-teal-bright);
  background: rgba(255, 255, 255, 0.08);
}

/* Floating Stat Dock */
.sera-stat-dock {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  overflow: hidden;
}

.sera-stat-item {
  background: rgba(13, 20, 24, 0.78);
  padding: 1.15rem 1.35rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.sera-stat-item .sera-mono {
  color: var(--sera-teal-bright);
}

.sera-stat-item strong {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
}

.sera-stat-item small {
  font-size: 0.8rem;
  color: #cbd5e1;
}

/* Shared Section Rhythm */
.sera-section {
  padding: clamp(4.5rem, 7vw, 7rem) 0;
}

.sera-section-light {
  background: var(--sera-bg);
}

.sera-section-dark {
  background: var(--sera-obsidian);
  color: #f8fafc;
}

.sera-section-white {
  background: var(--sera-surface);
}

.sera-section-head {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  align-items: end;
  gap: 2rem;
  margin-bottom: 3rem;
}

.sera-kicker {
  display: inline-block;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.74rem;
  letter-spacing: 0.14em;
  color: var(--sera-teal);
  margin-bottom: 0.75rem;
}

.sera-section-head h2,
.sera-tech-intro h2 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(2rem, 3.6vw, 3.1rem);
  font-weight: 600;
  line-height: 1.1;
  margin: 0;
}

.sera-section-desc {
  color: var(--sera-muted);
  margin: 0;
  font-size: 0.96rem;
}

/* Interactive Concern Finder */
.sera-finder {
  display: grid;
  grid-template-columns: minmax(0, 340px) minmax(0, 1fr);
  gap: 2rem;
  align-items: start;
}

.sera-concern-tabs {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.sera-concern-btn {
  width: 100%;
  min-height: 68px;
  padding: 1rem 1.25rem;
  background: var(--sera-surface);
  border: 1px solid var(--sera-border);
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  align-items: center;
  text-align: left;
  gap: 0.2rem 1rem;
  cursor: pointer;
  color: var(--sera-ink);
  transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
}

.sera-concern-btn .sera-mono {
  color: var(--sera-muted);
  grid-column: 1;
}

.sera-concern-btn strong {
  font-size: 1rem;
  font-weight: 600;
  grid-column: 1;
}

.sera-concern-arrow {
  grid-column: 2;
  grid-row: 1 / span 2;
  font-size: 1.1rem;
  color: var(--sera-muted);
}

.sera-concern-btn:hover {
  border-color: var(--sera-teal);
}

.sera-concern-btn.is-active {
  background: var(--sera-obsidian);
  border-color: var(--sera-obsidian);
  color: #ffffff;
}

.sera-concern-btn.is-active .sera-mono,
.sera-concern-btn.is-active .sera-concern-arrow {
  color: var(--sera-teal-bright);
}

.sera-protocol-card {
  background: var(--sera-surface);
  border: 1px solid var(--sera-border);
  border-radius: 14px;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
}

.sera-protocol-media {
  position: relative;
  min-height: 360px;
}

.sera-protocol-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.sera-protocol-badge {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  padding: 0.45rem 0.85rem;
  background: rgba(13, 20, 24, 0.86);
  color: #ffffff;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 500;
}

.sera-protocol-body {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.25rem;
}

.sera-protocol-top h3 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.85rem;
  font-weight: 600;
  line-height: 1.15;
  margin: 0.35rem 0 0.65rem;
}

.sera-protocol-top p {
  color: var(--sera-muted);
  font-size: 0.92rem;
  margin: 0;
}

.sera-protocol-meta {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  padding: 0.9rem 1rem;
  background: var(--sera-bg);
  border-radius: 8px;
}

.sera-protocol-meta small {
  display: block;
  font-size: 0.74rem;
  color: var(--sera-muted);
}

.sera-protocol-meta strong {
  font-size: 0.9rem;
  color: var(--sera-ink);
}

.sera-protocol-steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.sera-protocol-steps li {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  font-size: 0.88rem;
  color: var(--sera-ink);
}

.sera-protocol-steps .sera-mono {
  color: var(--sera-teal);
  flex-shrink: 0;
}

/* Dark Tech Rhythm Band */
.sera-tech-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 3rem;
  align-items: start;
}

.sera-tech-intro p {
  color: #cbd5e1;
  margin: 1rem 0 2rem;
  max-width: 48ch;
}

.sera-tech-photo {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.sera-tech-photo img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
}

.sera-device-list {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.sera-device-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
}

.sera-device-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.sera-device-spec {
  color: #94a3b8;
}

.sera-device-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.35rem;
  color: #ffffff;
}

.sera-device-card p {
  margin: 0;
  font-size: 0.9rem;
  color: #cbd5e1;
}

/* Specialist Team & Suite */
.sera-link-underline {
  color: var(--sera-teal);
  font-weight: 600;
  font-size: 0.92rem;
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  padding-bottom: 0.2rem;
  justify-self: end;
}

.sera-doctors-layout {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.sera-doctor-card,
.sera-suite-card {
  border: 1px solid var(--sera-border);
  border-radius: 12px;
  overflow: hidden;
  background: var(--sera-bg);
}

.sera-doctor-photo img,
.sera-suite-card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.sera-doctor-info,
.sera-suite-caption {
  padding: 1.25rem;
}

.sera-doctor-info h3 {
  font-size: 1.12rem;
  font-weight: 600;
  margin: 0.35rem 0 0.25rem;
}

.sera-doctor-info p,
.sera-suite-caption p {
  margin: 0;
  font-size: 0.87rem;
  color: var(--sera-muted);
}

.sera-suite-caption strong {
  display: block;
  font-size: 1.05rem;
  margin: 0.35rem 0 0.25rem;
}

/* Lead Band */
.sera-lead-band {
  background: #f1f5f9;
  padding: 2rem 0;
}

/* Footer */
.sera-footer {
  background: var(--sera-obsidian);
  color: #cbd5e1;
  padding: 3.5rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.sera-footer-inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.5fr);
  gap: 2.5rem;
}

.sera-footer-brand {
  display: block;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.5rem;
  letter-spacing: 0.14em;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.sera-footer-cols {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.sera-footer-cols .sera-mono {
  color: var(--sera-teal-bright);
  display: block;
  margin-bottom: 0.4rem;
}

.sera-footer-cols p {
  margin: 0;
  font-size: 0.86rem;
}

/* Focus & Reduced Motion */
.sera-lab a:focus-visible,
.sera-lab button:focus-visible {
  outline: 2px solid var(--sera-teal-bright);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .sera-lab * {
    transition: none !important;
  }
}

/* Responsive Breakpoints */
@media (max-width: 1024px) {
  .sera-finder,
  .sera-tech-grid,
  .sera-section-head,
  .sera-footer-inner {
    grid-template-columns: 1fr;
  }

  .sera-link-underline {
    justify-self: start;
  }

  .sera-doctors-layout {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .sera-nav {
    display: none;
  }

  .sera-stat-dock,
  .sera-protocol-card,
  .sera-doctors-layout,
  .sera-footer-cols {
    grid-template-columns: 1fr;
  }

  .sera-protocol-media {
    min-height: 240px;
  }

  .sera-protocol-meta {
    grid-template-columns: 1fr;
  }
}
</style>
