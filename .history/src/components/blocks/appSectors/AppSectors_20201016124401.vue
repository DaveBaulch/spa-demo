<template>

  <section class="sectors-panel" v-if="blockData">

    <div class="container">

      <h2 class="sectors-panel__title">{{ blockData.title }}</h2>

      <div class="row">

        <AppSectorsItem v-for="item in blockData.data" :key="item.id" :itemData="item" />

      </div>

    </div>

  </section>

</template>
 
<script>
  import axios from 'axios';
  import lazyloadPicturefillBackground from 'lazyload-picturefill-background';
  import AppSectorsItem from '@/components/blocks/appSectors/AppSectorsItem';

  export default {
    name: 'AppSectors',
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
      AppSectorsItem
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
        .get('data/sectors-data.json')
        .then((response) => {
          this.blockData = response.data;
        })
        .catch((error) => {
          console.log(error);
        });            
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
