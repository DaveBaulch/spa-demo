<template>

  <div class="home">

    <div class="container">
      <h1>Hero</h1>
    </div>

    <AppHero :block="item" />   

  </div>

</template>

<script>
// @ is an alias to /src
import AppHero from "@/components/blocks/appHero/AppHero.vue";

export default {
  name: "Hero",
  components: {
    AppHero
  },
  data () {
    return {
      item: {      
        "type": "AppHero",
        "content": {
          "title": "Hero title test 1",
          "imgSrc1": "https://picsum.photos/575/300?image=1",
          "imgSrc2": "https://picsum.photos/767/275?image=2",
          "imgSrc3": "https://picsum.photos/991/260?image=3",
          "imgSrc4": "https://picsum.photos/1500/400?image=4",
          "text": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate tenetur officiis excepturi porro ducimus ab provident, quas temporibus ratione illo quae neque cupiditate totam facere nulla ad exercitationem itaque incidunt.</p>",
          "btnText": "Click the button"
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">

</style>
