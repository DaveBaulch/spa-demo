<template>

  <div class="home">

    <div class="container">
      <h1>Text</h1>
    </div>

    <AppText />   

  </div>

</template>

<script>
import AppText from "@/components/blocks/AppText.vue";

export default {
  name: "Text",
  components: {
    AppText
  }
};
</script>

<style scoped lang="scss">

</style>
