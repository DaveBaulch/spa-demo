<template>
  <article class="section banner-block" v-if="blockData">
    <div class="banner">
      <div class="banner__background picturefill-background is-lazy">
        <span class="picturefill-background-source" :data-src="blockData.imgSrc1"></span>
        <span
          class="picturefill-background-source"
          :data-src="blockData.imgSrc2"
          data-media="(min-width: 576px)"
        ></span>
        <span
          class="picturefill-background-source"
          :data-src="blockData.imgSrc3"
          data-media="(min-width: 768px)"
        ></span>
        <span
          class="picturefill-background-source"
          :data-src="blockData.imgSrc4"
          data-media="(min-width: 992px)"
        ></span>
      </div>

      <div class="container">
        <div class="banner__content">
          <div class="banner__inner">
            <h1 class="banner__heading">{{ blockData.title }}</h1>

            <div class="banner__text" v-html="blockData.text">
            </div>
          </div>

          <BaseLink :text="blockData.btnText" to="/about" type="router-link" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import BaseLink from '@/components/ui/BaseLink';
import lazyloadPicturefillBackground from 'lazyload-picturefill-background';

export default {
  name: 'AppHero',
  props: {
    block: Object
  },
  components: {
    BaseLink
  },
  created() {
    this.$nextTick(() => {
      new lazyloadPicturefillBackground(); 
    })         
  }
};
</script>

<style scoped lang="scss">
@import '../../../assets/sass/utilities/_variables.scss';
@import '../../../assets/sass/utilities/_mixins.scss';

.banner {
  position: relative;
  background-color: $grey-light;

  .container {
    width: auto;
    position: relative;
  }
}

.banner__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
}

.banner__content {
  text-align: center;
  padding: 4rem 0;

  @include breakpoint(lg) {
    padding: 8rem 0;
  }
}

.banner__inner {
  margin-bottom: 3rem;
  background-color: $white;
  padding: 2rem;
  color: $black;
}
</style>
