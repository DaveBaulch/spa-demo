<template>

  <div class="home">

    <AppHero />
    <AppText />
    <AppSectors />
    <AppCarousel />
    <AppQuote />
    <AppCardList />   
    <AppCTA />
    
  </div>

</template>

<script>
// @ is an alias to /src
import AppHero from "@/components/blocks/appHero/AppHero.vue";
import AppText from "@/components/blocks/AppText.vue";
import AppCardList from "@/components/blocks/AppCardList.vue";
import AppCarousel from "@/components/blocks/appCarousel/AppCarousel.vue";
import AppQuote from "@/components/blocks/AppQuote.vue";
import AppCTA from "@/components/blocks/AppCTA.vue";
import AppSectors from "@/components/blocks/appSectors/AppSectors.vue";

export default {
  name: "TestPage",
  components: {
    AppHero,
    AppText,
    AppCarousel,
    AppCardList,
    AppQuote,
    AppCTA,
    AppSectors
  }
};
</script>

<style scoped lang="scss">

</style>
