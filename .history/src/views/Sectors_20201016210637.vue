<template>

  <div class="home">

    <div class="container">
      <h1>Sectors</h1>
    </div>

    <AppSectors :block="item" />   

  </div>

</template>

<script>
import AppSectors from "@/components/blocks/appSectors/AppSectors.vue";

export default {
  name: "Sectors",
  components: {
    AppSectors
  },
  data () {
    return {
      item: {      
        "type": "AppCTA",
        "content": {
          "title": "CTA title",
          "imgSrc1": "https://picsum.photos/575/300?image=1",
          "imgSrc2": "https://picsum.photos/767/275?image=2",
          "imgSrc3": "https://picsum.photos/991/260?image=3",
          "imgSrc4": "https://picsum.photos/1500/400?image=4",
          "text": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>",
          "btnText": "CTA button"
        }
      }
    }
  }  
};
</script>

<style scoped lang="scss">

</style>
