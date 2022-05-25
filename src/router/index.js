import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../beat-club/pages/home-view.vue";
import UserProfile from "../beat-club/components/song-card/song-card-list.component.vue";
import SongList from "../beat-club/pages/song-list.component.vue";
import SignIn from "../beat-club/pages/sign-in.component.vue";
import SingUp from "../beat-club/pages/sign-up.component.vue";
import test from "../beat-club/pages/test.component.vue";
import Test from "../beat-club/pages/test-sign-in.vue";
import Trending from "../beat-club/pages/trending.component.vue";
import Recommended from "../beat-club/pages/recommended.component.vue";

import { getAuth } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/profile",
      name: "UserProfile",
      component: UserProfile,
    },
    {
      path: "/songs",
      name: "SongList",
      component: SongList,
      meta: { requiresAuth: true },
    },
    {
      path: "/sign-in",
      name: "SignIn",
      component: SignIn,
    },
    {
      path: "/sign-up",
      name: "SingUp",
      component: SingUp,
    },
    {
      path: "/test",
      name: "test",
      component: test,
    },
    {
      path: "/test-sign-in",
      name: "test-sign-in",
      component: Test,
    },
    {
      path: "/trending",
      name: "Trending",
      component: Trending,
    },
    {
      path: "/recommended",
      name: "Recommended-component",
      component: Recommended,
    },
  ],
});
router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const user = auth.currentUser;

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = user;
  console.log("isauthenticated", isAuthenticated);
  if (requiresAuth && !isAuthenticated) {
    next("/sign-in");
  } else {
    next();
  }
});

export default router;
