<template>
  <div class="section text-block" v-if="blockData">
    <div class="container">
      <div class="row">
        <div class="wysiwyg" v-html="blockData.text">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AppText',
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
  created() {
    axios
      .get('data/text-data.json')
      .then((response) => {
        this.blockData = response.data;
      })
      .catch((error) => {
        console.log(error);
      });            
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/sass/utilities/_variables.scss';
@import '../../assets/sass/utilities/_mixins.scss';

.row {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;  
}

.wysiwyg {
  text-align: left;
  margin: 0 auto;
  padding: 0;
  border: none;
  grid-column: 1 / 13;  

  @include breakpoint(md) {
    grid-column: 2 / 11;
  }

  @include breakpoint(lg) {
    grid-column: 3 / 10;
  }  
}

</style>
