<script setup>
import { ref } from 'vue';
import PreviewLeadTeaser from '@/components/previews/shared/PreviewLeadTeaser.vue';
import { whatsappHref } from '@/lib/whatsapp';

const activePractice = ref('pt');

const practices = [
  {
    id: 'pt',
    index: '01',
    title: 'Pendirian PT Umum & PMA',
    fee: 'Rp 5.900.000',
    eta: '5–7 Hari Kerja',
    deliverables: [
      'Pengecekan & Pemesanan Nama PT di Sistem AHU',
      'Akta Pendirian Notaris & SK Menteri Hukum dan HAM',
      'NPWP Badan & Surat Keterangan Terdaftar (SKT)',
      'Nomor Induk Berusaha (NIB) & Sertifikat Standar OSS RBA',
    ],
  },
  {
    id: 'cv',
    index: '02',
    title: 'Pendirian CV & PT Perorangan',
    fee: 'Mulai Rp 2.500.000',
    eta: '3–5 Hari Kerja',
    deliverables: [
      'Konsultasi Pemetaan KBLI Usaha sesuai Peraturan Terbaru',
      'Akta Pendirian CV / Sertifikat Pendirian PT Perorangan',
      'Pendaftaran NPWP Perusahaan & Aktivasi Coretax / DJP',
      'Penerbitan NIB OSS & Hak Akses Perizinan Berusaha',
    ],
  },
  {
    id: 'pajak',
    index: '03',
    title: 'Kepatuhan Pajak Bulanan & Pembukuan',
    fee: 'Mulai Rp 1.750.000 / bln',
    eta: 'Retainer Bulanan',
    deliverables: [
      'Penyusunan Laporan Keuangan Bulanan (Neraca & Laba Rugi)',
      'Perhitungan, Penyetoran & Pelaporan SPT Masa PPh/PPN',
      'Rekonsiliasi Faktur Pajak Masukan/Keluaran & Bukti Potong',
      'Konsultasi Strategi Efisiensi Pajak Legal tanpa Batas',
    ],
  },
  {
    id: 'sp2dk',
    index: '04',
    title: 'SPT Tahunan Badan & Pendampingan SP2DK',
    fee: 'Mulai Rp 3.500.000',
    eta: 'Sesuai Kompleksitas',
    deliverables: [
      'Review Laporan Keuangan Komersial ke Koreksi Fiskal',
      'Penyusunan & Pelaporan SPT Tahunan PPh Badan (1771)',
      'Penyusunan Tanggapan Resmi Klarifikasi Pajak (SP2DK)',
      'Perlindungan Kerahasiaan Data Finansial dengan NDA Tertulis',
    ],
  },
];

const faqs = [
  {
    q: 'Apakah proses pendirian PT/CV bisa dilakukan tanpa datang ke kantor notaris?',
    a: 'Bisa. Seluruh verifikasi KTP/NPWP pendiri serta penandatanganan draf akta dapat diproses secara hybrid dan terdokumentasi resmi.',
  },
  {
    q: 'Bagaimana jaminan kerahasiaan data keuangan dan pajak perusahaan kami?',
    a: 'Setiap klien mendapatkan Non-Disclosure Agreement (NDA) resmi yang ditandatangani sebelum pertukaran laporan keuangan atau akses akun DJP.',
  },
  {
    q: 'Apakah ada biaya tambahan tersembunyi di tengah pengerjaan?',
    a: 'Tidak. Seluruh rincian PNBP, jasa notaris, dan honorarium konsultan dituangkan dalam surat penawaran tetap sebelum pekerjaan dimulai.',
  },
];

const openFaq = ref(0);

const consultHref = (topic) =>
  whatsappHref(`Halo Pratama & Partners, saya ingin konsultasi rahasia mengenai ${topic}.`);
</script>

