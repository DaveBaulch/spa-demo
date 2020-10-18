<template>
  <article aria-label="Example showing an article title over two lines here" class="card js-card">
    <p class="card__badge" :class="itemData.tagClass" v-if="itemData.tag">{{ itemData.tag }}</p>
    <div class="card__img-holder">
      <picture>
        <source :srcset="itemData.imgSrc" media="(min-width: 1024px)">
        <source :srcset="itemData.imgSrc" media="(min-width: 768px)">
        <source :srcset="itemData.imgSrc" media="(min-width: 576px)">
        <source :srcset="itemData.imgSrc" media="(min-width: 0px)">
        <img :src="itemData.imgSrc" alt="" class="card__img img-responsive">
      </picture>
    </div>
    <div class="card__content">
      <div class="card__inner">
        <h3 class="card__title"><a :href="itemData.link">{{ itemData.title }}</a></h3>
        <p class="card__date">{{ itemData.date }}</p>
        <div class="card__description" v-html="itemData.text"></div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'cardLinkCard',
  props: {
    itemData: {}
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/sass/utilities/_variables.scss';
@import '../../assets/sass/utilities/_mixins.scss';

.card {
  background-color: $white;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  min-height: 1px;
  position: relative;
  width: auto;
  padding: 0;
  margin: 0 1rem;
  border: 1px solid $grey-light;
}

.card__title {
  margin: 1rem 0 0 0;
  font-size: 2rem;

  a {
    text-decoration: none;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}

.card__date {
  margin: 0;
  font-size: 1.4rem;
}

.card__content {
  padding: 2rem 1.5rem 2rem 1.5rem;
}

.card__badge {
  left: 0;
  padding: 0.6rem 1rem;
  position: absolute;
  top: 0;
  background-color: $grey-light;
  margin: 0;

  &.news {
    background-color: $yellow;
  }

  &.work {
    background-color: $blue;
    color: $white;
  }
  
    &.case-study {
    background-color: $red;
    color: $white;
  }
}

</style>