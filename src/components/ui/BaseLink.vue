<template>

  <router-link v-if="type==='router-link'" :to="to"  class="button">{{ text }}</router-link>
  <a v-else-if="type ==='link'" :href="to"  class="button">{{ text }}</a>

</template>

<script>
export default {
  name: 'BaseLink',
  props: {
    type: {
      type: String,
      default: 'router-link'
    },    
    text: {
      type: String,
      default: '',
      required: true
    },
    to: {
      type: String,
      default: '',
      required: true
    }
  } 
}
</script>

<style scoped lang="scss">
@import '../../assets/sass/utilities/_variables.scss';

.button {
  display: inline-block;
  vertical-align: middle;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  border: 1px solid $grey-dark;
  margin: 0;
  padding: 1.3rem 1.5rem;
  background-color: $white;
  color: $grey-dark;
  font-weight: 700;
  text-align: center;

  &,
  &:hover {
    text-decoration: none;
  }

  /* only remove default outline if alternative focus styling is provided
  *  2.4.7 Focus Visible: Any keyboard operable user interface has a mode of operation where
  *  the keyboard focus indicator is visible. (Level AA)
  */

  &:active,
  &:focus {
    outline: 0;
    border: $focus-outline;
  }
}  
</style>
