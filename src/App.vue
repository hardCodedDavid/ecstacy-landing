<template>
  <div>
    <div v-if="useBotNav  == 'Bot'">
      <botNav></botNav>
      <router-view></router-view>
      <botFooter></botFooter>
    </div>
    <div v-else-if="useBotNav == 'useBot'">
      <whatsappNav></whatsappNav>
      <router-view></router-view>
      <botFooter></botFooter>
    </div>
    <div v-else>
      <navbar></navbar>

      <router-view></router-view>

      <Footer></Footer>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, getCurrentInstance } from 'vue';
import Navbar from './components/Navbar.vue'
import botNav from './components/botNav.vue'
import whatsappNav from './components/whatsappNav.vue'
import Footer from './components/Footer.vue'
import botFooter from './components/botFooter.vue'

const instance = getCurrentInstance();
const useBotNav = computed(() => {
  return instance.proxy.$route.name;
});

</script>

<style scoped>
</style>
