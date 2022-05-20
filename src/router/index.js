import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../beat-club/pages/home.vue";
import UserProfile from "../beat-club/components/song-card/song-card-list.component.vue";
import SongList from "../beat-club/pages/song-list.component.vue";
import SignIn from "../beat-club/pages/sign-in.component.vue";
import SingUp from "../beat-club/pages/sign-up.component.vue";

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
  ],
});

export default router;
