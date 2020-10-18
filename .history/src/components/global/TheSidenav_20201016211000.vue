<template>
<div class="sidenav-container">
  <div
    v-if="show"
    class="sidenav-backdrop"
    @click="$emit('close')"></div>
  <transition name="slide-side">
    <div
      v-if="show"
      class="sidenav">
      <h2>Components</h2>
      <ul
        class="nav-list"
        @click="$emit('close')">
        <li class="nav-item"><router-link to="/hero" class="component-list__link">Hero</router-link></li>
        <li class="nav-item"><router-link to="/carousel" class="component-list__link">Carousel</router-link></li>
        <li class="nav-item"><router-link to="/sectors" class="component-list__link">Sectors</router-link></li>
        <li class="nav-item"><router-link to="/cards" class="component-list__link">Cards</router-link></li>
        <li class="nav-item"><router-link to="/cta" class="component-list__link">CTA</router-link></li>
        <li class="nav-item"><router-link to="/quote" class="component-list__link">Quote</router-link></li>
        <li class="nav-item"><router-link to="/text" class="component-list__link">Text</router-link></li>
        <li class="nav-item"><router-link to="/accordion" class="component-list__link">Accordion</router-link></li>
      </ul>

      <h2>Pages</h2>
      <ul
        class="nav-list"
        @click="$emit('close')">
        <li class="nav-item"><router-link to="test-page">Test page</router-link></li>
      </ul>      
    </div>
  </transition>
</div>
</template>

<script>
export default {
  name: "TheSidenav",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

.sidenav {
  height: 100%;
  width: 300px;
  background-color: white;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 20px 0;
}

.nav-item a {
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
}

.nav-item a:hover,
.nav-item a:active {
  color: red;
}
</style>
