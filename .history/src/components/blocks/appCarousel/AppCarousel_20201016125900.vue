<template>
  <section class="section carousel-block" v-if="blockData">
    <VueSlickCarousel v-bind="settings" class="carousel" ref="carousel">

        <AppCarouselItem v-for="item in blockData" :key="item.id" :itemData="item" />

    </VueSlickCarousel>

    <button @click="togglePause()" :class="isPaused ? 'carousel-play-btn is-paused' : 'carousel-play-btn'" role="button" aria-label="Play carousel">{{ btnText }}</button>

  </section>
</template>
 
<script>
  import axios from 'axios';
  import VueSlickCarousel from 'vue-slick-carousel';
  import 'vue-slick-carousel/dist/vue-slick-carousel.css';
  import lazyloadPicturefillBackground from 'lazyload-picturefill-background';
  import AppCarouselItem from '@/components/blocks/appCarousel/AppCarouselItem';

  export default {
    name: 'AppCarousel',
    props: {
      componentId: {
        type: Number
      },
    },    
    components: { 
      VueSlickCarousel,
      AppCarouselItem
    },
    data: function () {
      return {
        settings: {
          "dots": true,
          "dotsClass": "slick-dots custom-dot-class",
          "edgeFriction": 0.35,
          "infinite": true,
          "speed": 500,
          "slidesToShow": 1,
          "slidesToScroll": 1,
          "pauseOnHover": false,
          "pauseOnDotsHover": false,
          "pauseOnFocus": false,
          "autoplay": true,
          "adaptiveHeight": true
        },
        isPaused: false,
        blockData: null
      }
    },
    computed: {
      btnText () {
        return this.isPaused ? 'Play' : 'Pause'
      }
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
        .get('data/carousel-data.json')
        .then((response) => {
          this.blockData = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });            
    },
    methods: {
      togglePause() {
        if (this.isPaused) {
          this.$refs.carousel.play();
        } else {
          this.$refs.carousel.pause();
        }
        this.isPaused = !this.isPaused;
      },
    }    
  }
</script> 

<style lang="scss">
@import '../../../assets/sass/utilities/_variables.scss';
@import '../../../assets/sass/utilities/_mixins.scss';

.carousel-block {
  position: relative;
}

.carousel {
  position: relative;
  padding: 0;
  margin: 0 auto;
}

.slick-arrow {
  position: absolute;
  top: 50%;
  width: 30px;
  height: 20px;
  z-index: 100;
  outline: none;
  border: none;
  text-indent: -9999em;
  transform: translateY(-50%);

  &:focus {
    border-color: $red;
  }
}

.slick-next {
  background: url('~@/assets/images/svg/icon-carousel-next.svg') no-repeat transparent center center;
  right: 0;
}

.slick-prev {
  background: url('~@/assets/images/svg/icon-carousel-prev.svg') no-repeat transparent center center;
  left: 0;
}

.carousel .carousel__button {
  margin-top: 2rem;
}

.carousel .slick-dots {
  position: absolute;
  bottom: 18px;
  left: 0;
  right: 0;
  text-align: center;

  li {
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    cursor: pointer;
    text-indent: -9999px;
    border-radius: 50%;
    margin: 0 1rem; 

    &.slick-active {
      cursor: default;
    }
  }

  li button {
    border: 0;
    background: transparent;
    display: block;
    outline: none;
    line-height: 0;
    font-size: 0;
    color: transparent;
    padding: 5px;
    cursor: pointer;
    border-radius: 50%;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      content: '\2022';
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: darken($grey-light, 20);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    &:hover,
    &:focus {
      outline: none;

      &:before {
        background-color: $red;
      }
    }
  }

  li.slick-active button:before {
    background-color: $white;
  }

  li.slick-active button:focus {
    &:before {
      border: 1px solid $red;
    }
  }
}

.carousel__prev,
.carousel__next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  cursor: pointer;
  text-align: center;
  z-index: 100;
  background: transparent;
  outline: none;
  color: transparent;
  font-size: 0;
  border: 1px solid $grey-light;

  &:focus {
    border: 1px solid $red;
  }
}

.carousel-play-btn {
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 15px;
  border: none;
  outline: none;
  text-indent: -9999em;
  overflow: hidden;
  background-color: $white;
  background-image: url('~@/assets/images/svg/icon-pause.svg');
  background-repeat: no-repeat;
  background-position: center center;
  right: 15px;
  border: 2px solid $black;

  &:focus {
    border: 1px solid $red;
  }
}

.carousel-play-btn.is-paused {
  background-image: url('~@/assets/images/svg/icon-play.svg');
}

</style>
