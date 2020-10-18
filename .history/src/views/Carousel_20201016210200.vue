<template>

  <div class="home">

    <div class="container">
      <h1>Carousel</h1>
    </div>      
    <AppCarousel :block="item" />
    
  </div>

</template>

<script>
// @ is an alias to /src
import AppCarousel from "@/components/blocks/appCarousel/AppCarousel.vue";

export default {
  name: "Carousel",
  components: {
    AppCarousel
  },
  data () {
    return {
      item: {      
        "type": "AppCarousel",
        "content": [
          {
            "id": 1,
            "title": "Hero title test 1",
            "imgSrc1": "https://picsum.photos/575/300?image=1",
            "imgSrc2": "https://picsum.photos/767/275?image=2",
            "imgSrc3": "https://picsum.photos/991/260?image=3",
            "imgSrc4": "https://picsum.photos/1500/400?image=3",
            "text": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate tenetur officiis excepturi porro ducimus ab provident, quas temporibus ratione illo quae neque cupiditate totam facere nulla ad exercitationem itaque incidunt.</p>",
            "btnText": "Click this button 1"
          },
          {
            "id": 2,
            "title": "Hero title test 2",
            "imgSrc1": "https://picsum.photos/767/275?image=1",
            "imgSrc2": "https://picsum.photos/991/260?image=2",
            "imgSrc3": "https://picsum.photos/1500/400?image=3",
            "imgSrc4": "https://picsum.photos/575/300?image=4",
            "text": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate tenetur officiis excepturi porro ducimus ab provident, quas temporibus ratione illo quae neque cupiditate totam facere nulla ad exercitationem itaque incidunt.</p>",
            "btnText": "Click this button 2"
          },
          {
            "id": 3,
            "title": "Hero title test 3",
            "imgSrc1": "https://picsum.photos/991/260?image=1",
            "imgSrc2": "https://picsum.photos/1500/400?image=2",
            "imgSrc3": "https://picsum.photos/575/300?image=3",
            "imgSrc4": "https://picsum.photos/767/275?image=4",      
            "text": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate tenetur officiis excepturi porro ducimus ab provident, quas temporibus ratione illo quae neque cupiditate totam facere nulla ad exercitationem itaque incidunt.</p>",
            "btnText": "Click this button 3"
          }
        ]
      }
    }
  }  
};
</script>

<style scoped lang="scss">
</style>
