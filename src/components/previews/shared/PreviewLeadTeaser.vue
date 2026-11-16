<script setup>
import { computed, ref } from 'vue';
import LocalIcon from '@/components/ui/LocalIcon.vue';
import { whatsappHref } from '@/lib/whatsapp';

const props = defineProps({
  businessName: { type: String, default: 'Bisnis Anda' },
  heading: { type: String, default: 'Jadwalkan Konsultasi atau Booking Sekarang' },
  subheading: {
    type: String,
    default: 'Isi formulir singkat di bawah untuk langsung terhubung ke WhatsApp admin kami.',
  },
  ctaLabel: { type: String, default: 'Kirim & Chat WhatsApp' },
  serviceOptions: {
    type: Array,
    default: () => ['Konsultasi Umum', 'Permintaan Penawaran', 'Jadwal Survey / Kunjungan'],
  },
  accentColor: { type: String, default: '#5356ff' },
  accentTextColor: { type: String, default: '#ffffff' },
  surfaceBg: { type: String, default: '#f8fafc' },
  dark: { type: Boolean, default: false },
});

const name = ref('');
const phone = ref('');
const selectedService = ref(props.serviceOptions[0] || '');
const notes = ref('');
const errorMessage = ref('');
const submitted = ref(false);

const themeVars = computed(() => ({
  '--teaser-accent': props.accentColor,
  '--teaser-accent-text': props.accentTextColor,
  '--teaser-surface': props.surfaceBg,
}));

const waConfirmHref = computed(() => {
  const details = [
    `Halo tim ${props.businessName}, saya ${name.value || 'calon pelanggan'}.`,
    selectedService.value ? `Layanan yang diminati: ${selectedService.value}.` : '',
    phone.value ? `Nomor kontak saya: ${phone.value}.` : '',
    notes.value ? `Catatan: ${notes.value}` : '',
  ]
    .filter(Boolean)
    .join(' ');
  return whatsappHref(details);
});

const handleSubmit = () => {
  errorMessage.value = '';
  if (!name.value.trim() || !phone.value.trim()) {
    errorMessage.value = 'Mohon isi nama lengkap dan nomor WhatsApp aktif Anda.';
    return;
  }
  submitted.value = true;
};

const resetForm = () => {
  submitted.value = false;
  errorMessage.value = '';
};
</script>

<template>
  <section
    class="lead-teaser"
    :class="{ 'lead-teaser--dark': dark }"
    :style="themeVars"
    aria-label="Formulir konsultasi dan booking"
  >
    <div class="lead-teaser__container">
      <div class="lead-teaser__copy">
        <p class="lead-teaser__eyebrow">Formulir Dual-Action</p>
        <h2>{{ heading }}</h2>
        <p class="lead-teaser__desc">{{ subheading }}</p>

        <div class="lead-teaser__badge">
          <LocalIcon name="shield" size="18" />
          <span>
            Mode Preview: Pada Paket <strong>PRO</strong> &amp; <strong>FUNNEL</strong>, isian form
            otomatis masuk ke <strong>Google Sheet / CMS Dashboard</strong> &amp; meneruskan ke WhatsApp admin.
          </span>
        </div>
      </div>

      <div class="lead-teaser__card">
        <div v-if="submitted" class="lead-teaser__success" aria-live="polite">
          <div class="lead-teaser__success-icon">
            <LocalIcon name="check" size="22" />
          </div>
          <h3>Simulasi Data Prospek Tercatat</h3>
          <p>
            Terima kasih, <strong>{{ name }}</strong>. Pada website produksi klien, data untuk layanan
            <strong>{{ selectedService || 'Konsultasi' }}</strong> otomatis tersimpan di database klien.
          </p>
          <div class="lead-teaser__success-actions">
            <a class="lead-teaser__btn" :href="waConfirmHref" target="_blank" rel="noopener">
              <span>Lanjutkan ke WhatsApp Admin</span>
              <LocalIcon name="arrow-up-right" size="16" />
            </a>
            <button type="button" class="lead-teaser__reset" @click="resetForm">
              Uji ulang formulir
            </button>
          </div>
        </div>

        <form v-else class="lead-teaser__form" @submit.prevent="handleSubmit" novalidate>
          <div class="lead-teaser__field">
            <label for="teaser-name">Nama Lengkap</label>
            <input
              id="teaser-name"
              v-model="name"
              type="text"
              placeholder="Contoh: Budi Santoso"
              autocomplete="name"
              required
            />
          </div>

          <div class="lead-teaser__field">
            <label for="teaser-phone">Nomor WhatsApp Aktif</label>
            <input
              id="teaser-phone"
              v-model="phone"
              type="tel"
              placeholder="Contoh: 081234567890"
              autocomplete="tel"
              required
            />
          </div>

          <div v-if="serviceOptions.length" class="lead-teaser__field">
            <label for="teaser-service">Pilih Layanan / Kebutuhan</label>
            <select id="teaser-service" v-model="selectedService">
              <option v-for="opt in serviceOptions" :key="opt" :value="opt">{{ opt }}</option>
            </select>
          </div>

          <div class="lead-teaser__field">
            <label for="teaser-notes">Catatan atau Jadwal (Opsional)</label>
            <textarea
              id="teaser-notes"
              v-model="notes"
              rows="2"
              placeholder="Tulis lokasi, keluhan, atau jam kunjungan yang diinginkan"
            ></textarea>
          </div>

          <p v-if="errorMessage" class="lead-teaser__error" role="alert">{{ errorMessage }}</p>

          <button type="submit" class="lead-teaser__btn">
            <span>{{ ctaLabel }}</span>
            <LocalIcon name="arrow-right" size="16" />
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.lead-teaser {
  padding: clamp(48px, 7vw, 88px) 20px;
  background: var(--teaser-surface);
  color: #0f172a;
}

