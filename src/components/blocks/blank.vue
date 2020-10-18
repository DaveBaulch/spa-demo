<template>
  <article class="section which-block">
  </article>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AppBlock',
  props: {
    componentId: {
      type: Number
    },
  },      
  data () {
    return {
      blockData: null
    }
  },
  components: {
  },
  watch: {
  },  
  created() {
    axios
      .get('data/data.json')
      .then((response) => {
        this.blockData = response.data;
      })
      .catch((error) => {
        console.log(error);
      });            
  },   
  mounted() {
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/sass/utilities/_variables.scss';
@import '../../assets/sass/utilities/_mixins.scss';

</style>
