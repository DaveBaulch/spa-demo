<template>

  <div class="home">

    <div class="container">
      <h1>Accordion</h1>

      <div class="row">
        <div class="accordion-wrapper">
          <dl class="accordion" role="presentation">
            <accordion-item
              v-for="item in content"
              :multiple="multiple"
              :item="item"
              :groupId="groupId"
              :key="item.id">
            </accordion-item>
          </dl>
        </div>  
      </div>

    </div>

  </div>

</template>

<script>
// @ is an alias to /src
import AccordionItem from '@/views/AccordionItem';

export default {
  name: "Accordion",
  components: { 
    AccordionItem
  },  
  data () {
    return {
      groupId: 'theID',
      content: [
        {
          "id": 1,
          "active": true,
          "title": "Accordion heading 1",
          "details": "<p>Accordion 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia purus sed porta imperdiet. Nulla placerat sit amet libero eget rhoncus. Aliquam sed ornare leo, aliquam feugiat enim.</p>"
        },
        {
          "id": 2,
          "active": false,
          "title": "Accordion heading 2",
          "details": "<p>Accordion 2. Suspendisse ac ipsum erat. Morbi dapibus dolor ac tortor dapibus, ut mollis felis elementum. Donec eget magna placerat ligula lobortis iaculis.</p>"
        },
        {
          "id": 3,
          "active": false,
          "title": "Accordion heading 3",
          "details": "<p>Accordion 2. Sed vehicula augue sed ex tristique, ac blandit turpis mollis. Quisque venenatis arcu at felis euismod, quis aliquet risus vehicula.</p>"
        }
      ]
    }
  },  
  props: {
    multiple: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
@import '../assets/sass/utilities/_variables.scss';
@import '../assets/sass/utilities/_mixins.scss';

.accordion {
  padding: 0;
}

.row {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;  
}

.accordion-wrapper {
  grid-column: 1 / 13;  

  @include breakpoint(md) {
    grid-column: 2 / 11;
  }

  @include breakpoint(lg) {
    grid-column: 3 / 10;
  }  
}
</style>
