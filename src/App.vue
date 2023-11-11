<template>
  <div>
    <div v-if="useBotNav  == 'Bot' || useBotNav  == 'useBot'">
      <botNav></botNav>
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
import Footer from './components/Footer.vue'

const instance = getCurrentInstance();
const useBotNav = computed(() => {
  return instance.proxy.$route.name;
});

</script>

<style scoped>
</style>
