<template>
  <article class="carousel__item">
    <div class="carousel__wrapper">  
      <div class="carousel__background picturefill-background is-lazy">
        <span class="picturefill-background-source" :data-src="itemData.imgSrc1"></span>
        <span
          class="picturefill-background-source"
          :data-src="itemData.imgSrc2"
          data-media="(min-width: 576px)"
        ></span>
        <span
          class="picturefill-background-source"
          :data-src="itemData.imgSrc3"
          data-media="(min-width: 768px)"
        ></span>
        <span
          class="picturefill-background-source"
          :data-src="itemData.imgSrc4"
          data-media="(min-width: 992px)"
        ></span>
      </div>

      <div class="container">
        <div class="carousel__content">
          <h2 class="carousel__heading" v-if="itemData">{{ itemData.title }}</h2>
          <div class="carousel__body" v-html="itemData.text" v-if="itemData">
          </div>
          <BaseLink 
            :text="itemData.btnText" 
            to="/about" 
            type="router-link" 
            class="carousel__button" 
            v-if="itemData" 
          />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import BaseLink from '@/components/ui/BaseLink';

export default {
  name: 'AppCarouselItem',
  props: {
    itemData: {}
  },
  components: { 
    BaseLink
  },
}
</script>

<style scoped lang="scss">
@import '../../../assets/sass/utilities/_variables.scss';
@import '../../../assets/sass/utilities/_mixins.scss';

.carousel__item {
  width: auto;
  position: relative;
  padding: 0;

  @include breakpoint(sm) {
    padding: 0 2rem 0 2rem;
  }
}

.carousel__wrapper {
  height: 400px;

  .container {
    width: auto;
    height: 100%;
    padding: 0;
    z-index: 100;
  }
}

.carousel__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-size: cover;
}

.carousel__content {
  position: relative;
  max-width: 580px;
  z-index: 100;
  top: 50%;
  transform: translateY(-50%);
  background-color: $white;
  padding: 2rem;
  margin: 0 40px;
}

.carousel__heading {
  margin: 0;
}

</style>
