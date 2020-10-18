<template>

  <!-- <div class="section quote-block" v-if="blockData">
    <div class="container">
      <div class="row">
        <blockquote class="quote">
          <span v-html="blockData.text" class="quote__text"></span>
          <cite>
            <span v-if="hasAuthor" class="quote__author">{{ blockData.author }}</span>
            <span v-if="hasComma">, </span>
            <span v-if="hasJobTitle" class="quote__job-title">{{ blockData.jobTitle }}</span>
          </cite>
        </blockquote>
      </div>
    </div>
  </div> -->

  <div class="section quote-block">
    <div class="container">
      <div class="row">
        <blockquote class="quote">
          <span v-html="block.content.text" class="quote__text"></span>
          <cite>
            <span class="quote__author">{{ block.content.author }}</span>
            <span>, </span>
            <span class="quote__job-title">{{ block.content.jobTitle }}</span>
          </cite>
        </blockquote>
      </div>
    </div>
  </div> 

</template>

<script>
// import axios from 'axios';

export default {
  name: 'AppBlock',
  props: {
    componentId: {
      type: Number
    },
    block: Object
  },      
  data () {
    return {
      blockData: null
    }
  }
  // computed: {
  //   hasAuthor () {
  //     return this.blockData.author != null
  //   },
  //   hasJobTitle () {
  //     return this.blockData.jobTitle != null
  //   },
  //   hasComma () {
  //     return this.blockData.author != null && this.blockData.jobTitle != null
  //   }
  // },
  // created() {
  //   axios
  //     .get('data/quote-data.json')
  //     .then((response) => {
  //       this.blockData = response.data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });  
  //   }          
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

.quote {
  text-align: center;
  margin: 0 auto;
  padding: 3rem 0;
  border: none;
  grid-column: 1 / 13;  

  @include breakpoint(md) {
    grid-column: 2 / 11;
  }

  @include breakpoint(lg) {
    grid-column: 3 / 10;
  }  
}

.quote__text {
  font-size: 2.3rem;
  font-weight: bold;
}

</style>
