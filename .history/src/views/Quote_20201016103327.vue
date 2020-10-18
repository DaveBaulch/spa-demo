<template>

  <div class="home">

    <div class="container">
      <h1>Quote</h1>
    </div>

    <AppQuote />   

  </div>

</template>

<script>
// @ is an alias to /src
import AppQuote from "@/components/blocks/AppQuote.vue";

export default {
  name: "Quote",
  components: {
    AppQuote
  }
};
</script>

<style scoped lang="scss">
</style>
