import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../beat-club/pages/home-view.vue";
import SongList from "../beat-club/pages/song-list.component.vue";
import SignIn from "../beat-club/pages/sign-in.component.vue";
import SingUp from "../beat-club/pages/sign-up.component.vue";
import test from "../beat-club/pages/test.component.vue";
import Test from "../beat-club/pages/test-sign-in.vue";
import register from "../beat-club/pages/register-user.component.vue";
import Profile from "../beat-club/pages/account-settings.component.vue"

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
      path: "/register-user",
      name: "register-user",
      component: register,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    }
  ],
});
router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const user = auth.currentUser;

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  // const isAuthenticated = user;
  // console.log("isAuthenticated", isAuthenticated);
  if ((to.path === "/sign-in" && user) || (to.path === "/sign-up" && user)) {
    next("/");
  }
  if (requiresAuth && !user) {
    next("/sign-in");
  } else {
    next();
  }
});

export default router;
