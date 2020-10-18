<template>
    <div class="footer-wrapper" v-if="blockData">

      <footer class="footer" id="footer" role="contentinfo">

        <div class="container">

          <div class="row">

            <div class="footer__col footer__col--1">

              <div class="footer__sub1">
                <h2>{{ blockData.col1Title1 }}</h2>

                <nav aria-label="Contact items">

                  <ul class="footer-nav">

                    <li class="footer-nav__item">
                      <img src="@/assets/images/svg/icon-phone.svg" class="footer-nav__item-icon" />
                      <a :href="'tel:' + blockData.col1Phone" class="footer-nav__link">{{ blockData.col1Phone }}</a>
                    </li>

                    <li class="footer-nav__item">
                      <img src="@/assets/images/svg/icon-mail.svg" class="footer-nav__item-icon" />
                      <a :href="'mailto:' + blockData.col1EmailAddress" class="footer-nav__link">{{ blockData.col1EmailText }}</a>
                    </li>

                  </ul>

                </nav>

              </div>

              <div class="footer__sub2">
              <h3>{{ blockData.col1Title2 }}</h3>
                <div v-html="blockData.col1Address"></div>
              </div>

            </div>

            <div class="footer__col footer__col--2">

              <h2>{{ blockData.col2Title }}</h2>
              <nav>
                <ol class="footer-nav">
                  <li class="footer-nav__item" v-for="item in blockData.col2Items" :key="item.id">
                    <router-link :to="item.link" class="footer-nav__link">{{item.title}}</router-link>
                  </li>
                </ol>
              </nav>

            </div>

            <div class="footer__col footer__col--3">

              <h2>{{ blockData.col3Title }}</h2>
              <nav>
                <ol class="footer-nav">
                  <li class="footer-nav__item" v-for="item in blockData.col3Items" :key="item.id">
                    <router-link :to="item.link" class="footer-nav__link">{{item.title}}</router-link>
                  </li>
                </ol>
              </nav>

            </div>

            <div class="footer__col footer__col--4">

              <h2>{{ blockData.col4Title }}</h2>
              <nav>
                <ol class="footer-nav">
                  <li class="footer-nav__item" v-for="item in blockData.col4Items" :key="item.id">
                    <router-link :to="item.link" class="footer-nav__link">{{item.title}}</router-link>
                  </li>
                </ol>
              </nav>

            </div>            

          </div>

          <div class="row">

            <TheSocialSharing :socialLinks="blockData.socialLinks" />

          </div>

        </div>

      
        <div class="container">

          <div class="row">

            <div class="copyright-notice-wrapper">
              <p class="copyright-notice" v-html="blockData.copyright"></p>
            </div>

            <div class="footer-links-wrapper">

              <ul class="footer-links">
                <li class="footer-links__item" v-for="item in blockData.footerItems" :key="item.id"><router-link :to="item.link" class="footer-links__link">{{ item.title }}</router-link></li>
              </ul>

            </div>

          </div>

        </div>      
      
      </footer>

    </div>
</template>

<script>
import TheSocialSharing from '@/components/global/TheSocialSharing.vue';

export default {
  name: "TheFooter",
  components: {
    TheSocialSharing
  },
  props: {
    blockData: Object
  }
};
</script>


<style scoped lang="scss">
@import '../../assets/sass/utilities/_variables.scss';
@import '../../assets/sass/utilities/_mixins.scss';

.row {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;  
}

.footer-wrapper {
  background-color: $grey-lighter;
}

.footer {
  margin: 3rem auto 0  auto;
  padding: 3rem 0;
}

.footer__col {
  margin: 0;
}

.footer__col--1 {
  grid-column: 1 / 13;

  @include breakpoint(md) {
    grid-column: 1 / 7;
  }

  @include breakpoint(lg) {
    grid-column: 1 / 4;
  }
}

.footer__col--2 {
  grid-column: 1 / 13;

  @include breakpoint(md) {
    grid-column: 7 / 13;
  }  

  @include breakpoint(lg) {
    grid-column: 4 / 7;
  }
}

.footer__col--3 {
  grid-column: 1 / 13;

  @include breakpoint(md) {
    grid-column: 1 / 7;
  }  

  @include breakpoint(lg) {
    grid-column: 7 / 10;
  }
}

.footer__col--4 {
  grid-column: 1 / 13;

  @include breakpoint(md) {
    grid-column: 7 / 13;
  }  

  @include breakpoint(lg) {
    grid-column: 10 / 13;
  }
}

.footer__sub1 {
  margin: 0 0 3rem 0;
}

.footer__sub2 {
  margin: 0 0 1rem 0;
}

// footer nav lists
.footer-nav {
  margin: 2rem auto 0 auto;
  list-style: none;
}

.footer-nav__item {
  margin: 0 0 1rem 0;
  padding: 0;
  display: flex;
}

.footer-nav__item-icon {
  margin-right: 1rem;
}

.footer-nav__link {
  text-decoration: none;

  &:hover,
  &:focus {
    color: $color-link-hover;
    text-decoration: underline;
  }
}

// .footer-nav--2col {

//   @include breakpoint(md) {
//     column-count: 2;
//   }

//   .footer-nav__item {
//     @include breakpoint(md) {
//       padding: 0 2rem 0 0;
//     }
//   }

//   .footer-nav__item-icon {
//     margin-right: 1rem;
//   }
// }

.copyright-notice-wrapper{
  grid-column: 1 / 13;

  @include breakpoint(lg) {
    grid-column: 1 / 4;
  }
}


.footer-links-wrapper {
  grid-column: 1 / 13;

  @include breakpoint(lg) {
    grid-column: 4 / 13;
  }
}

.footer-links {
  margin: 0 auto;
  list-style: none;

  @include breakpoint(lg) {
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
  }
}

.footer-links__item {
  margin: 0 1rem 1rem 1rem;
}

.footer-links__link {
  display: block;
  text-decoration: none;

  &:hover,
  &:focus {
    color: $color-link-hover;
    text-decoration: underline;
  }
}

</style>