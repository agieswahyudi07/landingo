<script setup>
import { computed, ref } from 'vue';
import PreviewLeadTeaser from '@/components/previews/shared/PreviewLeadTeaser.vue';
import { whatsappHref } from '@/lib/whatsapp';

const triageOptions = [
  {
    id: 'karang',
    label: 'Karang Gigi & Bau Mulut',
    action: 'Scaling & Polishing Ultrasonic',
    duration: '30–45 Menit',
    cost: 'Rp 299.000',
    note: 'Pembersihan menyeluruh dengan ujung alat lembut untuk gusi sensitif + cek kamera intraoral gratis.',
  },
  {
    id: 'lubang',
    label: 'Gigi Ngilu / Berlubang',
    action: 'Tambal Estetik Composite',
    duration: '40 Menit',
    cost: 'Mulai Rp 350.000',
    note: 'Bahan resin sewarna gigi asli agar tampak natural dan nyaman saat mengunyah.',
  },
  {
    id: 'behel',
    label: 'Gigi Berantakan / Tonggos',
    action: 'Konsultasi Behel Sp.Ort',
    duration: '45 Menit',
    cost: 'Cicilan 0%',
    note: 'Cetak rahang & rencana perapihan langsung bersama Dokter Gigi Spesialis Ortodonti.',
  },
  {
    id: 'bungsu',
    label: 'Gigi Bungsu Tumbuh Miring',
    action: 'Odontektomi Minimal Trauma',
    duration: '60 Menit',
    cost: 'Sesuai Posisi Gigi',
    note: 'Evaluasi rontgen panoramik terlebih dahulu untuk meminimalkan pembengkakan pasca-tindakan.',
  },
];

const activeTriageId = ref('karang');
const activeTriage = computed(
  () => triageOptions.find((t) => t.id === activeTriageId.value) || triageOptions[0]
);

const branch = ref('Bintaro Sektor 9');

const doctors = [
  { initials: 'NK', name: 'drg. Nadia Kusuma, Sp.Ort', role: 'Spesialis Ortodonti', days: 'Senin, Rabu, Jumat' },
  { initials: 'AP', name: 'drg. Arif Pratama', role: 'Dokter Gigi Keluarga', days: 'Selasa, Kamis, Minggu' },
  { initials: 'MW', name: 'drg. Melisa Wijaya, Sp.KG', role: 'Spesialis Konservasi Gigi', days: 'Selasa & Sabtu' },
];

const waBooking = (topic) =>
  whatsappHref(`Halo Sora Dental (${branch.value}), saya ingin membuat janji ${topic}.`);
</script>

