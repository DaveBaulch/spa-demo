<template>

  <div class="home">

    <component 
      v-for="item in pageData.data"
      :is="item.type" 
      :key="item.id"
      :block="item">
    </component>

  </div>

</template>

<script>
import axios from 'axios';
import AppHero from "@/components/blocks/appHero/AppHero.vue";
import AppText from "@/components/blocks/AppText.vue";
import AppCardList from "@/components/blocks/AppCardList.vue";
import AppCarousel from "@/components/blocks/appCarousel/AppCarousel.vue";
import AppQuote from "@/components/blocks/AppQuote.vue";
import AppCTA from "@/components/blocks/AppCTA.vue";
import AppSectors from "@/components/blocks/appSectors/AppSectors.vue";

export default {
  name: "TestPage2",
  components: {
    AppHero,
    AppText,
    AppCarousel,
    AppCardList,
    AppQuote,
    AppCTA,
    AppSectors
  },
  data () {
    return {
      pageData: null
    }
  },
  created() {
    axios
      .get('data/page-data.json')
      .then((response) => {
        this.pageData = response.data;
      })
      .catch((error) => {
        console.log(error);
      });            
    }
}
</script>