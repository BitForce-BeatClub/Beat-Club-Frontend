import { createRouter, createWebHistory } from "vue-router";
import creatorHub from "../beat-club/pages/creator-hub.component.vue";
import HomeView from "../beat-club/pages/home-view.vue";
import SongList from "../beat-club/components/creator-hub/manage-tracks.component.vue";
import SignIn from "../beat-club/pages/sign-in.component.vue";
import SingUp from "../beat-club/pages/sign-up.component.vue";
import test from "../beat-club/pages/test.component.vue";
import Trending from "../beat-club/pages/trending.component.vue";
import Recommended from "../beat-club/pages/recommended.component.vue";

import Settings from "../beat-club/pages/account-settings.component.vue";
import UserProfile from "../beat-club/pages/user-profile-component.vue";

import LogOut from "../beat-club/components/log-out.component.vue";

import ProfileSettings from "../beat-club/components/account-settings/profile-settings.component.vue";
import CredentialSettings from "../beat-club/components/account-settings/credential-settings.component.vue";
import SubscriptionSettings from "../beat-club/components/account-settings/subscription-settings.component.vue";
import userViewComponent from "../beat-club/pages/user-view.component.vue";

import songt from "../beat-club/components/audio-player/audio-player.component.vue";

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
      path: "/profile",
      name: "UserProfile",
      component: UserProfile,
    },
    // {
    //   path: "/user/:userId",
    //   name: "User",
    //   component: User,
    // },
    {
      path: "/log-out",
      name: "LogOut",
      component: LogOut,
    },

    {
      path: "/settings",
      name: "Settings",
      component: Settings,
      children: [
        {
          path: "/userInfo",
          name: "ProfileSettings",
          component: ProfileSettings,
        },
        {
          path: "/credentials",
          name: "CredentialSettings",
          component: CredentialSettings,
        },
        {
          path: "/subscriptions",
          name: "SubscriptionSettings",
          component: SubscriptionSettings,
        },
      ],
    },
    {
      path: "/creator-hub",
      name: "creator-hub",
      component: creatorHub,
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
    {
      path: "/user/:userId",
      name: "user-view",
      component: userViewComponent,
    },
    {
      path: "/songt/",
      name: "songt",
      component: songt,
    },

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
