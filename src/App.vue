<template>
  <div>
    <div v-if="useBotNav  == 'Bot'">
      <botNav></botNav>
    </div>
    <div v-else-if="useBotNav == 'useBot'">
      <whatsappNav></whatsappNav>
    </div>
    <div v-else>
      <navbar></navbar>
    </div>

    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script setup>
import { ref, computed, getCurrentInstance } from 'vue';
import Navbar from './components/Navbar.vue'
import botNav from './components/botNav.vue'
import whatsappNav from './components/whatsappNav.vue'
import Footer from './components/Footer.vue'

const instance = getCurrentInstance();
const useBotNav = computed(() => {
  return instance.proxy.$route.name;
});

</script>

<style scoped>
</style>
