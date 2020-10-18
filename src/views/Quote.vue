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
        "type": "AppQuote",
        "content": {
          "text": "<p>\"Test: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate tenetur officiis excepturi porro ducimus ab provident.\"<p>",
          "author": "Test: Author name",
          "jobTitle": "Test: Author title"
        }
      }
    }
  } 
};
</script>

<style scoped lang="scss">
</style>
