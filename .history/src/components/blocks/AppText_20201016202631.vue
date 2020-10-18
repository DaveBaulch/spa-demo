<template>
  <div class="section text-block">
    <div class="container">
      <div class="row">
        <div class="wysiwyg" v-html="block.content.text">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppText',
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

.wysiwyg {
  text-align: left;
  margin: 0 auto;
  padding: 0 0 4rem 0;
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
