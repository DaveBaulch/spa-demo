<template>

  <div class="home">

    <div class="container">
      <h1>CTA</h1>
    </div>

    <AppCTA />   

  </div>

</template>

<script>
import AppCTA from "@/components/blocks/AppCTA.vue";

export default {
  name: "CTA",
  components: {
    AppCTA
  }
};
</script>

<style scoped lang="scss">

</style>