<template>
  <div class="firm">
    <header class="firm-masthead">
      <div class="firm-wrap firm-masthead-row">
        <span class="firm-meta">JAKARTA SELATAN &bull; KONSULTAN PAJAK &amp; HUKUM KORPORASI</span>
        <a href="#top" class="firm-logo">PRATAMA &amp; PARTNERS</a>
        <div class="firm-right">
          <a :href="consultHref('jadwal diskusi awal')" target="_blank" rel="noopener" class="firm-cta-outline">
            Konsultasi Rahasia
          </a>
        </div>
      </div>
    </header>

    <section id="top" class="firm-hero">
      <div class="firm-wrap">
        <div class="firm-hero-statement">
          <p class="firm-kicker">Brevet A/B/C &bull; Kuasa Hukum Pajak &bull; Rekanan Notaris Resmi</p>
          <h1>Kepastian hukum dan kepatuhan pajak agar bisnis Anda bertumbuh tanpa risiko denda.</h1>
        </div>

        <div class="firm-banner">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1400&auto=format&fit=crop"
            alt="Dokumen hukum dan kepatuhan korporasi di Pratama & Partners"
          />
        </div>

        <div class="firm-ledger">
          <div><strong>SK Kemenkumham</strong><span>Akta notaris &amp; legalitas badan usaha resmi</span></div>
          <div><strong>Izin Praktik Aktif</strong><span>Konsultan pajak terdaftar &amp; berpengalaman</span></div>
          <div><strong>NDA Tertulis</strong><span>Kerahasiaan data keuangan terjamin penuh</span></div>
          <div><strong>Fixed Fee</strong><span>Penawaran tertulis tanpa biaya siluman</span></div>
        </div>
      </div>
    </section>

    <section id="praktik" class="firm-practice">
      <div class="firm-wrap firm-practice-grid">
        <aside class="firm-index">
          <span class="firm-kicker">Bidang Praktik</span>
          <h2>Layanan Korporasi &amp; Perpajakan</h2>
          <p>Pilih bidang layanan di bawah untuk melihat rincian dokumen dan estimasi biaya tetap.</p>
          <nav class="firm-index-list" aria-label="Pilih bidang praktik">
            <a
              v-for="p in practices"
              :key="p.id"
              :href="`#practice-${p.id}`"
              :class="{ active: activePractice === p.id }"
              @click="activePractice = p.id"
            >
              <span>{{ p.index }}</span>
              <strong>{{ p.title }}</strong>
            </a>
          </nav>
        </aside>

        <div class="firm-schedule">
          <article
            v-for="p in practices"
            :id="`practice-${p.id}`"
            :key="p.id"
            class="firm-practice-row"
            :class="{ highlighted: activePractice === p.id }"
            @mouseenter="activePractice = p.id"
          >
            <div class="firm-row-head">
              <span class="firm-row-num">{{ p.index }}</span>
              <div>
                <h3>{{ p.title }}</h3>
                <span class="firm-eta">Estimasi Proses: {{ p.eta }}</span>
              </div>
              <strong class="firm-fee">{{ p.fee }}</strong>
            </div>
            <ul class="firm-deliverables">
              <li v-for="d in p.deliverables" :key="d">{{ d }}</li>
            </ul>
            <div class="firm-row-foot">
              <a :href="consultHref(p.title)" target="_blank" rel="noopener" class="firm-link">
                Ajukan Penawaran Tertulis &rarr;
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="firm-faq">
      <div class="firm-wrap firm-faq-grid">
        <div>
          <span class="firm-kicker">Pertanyaan Kritis</span>
          <h2>Hal yang Sering Ditanyakan Pemilik Usaha</h2>
        </div>

        <div class="firm-faq-list">
          <div v-for="(item, idx) in faqs" :key="item.q" class="firm-faq-item">
            <button
              type="button"
              :aria-expanded="openFaq === idx"
              @click="openFaq = openFaq === idx ? -1 : idx"
            >
              <span>{{ item.q }}</span>
              <strong>{{ openFaq === idx ? '−' : '+' }}</strong>
            </button>
            <p v-if="openFaq === idx">{{ item.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <PreviewLeadTeaser
      business-name="Pratama & Partners"
      heading="Jadwalkan Diskusi Rahasia dengan Konsultan Kami"
      subheading="Sampaikan kebutuhan legalitas atau pajak perusahaan Anda. Seluruh informasi dijaga kerahasiaannya."
      cta-label="Hubungi Konsultan via WhatsApp"
      :service-options="[
        'Pendirian PT Umum / PMA',
        'Pendirian CV / PT Perorangan',
        'Retainer Pajak Bulanan & Pembukuan',
        'SPT Tahunan Badan & Koreksi Fiskal',
        'Pendampingan Klarifikasi SP2DK'
      ]"
      accent-color="#172554"
      accent-text-color="#FFFFFF"
      surface-bg="#EFECE5"
    />

    <footer class="firm-footer">
      <div class="firm-wrap firm-footer-row">
        <strong>PRATAMA &amp; PARTNERS &bull; Menara Sudirman Lt. 12, Jakarta</strong>
        <span>Preview Niche Konsultan Pajak &amp; Legalitas &bull; Landingo</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

.firm {
  min-height: 100vh;
  background: #f7f5f0;
  color: #0f172a;
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
}

.firm-wrap {
  width: min(1160px, calc(100% - 36px));
  margin-inline: auto;
}

.firm-masthead {
  position: sticky;
  top: 0;
  z-index: 30;
  background: #f7f5f0;
  border-top: 3px solid #172554;
  border-bottom: 1px solid #d6d1c7;
}

.firm-masthead-row {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  min-height: 76px;
  gap: 16px;
}

.firm-meta {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #475569;
}

.firm-logo {
  font-family: 'EB Garamond', serif;
  font-size: 1.55rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #172554;
  text-decoration: none;
  text-align: center;
}

.firm-right {
  display: flex;
  justify-content: flex-end;
}

.firm-cta-outline {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 8px 18px;
  border: 1px solid #172554;
  color: #172554;
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  text-decoration: none;
}

.firm-cta-outline:hover {
  background: #172554;
  color: #ffffff;
}

.firm-kicker {
  display: block;
  margin: 0 0 12px;
  color: #9a6b2f;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.firm-hero {
  padding: clamp(40px, 6vw, 72px) 0 0;
}

.firm-hero-statement {
  max-width: 900px;
  margin: 0 auto 36px;
  text-align: center;
}

.firm-hero-statement h1 {
  margin: 0;
  font-family: 'EB Garamond', serif;
  font-size: clamp(2.4rem, 5vw, 4.1rem);
  font-weight: 600;
  line-height: 1.08;
  color: #0f172a;
}

.firm-banner {
  border-top: 1px solid #d6d1c7;
  border-bottom: 1px solid #d6d1c7;
  background: #e5e0d5;
}

.firm-banner img {
  display: block;
  width: 100%;
  height: clamp(240px, 34vw, 390px);
  object-fit: cover;
  filter: saturate(0.82) contrast(1.04);
}

.firm-ledger {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-bottom: 1px solid #d6d1c7;
}

.firm-ledger > div {
  padding: 22px 20px;
  border-right: 1px solid #d6d1c7;
}

.firm-ledger > div:last-child {
  border-right: 0;
}

.firm-ledger strong {
  display: block;
  font-family: 'EB Garamond', serif;
  font-size: 1.25rem;
  color: #172554;
}

.firm-ledger span {
  display: block;
  margin-top: 4px;
  color: #475569;
  font-size: 0.82rem;
}

.firm-practice {
  padding: 72px 0;
  background: #ffffff;
  border-bottom: 1px solid #d6d1c7;
}

.firm-practice-grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 48px;
  align-items: start;
}

