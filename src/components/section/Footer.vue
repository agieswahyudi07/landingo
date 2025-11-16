<script setup>
import { ref } from 'vue';

const categories = ref([
  // {
  //   title: 'Categories 1',
  //   links: [
  //     'First Link',
  //     'Second Link',
  //     'Third Link',
  //   ]
  // },
  // {
  //   title: 'Categories 2',
  //   links: [
  //     'First Link',
  //     'Second Link',
  //     'Third Link',
  //   ]
  // },
  // {
  //   title: 'Categories 3',
  //   links: [
  //     'First Link',
  //     'Second Link',
  //     'Third Link',
  //   ]
  // },
])

const isSubscribe = false 
const isTopSection = false 

</script>

<template>
  <footer class="text-gray-100 body-font">
    <!-- Optional Top Section -->
    <div class="container px-5 py-24 mx-auto" v-show="isTopSection">
      <div class="flex flex-wrap md:text-left text-center order-first">
        <nav
          v-show="categories.length > 0"
          class="lg:w-1/4 md:w-1/2 w-full px-4"
          v-for="(item, index) in categories"
          :key="index"
          aria-label="Footer Navigation"
        >
          <h2
            class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
          >
            {{ item.title }}
          </h2>
          <ul class="list-none mb-10">
            <li v-for="(link, idx) in item.links" :key="idx">
              <a
                href="#"
                class="text-gray-100 hover:text-gray-800"
                :aria-label="`Menu ${link}`"
              >
                {{ link }}
              </a>
            </li>
          </ul>
        </nav>

        <!-- Subscribe Section -->
        <div v-show="isSubscribe" class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2
            class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
          >
            Berlangganan Newsletter
          </h2>
          <form
            class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start"
          >
            <div
              class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2"
            >
              <label
                for="footer-email"
                class="leading-7 text-sm text-gray-100"
              >
                Masukkan email Anda
              </label>
              <input
                type="email"
                id="footer-email"
                name="email"
                placeholder="email@domain.com"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
            >
              Berlangganan
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div
        class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col gap-4"
      >
        <div class="flex-1">
          <p class="text-sm text-gray-300 sm:ml-6 sm:mt-0 mt-4">
            © 2025 <span class="font-semibold text-white">Landingo</span> — Landing Page Profesional untuk UMKM & Brand Lokal
          </p>
          <p class="text-xs text-gray-400 sm:ml-6 mt-2">
            Transformasi bisnis Anda dengan landing page yang mengkonversi
          </p>
        </div>
        <span
          class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-3"
        >
          <a
            href="https://facebook.com/landingoid"
            class="text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="Landingo di Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="mdi:facebook" width="24" />
          </a>
          <a
            href="https://instagram.com/landingoid"
            class="text-gray-400 hover:text-pink-400 transition-colors"
            aria-label="Landingo di Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="mdi:instagram" width="24" />
          </a>
          <a
            href="https://linkedin.com/company/landingoid"
            class="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="Landingo di LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="mdi:linkedin" width="24" />
          </a>
          <a
            href="https://wa.me/6285183077289"
            class="text-gray-400 hover:text-green-400 transition-colors"
            aria-label="Chat via WhatsApp dengan Landingo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="mdi:whatsapp" width="24" />
          </a>
        </span>
      </div>
    </div>
  </footer>
</template>

