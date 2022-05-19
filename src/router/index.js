import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../beat-club/pages/home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/profile",
      name: "user-profile",
      component: () =>
        import(
          "../beat-club/components/song-card/song-card-list.component.vue"
        ),
    },
    {
      path: "/songs",
      name: "song-list",
      component: () => import("../beat-club/pages/song-list.component.vue"),
    },
    {
      path: "/sign-in-",
      name: "sign-in",
      component: () => import("../beat-club/pages/sign-in.component.vue"),
    },
    {
      path: "/sign-up-",
      name: "sign-up",
      component: () => import("../beat-club/pages/sign-up.component.vue"),
    },
    {
      path: "/sign-up-form-",
      name: "sign-up-form",
      component: () => import("../beat-club/pages/sign-up.component.vue"),
    },
    /* {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },*/
  ],
});

export default router;