.firm-index {
  position: sticky;
  top: 104px;
}

.firm-index h2 {
  margin: 0 0 12px;
  font-family: 'EB Garamond', serif;
  font-size: clamp(2rem, 3.4vw, 2.75rem);
  line-height: 1.1;
}

.firm-index p {
  margin: 0 0 24px;
  color: #475569;
  font-size: 0.94rem;
}

.firm-index-list {
  display: grid;
  border-top: 1px solid #d6d1c7;
}

.firm-index-list a {
  display: flex;
  align-items: baseline;
  gap: 14px;
  padding: 14px 8px;
  border-bottom: 1px solid #d6d1c7;
  color: #475569;
  text-decoration: none;
  font-size: 0.92rem;
}

.firm-index-list a span {
  font-family: 'EB Garamond', serif;
  font-size: 1.1rem;
  color: #9a6b2f;
}

.firm-index-list a.active,
.firm-index-list a:hover {
  color: #172554;
  background: #f7f5f0;
}

.firm-schedule {
  display: grid;
  border-top: 1px solid #172554;
}

.firm-practice-row {
  padding: 28px 0;
  border-bottom: 1px solid #d6d1c7;
}

.firm-row-head {
  display: grid;
  grid-template-columns: 42px 1fr auto;
  gap: 16px;
  align-items: baseline;
  margin-bottom: 16px;
}

