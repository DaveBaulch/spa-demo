<template>

  <div class="home">

    <div class="container">
      <h1>Text</h1>
    </div>

    <AppText :block="item" />   

  </div>

</template>

<script>
import AppText from "@/components/blocks/AppText.vue";

export default {
  name: "Text",
  components: {
    AppText
  },
  data () {
    return {
      item: {      
        "type": "AppText",
        "content": {
          "text": "<h2>H2 heading</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href=\"http://www.bbc.co.uk\">Sed ultrices</a> iaculis ex, non consectetur orci ullamcorper et. Nullam eget velit feugiat, <em>sagittis sem sollicitudin</em>, <strong>laoreet magna</strong>. Sed sed nibh suscipit, sodales felis non, malesuada nisi. Nunc feugiat mi eget enim dignissim, ut vestibulum risus fringilla. Sed maximus commodo tincidunt. Nunc dignissim orci neque, sed pretium massa viverra ac. Sed a metus consectetur, rutrum arcu at, lacinia urna.</p><h3>H3 heading</h3><p>Vestibulum dignissim suscipit velit, et congue massa hendrerit eu. Suspendisse feugiat auctor imperdiet. Praesent finibus, nisl quis dictum volutpat, nulla nulla suscipit leo, vitae tincidunt erat augue pretium sapien. Ut nec turpis tempus elit tincidunt volutpat non a nisl. Nullam vitae mauris odio. Nam ac ante nec ex lacinia porta. In hac habitasse platea dictumst. Maecenas a est ligula. Duis lobortis, justo sed pulvinar molestie, velit libero efficitur lorem, a vestibulum mauris orci sed erat. Sed tristique neque lorem, et lobortis leo viverra porta. Aliquam eu sodales est, quis euismod risus. Morbi magna risus, consectetur sit amet scelerisque nec, dictum ac est.</p>"
        } 
      }
    }
  }  
};
</script>

<style scoped lang="scss">

</style>
