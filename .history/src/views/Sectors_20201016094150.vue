<template>

  <div class="home">

    <div class="container">
      <h1>Sectors</h1>
    </div>

    <AppSectors />   

  </div>

</template>

<script>
import AppSectors from "@/components/blocks/appSectors/AppSectors.vue";

export default {
  name: "Sectors",
  components: {
    AppSectors
  }
};
</script>

<style scoped lang="scss">

</style>