.firm-row-num {
  font-family: 'EB Garamond', serif;
  font-size: 1.5rem;
  color: #9a6b2f;
}

.firm-row-head h3 {
  margin: 0;
  font-family: 'EB Garamond', serif;
  font-size: 1.55rem;
  color: #172554;
}

.firm-eta {
  color: #475569;
  font-size: 0.8rem;
}

.firm-fee {
  font-size: 1.05rem;
  color: #9a6b2f;
}

.firm-deliverables {
  margin: 0 0 18px;
  padding-left: 58px;
  color: #334155;
  font-size: 0.92rem;
  display: grid;
  gap: 6px;
}

.firm-row-foot {
  padding-left: 58px;
}

.firm-link {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  color: #172554;
  font-size: 0.86rem;
  font-weight: 700;
  text-decoration: none;
  border-bottom: 1px solid #172554;
}

.firm-faq {
  padding: 64px 0;
  background: #f7f5f0;
}

.firm-faq-grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 48px;
}

.firm-faq h2 {
  margin: 0;
  font-family: 'EB Garamond', serif;
  font-size: clamp(1.9rem, 3.2vw, 2.5rem);
  line-height: 1.12;
}

.firm-faq-list {
  border-top: 1px solid #172554;
}

.firm-faq-item {
  border-bottom: 1px solid #d6d1c7;
}

.firm-faq-item button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;
  min-height: 56px;
  padding: 16px 0;
  border: 0;
  background: transparent;
  color: #0f172a;
  font: inherit;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
}

.firm-faq-item p {
  margin: 0 0 18px;
  color: #475569;
  font-size: 0.92rem;
}

.firm-footer {
  padding: 26px 0;
  background: #0f172a;
  color: #e2e8f0;
  font-size: 0.82rem;
}

.firm-footer-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
}

@media (max-width: 900px) {
  .firm-masthead-row {
    grid-template-columns: 1fr auto;
  }
  .firm-meta {
    display: none;
  }
  .firm-logo {
    text-align: left;
  }
  .firm-ledger {
    grid-template-columns: repeat(2, 1fr);
  }
  .firm-practice-grid,
  .firm-faq-grid {
    grid-template-columns: 1fr;
  }
  .firm-index {
    position: static;
  }
}

@media (max-width: 560px) {
  .firm-ledger {
    grid-template-columns: 1fr;
  }
  .firm-ledger > div {
    border-right: 0;
    border-bottom: 1px solid #d6d1c7;
  }
  .firm-row-head {
    grid-template-columns: 1fr;
  }
  .firm-deliverables,
  .firm-row-foot {
    padding-left: 18px;
  }
}
</style>
