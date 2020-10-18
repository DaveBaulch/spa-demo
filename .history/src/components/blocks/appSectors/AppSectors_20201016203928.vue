<template>

  <section class="sectors-panel">

    <div class="container">

      <h2 class="sectors-panel__title">{{ block.content.title }}</h2>

      <div class="row">

        <AppSectorsItem v-for="item in block.content.data" :key="item.id" :itemData="item" />

      </div>

    </div>

  </section>

</template>
 
<script>
  import lazyloadPicturefillBackground from 'lazyload-picturefill-background';
  import AppSectorsItem from '@/components/blocks/appSectors/AppSectorsItem';

  export default {
    name: 'AppSectors',
    props: {
      block: Object
    },
    components: { 
      AppSectorsItem
    },     
    created() {
      this.$nextTick(() => {
        new lazyloadPicturefillBackground(); 
      })          
    },   
  }
</script> 

<style scoped lang="scss">
@import '../../../assets/sass/utilities/_variables.scss';
@import '../../../assets/sass/utilities/_mixins.scss';

.row {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;  

  @include breakpoint(sm) {
    grid-template-columns: 1fr 1fr;
  }  

  @include breakpoint(lg) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }
}

.sectors-panel__title {
  text-align: center;
}

</style>
