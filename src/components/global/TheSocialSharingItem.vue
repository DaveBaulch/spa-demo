<template>
  <a :href="href"
    class="social-sharing-item"
    ><slot /></a>
</template>

<script>
export default {
  name: 'TheSocialSharingItem',
  props: {
    href: {
      type: String,
      default: ''
    }
  }
}
</script>


<style scoped lang="scss">
@import '../../assets/sass/utilities/_variables.scss';

.social-sharing-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;

  &:hover,
  &:focus {
    color: $color-link-hover;
    text-decoration: underline;
  }
}
</style>