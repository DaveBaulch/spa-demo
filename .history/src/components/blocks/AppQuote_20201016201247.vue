<template>

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

export default {
  name: 'AppBlock',
  props: {
    block: Object
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
