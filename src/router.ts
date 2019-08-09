import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import { ROUTES } from "./types/routes";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: ROUTES.HOME,
      name: "home",
      component: Home
    },
    {
      path: ROUTES.STATS,
      name: "stats",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Stats.vue")
    }
  ]
});
