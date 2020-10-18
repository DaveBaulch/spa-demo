<template>
  <article class="section cta-block" v-if="blockData">
    <div class="cta">
      <div class="cta__background picturefill-background is-lazy">
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
        <div class="cta__content">
          <h1 v-if="blockData" class="cta__title">{{ blockData.title }}</h1>
          <div v-if="blockData" v-html="blockData.text" class="cta__text"></div>
          <BaseLink :text="blockData.btnText" to="/about" type="router-link" v-if="blockData" class="cta__btn" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import axios from 'axios';
import BaseLink from '@/components/ui/BaseLink';
import lazyloadPicturefillBackground from 'lazyload-picturefill-background';

export default {
  name: 'AppCTA',
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
  components: {
    BaseLink
  },
  watch: {
    blockData: function () {
      this.$nextTick(() => {
        new lazyloadPicturefillBackground(); 
      }) 
    }
  },  
  created() {
    axios
      .get('data/cta-data.json')
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

.cta {
  position: relative;

  .container {
    width: auto;
    position: relative;
  }
}

.cta__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;

  &:after {
    position: absolute;
    display: block;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, rgba(10, 50, 70, 0.3) 50%, rgba(10, 50, 70, 0.6) 95%);
  }
}

.cta__content {
  text-align: left;
  padding: 4rem 0;
  color: $white;

  @include breakpoint(lg) {
    padding: 8rem 0;
  }
}

.cta__title {
  color: $white;
  margin: 0;
}

.cta__btn {
  margin-top: 3.5rem;
}
</style>
