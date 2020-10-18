<template>
  <a 
    href="#main" 
    id="skip-navigation" 
    class="skip-link" 
    ref="skip-navigation" 
    v-scroll-to="{el: '#main'}">
    <slot />
  </a>
</template>



<style scoped lang="scss">
@import '../../assets/sass/utilities/_mixins.scss';
@import '../../assets/sass/utilities/_variables.scss';

.skip-link {
  padding: 0.5rem 1rem 1rem 1rem;
  background-color: $white;
  position: absolute;
  top: -100%;
  left: 2px;
  z-index: 200;
  text-decoration: none !important;
  display: none;

  &:focus {
    top: 2px;
    transition: $transition-speed-medium ease all;
    color: $black;
  }

  @include breakpoint(md) {
    display: flex;
  }  
}

.skip-link:visited {
  color: $black;
}
</style>