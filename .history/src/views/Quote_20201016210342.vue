<template>

  <div class="home">

    <div class="container">
      <h1>Quote</h1>
    </div>

    <AppQuote :block="item" />   

  </div>

</template>

<script>
// @ is an alias to /src
import AppQuote from "@/components/blocks/AppQuote.vue";

export default {
  name: "Quote",
  components: {
    AppQuote
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
