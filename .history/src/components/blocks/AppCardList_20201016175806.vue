<template>

  <article class="section card-list-block" v-if="blockData">

    <div class="container">

      <div class="card-list">

        <div class="card-list__heading">
          <h2>{{ blockData.title }}</h2>
        </div>

        <ol class="card-list__list">

          <li class="card-list__item" v-for="item in blockData.data" :key="item.id">
            <CardListCard :itemData="item" />
          </li>

        </ol>

      </div>

    </div>

  </article>

</template>

<script>
import axios from 'axios';
import lazyloadPicturefillBackground from 'lazyload-picturefill-background';
import CardListCard from '@/components/ui/CardListCard.vue';

export default {
  name: 'CardList', 
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
    CardListCard
  },
  watch: {
    pageData: function () {
      this.$nextTick(() => {
        new lazyloadPicturefillBackground(); 
      }) 
    }
  },
  created() {
    axios
      .get('data/cards-data.json')
      .then((response) => {
        this.blockData = response.data;
      })
      .catch((error) => {
        console.log(error);
      });            
  },   
  mounted() {
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/sass/utilities/_variables.scss';
@import '../../assets/sass/utilities/_mixins.scss';

.staggered-transition {
    transition: all .5s ease;
    opacity: 1;
}
.staggered-enter, .staggered-leave {
    opacity: 0;
}

.card-list {
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;
}

.card-list__heading {
  text-align: center;
}

.card-list__list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
  list-style-type: none;
}

.card-list__btn {
  margin-bottom: 2rem;
  margin-right: 0;

  @include breakpoint(md) {
    align-self: flex-start;
    margin-bottom: 0;
    position: absolute;
    right: 1.2rem;
    top: 5rem;
  }
}

.card-list__item {
  position: relative;
  width: 100%;
  min-height: 1px;
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0 0;
  padding: 0;

  @include breakpoint(md) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @include breakpoint(lg) {
    flex: 0 0 25%;
    max-width: 25%;
  }
}

</style>
