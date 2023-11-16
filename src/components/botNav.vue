<template>
    <main :class="isNavOpen ? 'h-auto' : 'md:h-24 h-20 '" class=" overflow-hidden backdrop-blur px-6 md:px-12 w-full fixed bg-transparent z-[999]">
      <div class="max-w-desktop m-auto py-3 md:py-6 flex justify-between items-center">
        <router-link :to="{ name: 'Home' }"><div class="flex justify-center items-center"><img src="../assets/images/logoecstasyApp.svg"  class="h-10 w-10 inline" /><span class="text-secondary ml-2 text-base lg:text-lg">Ecstasy</span></div></router-link>
        <div class="hidden md:flex text-base lg:text-lg md:w-2/5 lg:w-1/3 xl:w-1/4 justify-between text-secondary">
          
          <router-link :to="{ name: 'Bot' }" class="text-gradient">Ecstasy Bot</router-link>
          <router-link :to="{ name: 'useBot' }">How to Use</router-link>
        </div>
        <a href="#getstarted"><button class="-mr-8 sm:-mr-12 md:mr-0 text-base lg:text-lg py-2 md:py-3 px-4 md:px-8 bg-white rounded-lg"><p class="text-gradient">Launch Chatbot</p></button></a>
        <div @click="toggleIsNavOpen()" class="pr-2 md:pr-16 md:hidden h-3 flex flex-col justify-between">
          <span class="w-8 h-[1.8px] bg-gray4 relative block rounded-xl"></span>
          <span class="w-8 h-[1.8px] bg-gray4 relative block rounded-xl"></span>
        </div>
      </div>
      <div class="md:hidden bg-transparent backdrop-blur mt-8 flex flex-col text-base lg:text-lg w-full justify-between text-white">
        <router-link @click="isNavOpen = !isNavOpen" :to="{ name: 'Bot' }" class="mb-6">Ecstacy Bot</router-link>
        <router-link @click="isNavOpen = !isNavOpen" :to="{ name: 'useBot' }" class="mb-6">How to Use</router-link>
      </div>
    </main>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  let isNavOpen = ref(false);
  const toggleIsNavOpen = () => {
    isNavOpen.value = !isNavOpen.value
  }
  </script>
  
  <style></style>
  