<template>
<div class="header-container">
  <div class="container">
    <header class="header">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <div class="logo">
        <router-link to="/" class="logo__link">Site logo</router-link>
      </div>
      <div class="navigation-items">
        <ul class="nav-list">
          <router-link to="test-page" class="nav-list__item">Test page 1</router-link> |
        </ul>
      </div>
    </header>
  </div>
</div>
</template>

<script>
import TheSideNavToggle from "@/components/global/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/sass/utilities/_variables.scss';
@import '../../assets/sass/utilities/_mixins.scss';

.header-container {
  width: 100%;
  min-height: 60px;
  background-color: $black;
  position: fixed;
  z-index: 100;

  @include breakpoint(md) {
    position: relative;
  }
}

.header {
  width: 100%;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $black;
  box-sizing: border-box;
  padding: 0;
}

.logo {
  margin: 0;
  padding: 0;
  border: 1px solid $white;
}

.logo__link {
  margin: 0;
  padding: 1rem;
  text-decoration: none;
  color: $white;
  display: block;
}

.navigation-items {
  display: none;

  @include breakpoint(md) {
    display: block;
  }
}

// .nav-list {
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   display: flex;
// }

// .nav-list__item {
//   margin: 0 10px;
// }

// .nav-item a {
//   text-decoration: none;
//   color: $white;
// }

</style>
