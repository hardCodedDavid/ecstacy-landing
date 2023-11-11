<script setup>

</script>

<template>
  <main class="w-full bg-darkie px-6 md:px-12 overflow-hidden">
    <div class="py-48 2xl:py-56 max-w-desktop m-auto">
      <section id="hero" class="max-w-hero m-auto text-center w-full md:w-5/6 lg:w-2/3 flex flex-col justify-center items-center">
        <div>
          <p class="text-[37px] md:text-5xl lg:text-heroheader 2xl:text-lgheroheader text-white leading-tight 2xl:leading-none font-[400] mb-7">Seamless financial transactions <span class="block text-gradient">on the go!</span></p>
          <p class="text-base 2xl:text-lg text-gray4 px-3 2xl:px-20">Ecstasy allows you to buy cheap data bundles, Buy airtime at cheaper rate, Recharge TV and Pay Bills right from your in-app wallet</p>
          <div class="m-auto flex justify-center items-center mt-16">
            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.softweb.ecstasy"><img src='../assets/images/googlestore.svg' class="cursor-pointer py-2 md:py-4 px-4 md:px-8 border border-solid rounded-lg mr-3 md:mr-6 hidden md:inline-block h-auto w-auto" /></a>
            <a target="_blank" href="https://apps.apple.com/ng/app/ecstasy-app/id6448960100"><img src='../assets/images/applestore.svg' class="cursor-pointer py-2 md:py-4 px-4 md:px-8 border border-solid rounded-lg hidden md:inline-block h-auto w-auto" /></a>
            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.softweb.ecstasy"><img src='../assets/images/googleplaym.svg' class="cursor-pointer py-2 md:py-4 px-4 md:px-8 border border-solid rounded-lg mr-3 md:mr-6 inline-block md:hidden h-auto w-auto" /></a>
            <a target="_blank" href="https://apps.apple.com/ng/app/ecstasy-app/id6448960100"><img src='../assets/images/applestorem.svg' class="cursor-pointer py-2 md:py-4 px-4 md:px-8 border border-solid rounded-lg inline-block md:hidden h-auto w-auto" /></a>
          </div>
        </div>
        <div class="h-auto w-auto mt-8 relative">
          <img src="../assets/images/spread.svg" />
          <img src="../assets/images/iPhone12Pro.svg" class="hidden sm:inline absolute left-8 top-12" />
          <img src="../assets/images/iphone12promobile.svg" class="sm:hidden absolute top-12" />
        </div>
      </section>
      <section class="mt-20 md:-mt-20 text-center flex flex-col justify-center items-center">
        <p class="px-9 text-gray1 text-sm md:text-base font-[350] py-3 bg-gray5 inline m-auto rounded-full mb-4 2xl:mb-6">ABOUT ECSTASY</p>
        <p class="text-white text-4xl lg:text-[56px] 2xl:text-[69px] lg:leading-tight 2xl:leading-tight">All your financial transactions <span class="block text-gradient">in one place!</span></p>
      </section>
      <section class="mt-32">
        <div class="flex flex-col md:flex-row gap-12 md:gap-4 lg:gap-8">
          <div class="relative">
            <div class="bg-primary py-9 px-7 rounded-xl">
              <p class="text-gradient text-sm mb-2">ON ECSTASY</p>
              <p class="text-gray6 text-xl 2xl:text-2xl mb-4">Purchase data</p>
              <p class="text-secondary">Purchase data across all networks from your Ecstasy wallet</p>
            </div>
            <div class="bg-darker w-[90%] h-32 mb-4 absolute top-0 -z-[1] -rotate-12 ml-4 rounded-xl"></div>
          </div>
          <div class="relative">
            <div class="bg-primary py-9 px-7 rounded-xl">
              <p class="text-gradient text-sm mb-2">ON ECSTASY</p>
              <p class="text-gray6 text-xl 2xl:text-2xl mb-4">Purchase airtime</p>
              <p class="text-secondary">Purchase airtime across all networks from your Ecstasy wallet</p>
            </div>
            <div class="bg-darker w-[90%] h-32 mb-4 absolute top-0 -z-[1] -rotate-12 ml-4 rounded-xl"></div>
          </div>
          <div class="relative">
            <div class="bg-primary py-9 px-7 rounded-xl">
              <p class="text-gradient text-sm mb-2">ON ECSTASY</p>
              <p class="text-gray6 text-xl 2xl:text-2xl mb-4">Pay bills</p>
              <p class="text-secondary">Pay all your utility bills and make TV subscription from your Ecstasy wallet</p>
            </div>
            <div class="bg-darker w-[90%] h-32 mb-4 absolute top-0 -z-[1] -rotate-12 ml-4 rounded-xl"></div>
          </div>
        </div>
      </section>
      <section id="features" class="mt-32">
        <div class="flex gap-10 flex-col lg:flex-row">
          <div class="flex-[0.9]">
            <p class="px-9 text-gray1 font-[350] py-3 bg-gray5 inline m-auto rounded-full mb-8 2xl:mb-10">FEATURES</p>
            <p class="mt-10 mb-8 text-5xl 2xl:text-[65px] text-white"><span class="text-gradient">Best features</span> for a pleasant experience</p>
            <p class="text-gray4 lg:w-3/4">Ecstasy was designed to solve the problems around financial transactions. We have provided features that ensure you have a pleasant experience performing your desired actions.</p>
            <a href="#getstarted"><button class="mt-10 py-4 rounded-xl text-base 2xl:text-lg px-20 bg-gradient text-white">Get started</button></a>
          </div>
          <div class="flex-[1.1] overflow-scroll lg:overflow-hidden">
            <div class="grid grid-cols-4 md:grid-cols-2 w-[1000px] md:w-auto gap-8 flex-[1]">
              <div class="flex flex-col items-center justify-between bg-primary py-10 md:py-16 px-6 md:px-10 text-center rounded-xl">
                <p class="text-gradient mb-6">Security</p>
                <img src="../assets/images/Shield.svg" class="mb-5" />
                <p class="text-gray4">Best in class protection for all your assets & transaction on Ecstasy</p>
              </div>
              <div class="flex flex-col items-center justify-between bg-primary py-10 md:py-16 px-6 md:px-10 text-center rounded-xl">
                <p class="text-gradient mb-6">Speed</p>
                <img src="../assets/images/akar-icons_thunder.svg" class="mb-5" />
                <p class="text-gray4">Transactions on ecstasy happen in no time</p>
              </div>
              <div class="flex flex-col items-center justify-between bg-primary py-10 md:py-16 px-6 md:px-10 text-center rounded-xl">
                <p class="text-gradient mb-6">Ease of use</p>
                <img src="../assets/images/ph_crosshair-simple.svg" class="mb-5" />
                <p class="text-gray4">The Ecstasy app employs the use of intuitive user patterns.</p>
              </div>
              <div class="flex flex-col items-center justify-between bg-primary py-10 md:py-16 px-6 md:px-10 text-center rounded-xl">
                <p class="text-gradient mb-6">Control</p>
                <img src="../assets/images/game-icons_settings-knobs.svg" class="mb-5" />
                <p class="text-gray4">Ecstasy allows you to access and track your financial transactions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="mt-32">
        <div class="lg:w-3/4 m-auto text-center font-[350]">
          <p class="px-9 text-gray1 text-sm md:text-base font-[350] py-3 bg-gray5 inline m-auto rounded-full mb-8 2xl:mb-10">GET STARTED</p>
          <p class="text-white text-4xl md:text-5xl px-0 lg:px-12 leading-tight mt-6">Enter the world of seamless financial transactions <span class="text-gradient">in three easy steps</span></p>
          <div class="mt-16 mb-10 flex flex-col md:flex-row justify-between items-center">
            <div class="flex flex-col items-center">
              <p class="flex justify-center items-center border border-dashed border-secondary text-secondary rounded-full h-16 w-16 text-xl inline-block">1</p>
              <p class="text-gray6 mt-4 text-gray6">Download the ecstasy mobile app</p>
            </div>
            <div class="w-16 md:w-48 h-[1px] self-start ml-36 md:ml-0 mt-12 mb-12 md:mb-0 md:mt-8 bg-secondary/50 rotate-90 md:rotate-0"></div>
            <div class="flex flex-col items-center">
              <p class="flex justify-center items-center border border-dashed border-secondary text-secondary rounded-full h-16 w-16 text-xl inline-block">2</p>
              <p class="text-gray6 mt-4 text-gray6">Set up your account.</p>
            </div>
            <div class="w-16 md:w-48 h-[1px] self-start ml-36 md:ml-0 mt-12 mb-12 md:mb-0 md:mt-8 bg-secondary/50 rotate-90 md:rotate-0"></div>
            <div class="flex flex-col items-center">
              <p class="flex justify-center items-center border border-dashed border-secondary text-secondary rounded-full h-16 w-16 text-xl inline-block">🎉</p>
              <p class="text-gray6 mt-4 text-gray6">Perform your first transaction</p>
            </div>
          </div>
          <a href="#getstarted"><button class="mt-10 py-4 rounded-xl text-base 2xl:text-lg px-12 md:px-20 bg-gradient text-white">Get started</button></a>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
</style>
