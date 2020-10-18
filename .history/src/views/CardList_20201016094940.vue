<template>

  <div class="home">

    <div class="container">
      <h1>Card List</h1>
    </div>

    <AppCardList />   

  </div>

</template>

<script>
// @ is an alias to /src
import AppCardList from "@/components/blocks/AppCardList.vue";

export default {
  name: "Cards",
  components: {
    AppCardList
  }
};
</script>

<style scoped lang="scss">

</style>
