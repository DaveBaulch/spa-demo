<template>
  <a class="btn-scroll-top" :class="{ active: buttonVisible }" ref="scroll-button" id="scroll-top" href="#skip-navigation" v-scroll-to="{el: '#skip-navigation', onDone: onDone}">
    <slot />
  </a>
</template>

<script>
export default {
  name: "TheScrollTopButton",
  data: function () {
    return {
      scrollPosition: null,
      buttonVisible: false
    }
  },  
  methods: {
    onDone() {
      document.getElementById('skip-navigation').focus();
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
      // console.log(this.scrollPosition)
      if ( this.scrollPosition > 100 ){
        this.buttonVisible = true;
      } else {
        this.buttonVisible = false;
      }
    }    
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }  
};
</script>


<style scoped lang="scss">
@import "../../assets/sass/utilities/_variables.scss";
@import "../../assets/sass/utilities/_mixins.scss";

.btn-scroll-top {
  position: fixed;
  z-index: 100;
  bottom: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  overflow: hidden;
  text-indent: -1999em;
  color: $white;
  background-color: $white;
  border: 1px solid $grey-dark;;
  opacity: 0;
  transition: 300ms ease all;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;

  @include breakpoint(md) {
    bottom: 85px;
    display: flex;
  }

  &.active {
    opacity: 0.9;
  }
}

</style>