.lead-teaser--dark {
  color: #f8fafc;
}

.lead-teaser__container {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
  gap: clamp(28px, 5vw, 56px);
  align-items: start;
  width: min(100%, 1100px);
  margin-inline: auto;
}

.lead-teaser__eyebrow {
  margin: 0 0 12px;
  color: var(--teaser-accent);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.lead-teaser__copy h2 {
  margin: 0;
  font-size: clamp(1.75rem, 3.2vw, 2.5rem);
  line-height: 1.15;
}

.lead-teaser__desc {
  margin: 14px 0 0;
  color: #475569;
  font-size: 0.96rem;
  line-height: 1.6;
}

.lead-teaser--dark .lead-teaser__desc {
  color: #cbd5e1;
}

.lead-teaser__badge {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 24px;
  padding: 14px 16px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  background: #ffffff;
  color: #334155;
  font-size: 0.82rem;
  line-height: 1.5;
}

.lead-teaser--dark .lead-teaser__badge {
  border-color: #334155;
  background: rgba(15, 23, 42, 0.75);
  color: #e2e8f0;
}

.lead-teaser__badge svg {
  flex: none;
  margin-top: 2px;
  color: var(--teaser-accent);
}

.lead-teaser__card {
  padding: clamp(22px, 3.5vw, 32px);
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  background: #ffffff;
  color: #0f172a;
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.06);
}

.lead-teaser--dark .lead-teaser__card {
  border-color: #334155;
  background: #0f172a;
  color: #f8fafc;
}

.lead-teaser__form {
  display: grid;
  gap: 16px;
}

.lead-teaser__field {
  display: grid;
  gap: 6px;
}

.lead-teaser__field label {
  font-size: 0.82rem;
  font-weight: 700;
}

.lead-teaser__field input,
.lead-teaser__field select,
.lead-teaser__field textarea {
  width: 100%;
  min-height: 44px;
  padding: 10px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  background: #ffffff;
  color: #0f172a;
  font: inherit;
  font-size: 0.92rem;
}

.lead-teaser--dark .lead-teaser__field input,
.lead-teaser--dark .lead-teaser__field select,
.lead-teaser--dark .lead-teaser__field textarea {
  border-color: #334155;
  background: #1e293b;
  color: #f8fafc;
}

.lead-teaser__field input:focus-visible,
.lead-teaser__field select:focus-visible,
.lead-teaser__field textarea:focus-visible {
  outline: 3px solid var(--teaser-accent);
  outline-offset: 1px;
}

.lead-teaser__error {
  margin: 0;
  color: #dc2626;
  font-size: 0.84rem;
  font-weight: 600;
}

.lead-teaser__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  min-height: 48px;
  padding: 12px 18px;
  border: 0;
  border-radius: 8px;
  background: var(--teaser-accent);
  color: var(--teaser-accent-text);
  font-size: 0.94rem;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.lead-teaser__btn:hover {
  opacity: 0.92;
}

.lead-teaser__success {
  display: grid;
  gap: 14px;
}

.lead-teaser__success-icon {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  background: var(--teaser-accent);
  color: var(--teaser-accent-text);
}

.lead-teaser__success h3 {
  margin: 0;
  font-size: 1.25rem;
}

.lead-teaser__success p {
  margin: 0;
  color: #475569;
  font-size: 0.92rem;
  line-height: 1.55;
}

.lead-teaser--dark .lead-teaser__success p {
  color: #cbd5e1;
}

.lead-teaser__success-actions {
  display: grid;
  gap: 10px;
  margin-top: 4px;
}

.lead-teaser__reset {
  min-height: 44px;
  padding: 10px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 0.86rem;
  font-weight: 600;
  cursor: pointer;
}

@media (max-width: 820px) {
  .lead-teaser__container {
    grid-template-columns: 1fr;
  }
}
</style>
