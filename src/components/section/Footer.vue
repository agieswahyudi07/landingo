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
    <div class="container px-5 py-24 mx-auto" v-show="isTopSection">
      <div class="flex flex-wrap md:text-left text-center order-first">
        <div v-show="categories.length > 0" class="lg:w-1/4 md:w-1/2 w-full px-4" v-for="(item, index) in categories" :key="index" >
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">{{ item.title }}</h2>
          <nav class="list-none mb-10">
            <li v-for="(link, index) in item.links" :key="index">
              <a class="text-gray-100 hover:text-gray-800">{{ link }}</a>
            </li>
          </nav>
        </div>
        <div v-show="isSubscribe" class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
          <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
            <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
              <label for="footer-field" class="leading-7 text-sm text-gray-100">Placeholder</label>
              <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
          </div>
          <p class="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
            <br class="lg:block hidden">waistcoat green juice
          </p>
        </div>
      </div>
    </div>
    <div class=" bg-white text-primary font-semibold">
      <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
        <p class="text-sm text-primary sm:ml-6 sm:mt-0 mt-4 uppercase">© 2025 Landingo —
          <a href="https://agieswahyudi.vercel.app" rel="noopener noreferrer" class="text-primary ml-1 lowercase" target="_blank">@agieswahyudi</a>
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-2">
          <a class="text-primary">
            <Icon  icon="mdi:facebook" width="24"></Icon>
          </a>
          <a class="text-primary">
            <Icon  icon="mdi:instagram" width="24"></Icon>
          </a>
          <a class="text-primary">
            <Icon  icon="mdi:linkedin" width="24"></Icon>
          </a>
          <a class="text-primary">
            <Icon  icon="mdi:whatsapp" width="24"></Icon>
          </a>
        </span>
      </div>
    </div>
  </footer>
</template>
