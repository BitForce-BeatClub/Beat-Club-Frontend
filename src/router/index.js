import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../beat-club/pages/home-view.vue";

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
      path: "/test",
      name: "test",
      component: () => import("../beat-club/pages/test.component.vue"),
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