<template>
  <div class="dental">
    <div class="dental-shell">
      <header class="dental-nav-pill">
        <a href="#top" class="dental-brand">
          <span class="dental-logo-dot" aria-hidden="true"></span>
          <strong>Sora Dental</strong>
        </a>

        <nav class="dental-links" aria-label="Navigasi klinik gigi">
          <a href="#keluhan">Cek Keluhan</a>
          <a href="#tim">Tim Dokter</a>
          <a href="#janji">Booking</a>
        </nav>

        <div class="dental-nav-right">
          <span class="dental-live">Buka s/d 21.00</span>
          <a :href="waBooking('pemeriksaan gigi')" target="_blank" rel="noopener" class="dental-btn-sm">
            Janji Temu
          </a>
        </div>
      </header>
    </div>

    <section id="top" class="dental-hero">
      <div class="dental-shell">
        <div class="dental-hero-center">
          <div class="dental-rating-pill">
            <span>Rating 4.9/5 dari 840+ Pasien Keluarga</span>
            <span>&bull;</span>
            <button type="button" @click="branch = branch === 'Bintaro Sektor 9' ? 'Kemang Selatan' : 'Bintaro Sektor 9'">
              Cabang: <strong>{{ branch }}</strong> (Ganti)
            </button>
          </div>
          <h1>Ke dokter gigi kini terasa lebih tenang &amp; transparan.</h1>
          <p>
            Ruang perawatan bersih, alat steril individual, dan dokter yang sabar menjelaskan kondisi gigi lewat layar sebelum tindakan dimulai.
          </p>
        </div>

        <div class="dental-bento" aria-label="Sorotan klinik gigi">
          <div class="bento-photo-lg">
            <img
              src="https://images.unsplash.com/photo-1663755489920-5e09f66d011a?w=1200&auto=format&fit=crop"
              alt="Pemeriksaan gigi steril dan ramah di Sora Dental"
            />
            <div class="bento-caption">
              <span>Protokol Steril</span>
              <strong>1 Pasien = 1 Set Alat Autoclave Tersegel</strong>
            </div>
          </div>

          <div class="bento-stat-card">
            <span class="bento-tag">Bebas Cemas</span>
            <strong>Kamera Intraoral</strong>
            <p>Anda melihat sendiri foto gigi di layar &amp; menentukan pilihan perawatan tanpa paksaan.</p>
          </div>

          <div class="bento-photo-sm">
            <img
              src="https://images.unsplash.com/photo-1664529842504-5743d286ec1b?w=900&auto=format&fit=crop"
              alt="Senyum sehat pasien setelah perawatan gigi"
            />
          </div>

          <div class="bento-cta-card">
            <strong>Slot Hari Ini Tersedia</strong>
            <p>Tanpa antre panjang di ruang tunggu. Booking jam kunjungan dari HP Anda.</p>
            <a :href="waBooking('slot hari ini')" target="_blank" rel="noopener" class="dental-btn-light">
              Cek Slot {{ branch }} &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="keluhan" class="dental-triage">
      <div class="dental-shell">
        <div class="dental-triage-box">
          <div class="dental-triage-head">
            <span>Panduan Cepat Pasien</span>
            <h2>Apa keluhan gigi Anda saat ini?</h2>
          </div>

          <div class="dental-chip-row" role="tablist" aria-label="Pilih keluhan gigi">
            <button
              v-for="item in triageOptions"
              :key="item.id"
              type="button"
              role="tab"
              :aria-selected="activeTriageId === item.id"
              :class="{ active: activeTriageId === item.id }"
              @click="activeTriageId = item.id"
            >
              {{ item.label }}
            </button>
          </div>

          <div class="dental-triage-result" aria-live="polite">
            <div>
              <small>Rekomendasi Tindakan</small>
              <h3>{{ activeTriage.action }}</h3>
              <p>{{ activeTriage.note }}</p>
            </div>
            <div class="dental-triage-meta">
              <div><small>Estimasi Kursi</small><strong>{{ activeTriage.duration }}</strong></div>
              <div><small>Perkiraan Biaya</small><strong>{{ activeTriage.cost }}</strong></div>
              <a :href="waBooking(activeTriage.action)" target="_blank" rel="noopener" class="dental-btn-primary">
                Booking Tindakan Ini
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="tim" class="dental-doctors">
      <div class="dental-shell">
        <div class="dental-sec-head">
          <h2>Dokter Gigi Berpengalaman &amp; Ramah Anak</h2>
          <p>Seluruh dokter memiliki STR &amp; SIP aktif serta terbiasa menangani pasien dengan trauma dokter gigi.</p>
        </div>
        <div class="dental-doc-list">
          <article v-for="doc in doctors" :key="doc.name" class="dental-doc-row">
            <div class="dental-avatar" aria-hidden="true">{{ doc.initials }}</div>
            <div class="dental-doc-info">
              <h3>{{ doc.name }}</h3>
              <span>{{ doc.role }}</span>
            </div>
            <div class="dental-doc-days">
              <small>Jadwal Praktik</small>
              <strong>{{ doc.days }}</strong>
            </div>
            <a :href="waBooking(`konsultasi dengan ${doc.name}`)" target="_blank" rel="noopener" class="dental-doc-link">
              Pilih Dokter
            </a>
          </article>
        </div>
      </div>
    </section>

    <div id="janji">
      <PreviewLeadTeaser
        business-name="Sora Dental Studio"
        heading="Kunci Jam Kunjungan Anda Sekarang"
        subheading="Pilih perawatan dan waktu kedatangan yang nyaman. Admin klinik akan mengirimkan konfirmasi slot dan lokasi Maps via WhatsApp."
        cta-label="Ajukan Jadwal ke Admin"
        :service-options="[
          'Scaling & Polishing Ultrasonic',
          'Tambal Gigi Estetik',
          'Konsultasi Behel / Ortodonti',
          'Cabut Gigi Bungsu',
          'Pemeriksaan Gigi Anak'
        ]"
        accent-color="#0D9488"
        accent-text-color="#FFFFFF"
        surface-bg="#F0FDFA"
      />
    </div>

    <footer class="dental-footer">
      <div class="dental-shell dental-footer-row">
        <strong>SORA DENTAL STUDIO &bull; Bintaro &amp; Kemang</strong>
        <span>Preview Niche Klinik Gigi &bull; Landingo</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

