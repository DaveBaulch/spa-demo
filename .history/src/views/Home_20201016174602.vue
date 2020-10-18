<template>

  <div class="home">

    <div class="container">
      <h1>Elements</h1>

      <h2>Components</h2>
        <ul class="component-list">
          <li class="component-list__item"><router-link to="/hero" class="component-list__link">Hero</router-link></li>
          <li class="component-list__item"><router-link to="/carousel" class="component-list__link">Carousel</router-link></li>
          <li class="component-list__item"><router-link to="/sectors" class="component-list__link">Sectors</router-link></li>
          <li class="component-list__item"><router-link to="/cards" class="component-list__link">Cards</router-link></li>
          <li class="component-list__item"><router-link to="/cta" class="component-list__link">CTA</router-link></li>
          <li class="component-list__item"><router-link to="/quote" class="component-list__link">Quote</router-link></li>
          <li class="component-list__item"><router-link to="/text" class="component-list__link">Text</router-link></li>
          <li class="component-list__item"><router-link to="/accordion" class="component-list__link">Accordion</router-link></li>
        </ul>  

      <h2>Pages</h2>
        <ul class="component-list">
          <li class="component-list__item"><router-link to="/test-page" class="component-list__link">Test Page - static blocks</router-link> (hard-coded)</li>
          <li class="component-list__item"><router-link to="/test-page2" class="component-list__link">Test Page - conditional blocks</router-link> (based on API page data) </li>
        </ul>      
    </div>
    
  </div>

</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {
  }
};
</script>

<style scoped lang="scss">
@import '../assets/sass/utilities/_variables.scss';
@import '../assets/sass/utilities/_mixins.scss';

.component-list {
  list-style: none;
  padding: 0;
  margin: 0;

}

.component-list__item {
  margin: 1rem 0 0 0;
  padding: 0;
}

.component-list__link {
  margin: 0;

  a {
    text-decoration: none;
    color: $white;    
  }
}


</style>
