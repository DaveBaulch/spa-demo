import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home Page - Example SPA'
    }
  },
  {
    path: "/hero",
    name: "Hero",
    meta: {
      title: 'Hero component'
    },   
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Hero.vue")
  },
  {
    path: "/carousel",
    name: "Carousel",
    meta: {
      title: 'Carousel component'
    },   
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Carousel.vue")
  },
  {
    path: "/sectors",
    name: "Sectors",
    meta: {
      title: 'Sectors component'
    },   
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Sectors.vue")
  },
  {
    path: "/cards",
    name: "CardList",
    meta: {
      title: 'Card List component'
    },   
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CardList.vue")
  },
  {
    path: "/cta",
    name: "CTA",
    meta: {
      title: 'CTA component'
    },   
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CTA.vue")
  },
  {
    path: "/quote",
    name: "Quote",
    meta: {
      title: 'Quote component'
    },   
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Quote.vue")
  },
  {
    path: "/text",
    name: "Text",
    meta: {
      title: 'Text component'
    },   
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Text.vue")
  },
  {
    path: "/accordion",
    name: "Accordion",
    meta: {
      title: 'Accordion'
    },   
    component: () =>
      import(/* webpackChunkName: "testPage" */ "../views/Accordion.vue")
  },
  {
    path: "/test-page",
    name: "Test Page",
    meta: {
      title: 'Test Page'
    },   
    component: () =>
      import(/* webpackChunkName: "testPage" */ "../views/TestPage.vue")
  },
  {
    path: "/test-page2",
    name: "Test Page 2",
    meta: {
      title: 'Test Page 2'
    },   
    component: () =>
      import(/* webpackChunkName: "testPage" */ "../views/TestPage2.vue")
  },
];

const router = new VueRouter({
  routes
});

router.afterEach((to) => {
  Vue.nextTick( () => {
    document.title = to.meta.title ? to.meta.title : 'default title';
  });
});

export default router;
