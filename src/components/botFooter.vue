<template>
    <main class="bg-darkie pb-24 px-6 md:px-12">
      <div class="max-w-desktop w-full m-auto">
        <div id="getstarted" class="bg-white text-center px-4 md:px-16 lg:px-32 py-20 sm:py-28 rounded-3xl">
          <p class="text-[32px] sm:text-4xl md:text-5xl">Start performing all your financial transactions seamlessly <span class="text-gradient block sm:inline-block">on Ecstasy</span></p>
          <div class="m-auto flex justify-center items-center mt-16">
            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.softweb.ecstasy"><img src='../assets/images/googledark.svg' class="cursor-pointer py-2 md:py-4 px-4 md:px-8 border border-solid border-black rounded-lg mr-2 md:mr-6 hidden md:inline-block h-auto w-auto" /></a>
            <a target="_blank" href="https://apps.apple.com/ng/app/ecstasy-app/id6448960100"><img src='../assets/images/appledark.svg' class="cursor-pointer py-2 md:py-4 px-4 md:px-8 border border-solid border-black rounded-lg hidden md:inline-block h-auto w-auto" /></a>
            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.softweb.ecstasy"><img src='../assets/images/googleplaydarkm.svg' class="cursor-pointer py-2 md:py-4 px-4 md:px-8 border border-solid border-black rounded-lg mr-2 md:mr-6 inline-block md:hidden h-auto w-auto" /></a>
            <a target="_blank" href="https://apps.apple.com/ng/app/ecstasy-app/id6448960100"><img src='../assets/images/applestoredarkm.svg' class="cursor-pointer py-2 md:py-4 px-4 md:px-8 border border-solid border-black rounded-lg inline-block md:hidden h-auto w-auto" /></a>
          </div>
        </div>
        <div class="mt-32">
          <div class="text-gray6 text-center text-base 2xl:text-lg">
            <div class="foot md:flex md:justify-center md:items-center">
                <div class="foot1 flex mb-6 m-auto justify-center items-center sm:ml-32">
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100089155020464&mibextid=9R9pXO"><img style="margin-top: 30px;" class="w-7 h-7 m-2" src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-round-color-icon.png' /></a>
                    <a target="_blank" href="https://instagram.com/ecstasy_app?igshid=MmVlMjlkMTBhMg=="><img style="margin-top: 30px;" class="w-7 h-7 m-2" src='https://i0.wp.com/soundings.com/wp-content/uploads/2021/03/INSTAGRAM-Logo-Round-1000px.png?fit=1000%2C1000&ssl=1' /></a>
                </div>
                <div class="m-auto">
                    <router-link :to="{ name: 'Terms of Service' }" class="mr-2 md:mr-7">Terms of service</router-link> |
                    <router-link :to="{ name: 'Privacy' }" class="mx-2 md:mx-7">Privacy Policy</router-link> |
                    <router-link :to="{ name: 'Contact' }" class="ml-2 md:ml-7">Contact</router-link>
                </div>
            </div>
          </div>
          <p class="text-secondary px-0 md:px-20 mt-8 mb-12 text-center">Ecstasy Inc. is a financial technology company and is not a bank. Banking services are provided by licensed banking partners. Ecstasy is duly licensed by the Securities and Exchange Commission (SEC) of Nigeria. The virtual bank account number in line with the Nigeria Uniform Bank Account Number (NUBAN) numbering system which are generated with the names of selected banks through our payment partners.</p>
          <!-- <img src="../assets/images/logoecstasyApp.svg"  class="h-20 w-20 m-auto" /> -->
          <p class="mt-10 mb-8 text-2xl text-white text-center text-bold">Powered by <a href="/" class="text-gradient">Ecstacy</a></p>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
@media screen and (min-width: 784px) {
    .foot1 {
        margin-right: -20%;
    }
}
    </style>
  