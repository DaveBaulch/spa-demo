<template>

  <div class="home">

    <div class="container">
      <h1>Hero</h1>
    </div>

    <AppHero />   

  </div>

</template>

<script>
// @ is an alias to /src
import AppHero from "@/components/blocks/appHero/AppHero.vue";

export default {
  name: "Hero",
  components: {
    AppHero
  }
};
</script>

<style scoped lang="scss">

</style>