.dental {
  min-height: 100vh;
  background: #ffffff;
  color: #0f4c5c;
  font-family: 'DM Sans', sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
  padding-top: 16px;
}

.dental-shell {
  width: min(1140px, calc(100% - 32px));
  margin-inline: auto;
}

.dental-nav-pill {
  position: sticky;
  top: 12px;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 14px 10px 20px;
  border: 1px solid #ccebe6;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(15, 76, 92, 0.06);
}

.dental-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #0f4c5c;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.05rem;
  text-decoration: none;
}

.dental-logo-dot {
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background: #0d9488;
}

.dental-links {
  display: flex;
  gap: 24px;
}

.dental-links a {
  color: #475569;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
}

.dental-nav-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.dental-live {
  font-size: 0.78rem;
  font-weight: 700;
  color: #0d9488;
}

.dental-btn-sm,
.dental-btn-primary,
.dental-btn-light {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 10px 20px;
  border-radius: 999px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.86rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
}

.dental-btn-sm,
.dental-btn-primary {
  background: #0d9488;
  color: #ffffff;
}

.dental-btn-sm:hover,
.dental-btn-primary:hover {
  background: #0f766e;
}

.dental-btn-light {
  background: #ffffff;
  color: #0f4c5c;
}

.dental-hero {
  padding: 48px 0 56px;
}

.dental-hero-center {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 40px;
}

.dental-rating-pill {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 7px 16px;
  border-radius: 999px;
  background: #e6f7f4;
  color: #0f4c5c;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 18px;
}

.dental-rating-pill button {
  border: 0;
  background: transparent;
  color: #0d9488;
  font: inherit;
  cursor: pointer;
  text-decoration: underline;
}

.dental-hero-center h1 {
  margin: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2.2rem, 4.5vw, 3.6rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.025em;
}

.dental-hero-center p {
  margin: 16px auto 0;
  max-width: 580px;
  color: #475569;
  font-size: 1.02rem;
}

.dental-bento {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  grid-template-rows: 210px 210px;
  gap: 16px;
}

.bento-photo-lg {
  grid-row: 1 / span 2;
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  background: #e6f7f4;
}

.bento-photo-lg img,
.bento-photo-sm img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bento-caption {
  position: absolute;
  right: 16px;
  bottom: 16px;
  left: 16px;
  padding: 14px 18px;
  border-radius: 16px;
  background: rgba(15, 76, 92, 0.9);
  color: #ffffff;
}

.bento-caption span {
  display: block;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #99f6e4;
}

.bento-caption strong {
  font-size: 0.96rem;
}

