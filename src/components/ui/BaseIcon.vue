<template>
  <svg :class="className" :width="width" :height="height">
    <use :xlink:href="glyph" />
  </svg>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: [
    'className', 
    'glyph', 
    'width', 
    'height'
  ],
};
</script>

<style scoped>
</style>