.bento-stat-card {
  padding: 24px;
  border-radius: 24px;
  background: #e6f7f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bento-tag {
  display: inline-block;
  align-self: flex-start;
  padding: 4px 10px;
  border-radius: 999px;
  background: #ffffff;
  color: #0d9488;
  font-size: 0.72rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.bento-stat-card strong {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.25rem;
}

.bento-stat-card p {
  margin: 6px 0 0;
  color: #334155;
  font-size: 0.86rem;
}

.bento-photo-sm {
  border-radius: 24px;
  overflow: hidden;
}

.bento-cta-card {
  grid-column: 2 / span 2;
  padding: 24px 28px;
  border-radius: 24px;
  background: #0f4c5c;
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.bento-cta-card strong {
  display: block;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.3rem;
}

.bento-cta-card p {
  margin: 4px 0 0;
  color: #cbd5e1;
  font-size: 0.88rem;
}

.dental-triage {
  padding: 40px 0 64px;
}

.dental-triage-box {
  padding: clamp(24px, 4vw, 42px);
  border-radius: 28px;
  background: #f0fdfa;
  border: 1px solid #ccebe6;
}

.dental-triage-head span {
  color: #0d9488;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.dental-triage-head h2 {
  margin: 6px 0 22px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
}

.dental-chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;
}

.dental-chip-row button {
  min-height: 44px;
  padding: 10px 18px;
  border: 1px solid #99f6e4;
  border-radius: 999px;
  background: #ffffff;
  color: #0f4c5c;
  font: inherit;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
}

.dental-chip-row button.active {
  background: #0f4c5c;
  border-color: #0f4c5c;
  color: #ffffff;
}

.dental-triage-result {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 24px;
  padding: 24px;
  border-radius: 20px;
  background: #ffffff;
  align-items: center;
}

.dental-triage-result small {
  color: #64748b;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
}

.dental-triage-result h3 {
  margin: 4px 0 8px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.4rem;
}

.dental-triage-result p {
  margin: 0;
  color: #475569;
  font-size: 0.92rem;
}

.dental-triage-meta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  align-items: center;
}

.dental-triage-meta strong {
  display: block;
  font-size: 1.05rem;
  color: #0d9488;
}

.dental-triage-meta .dental-btn-primary {
  grid-column: 1 / span 2;
}

.dental-doctors {
  padding: 20px 0 72px;
}

.dental-sec-head {
  max-width: 600px;
  margin-bottom: 28px;
}

.dental-sec-head h2 {
  margin: 0 0 8px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.7rem, 3vw, 2.25rem);
}

.dental-sec-head p {
  margin: 0;
  color: #475569;
}

.dental-doc-list {
  display: grid;
  border-top: 1px solid #e2e8f0;
}

.dental-doc-row {
  display: grid;
  grid-template-columns: 56px 1.2fr 1fr auto;
  align-items: center;
  gap: 18px;
  padding: 18px 0;
  border-bottom: 1px solid #e2e8f0;
}

.dental-avatar {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 999px;
  background: #e6f7f4;
  color: #0d9488;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
}

.dental-doc-info h3 {
  margin: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.08rem;
}

.dental-doc-info span {
  color: #475569;
  font-size: 0.85rem;
}

.dental-doc-days small {
  display: block;
  color: #64748b;
  font-size: 0.74rem;
}

.dental-doc-days strong {
  font-size: 0.92rem;
}

.dental-doc-link {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 8px 16px;
  border: 1px solid #0d9488;
  border-radius: 999px;
  color: #0d9488;
  font-size: 0.84rem;
  font-weight: 700;
  text-decoration: none;
}

.dental-doc-link:hover {
  background: #0d9488;
  color: #ffffff;
}

.dental-footer {
  padding: 24px 0;
  background: #0f4c5c;
  color: #e6f7f4;
  font-size: 0.84rem;
}

.dental-footer-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
}

@media (max-width: 860px) {
  .dental-links,
  .dental-live {
    display: none;
  }
  .dental-bento {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  .bento-photo-lg {
    grid-row: auto;
    height: 300px;
  }
  .bento-photo-sm {
    height: 220px;
  }
  .bento-cta-card {
    grid-column: auto;
  }
  .dental-triage-result,
  .dental-doc-row {
    grid-template-columns: 1fr;
  }
}
</style>
