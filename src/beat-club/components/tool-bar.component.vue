<template>
  <pv-toolbar>
    <template #start>
      <div style="margin-inline: 1rem" class="logo flex align-items-center">
        <router-link to="/">
          <img src="../../assets/logo.svg" alt="logo" />
        </router-link>
        <div class="card">
          <div class="p-fluid">
            <div class="p-float-label p-input-icon-right">
              <i class="pi pi-search" style="color: white" />
              <pv-input-text
                type="text"
                placeholder=""
                required="true"
                autocomplete="off"
              ></pv-input-text>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #end>
      <div class="card" v-if="!isConnected" style="">
        <div class="flex flex-row card-container">
          <div class="flex align-items-center justify-content-center">
            <router-link
              v-for="item in items"
              :to="item.to"
              custom
              v-slot="{ navigate, href }"
              :key="item.label"
            >
              <pv-button
                class="p-button-text mx-3"
                :href="href"
                @click="navigate"
              >
                {{ item.label }}
              </pv-button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="card" v-else>
        <div class="flex flex-row card-container">
          <div class="flex align-items-center justify-content-center mx-2">
            <pv-split-button
              class="p-button-text p-button-secondary"
              :model="menuUser"
            >
              <pv-button @click="toUserProfile">
                <div class="custom-font">
                  <span class="">Hi</span>
                  {{ this.userData.nickName }}
                  <span class="">!</span>
                </div>
              </pv-button>
            </pv-split-button>
          </div>
          <div class="flex align-items-center ">
            <router-link
              v-for="item in access"
              :to="item.to"
              custom
              v-slot="{ navigate, href }"
              :key="item.label"
            >
              <pv-button
                type="button"
                class="p-button-text mx-2"
                :icon="item.icon"
                :href="href"
                :label="item.label"
                @click="navigate"
              />
            </router-link>
          </div>
        </div>
      </div>
    </template>
  </pv-toolbar>
  <div>
    <pv-toolbar
      style="
        background-color: #161a1d !important;
        justify-content: start !important;
      "
    >
      <template #start>
        <div class="flex-column">
          <router-link
            v-for="item in items2"
            :to="item.to"
            custom
            v-slot="{ navigate, href }"
            :key="item.label"
          >
            <pv-button
              class="p-button-text text-white"
              :href="href"
              @click="navigate"
              >{{ item.label }}</pv-button
            >
          </router-link>
        </div>
      </template>
    </pv-toolbar>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { UsersApiServices } from "../services/users/users-api.services";
export default {
  name: "tool-bar",
  data() {
    return {
      auth: getAuth(),
      userData: [],
      loggedIn: false,
      isConnected: false,
      items: [
        { label: "Sign In", to: "/sign-in", icon: "pi pi-sign-in" },
        { label: "Sign Up", to: "/sign-up", icon: "pi pi-users" },
      ],
      items2: [
        { label: "Trending", to: "/trending" },
        { label: "Recommended", to: "/recommended" },
        // { label: "Following", to: "/user-view" },
      ],

      access: [
        { label: "Messages", to: "/messages", icon: "pi pi-comment" },
        { label: "Creator Hub", to: "/creator-hub", icon: "pi pi-sliders-v" },
      ],
      menuUser: [
        { label: "Profile", to: "/userInfo", icon: "pi pi-user" },
        { label: "Credentials", to: "/credentials", icon: "pi pi-id-card" },
        {
          label: "Subscription",
          to: "/subscriptions",
          icon: "pi pi-credit-card",
        },
        {
          label: "Log Out",
          to: "/log-out",
          icon: "pi pi-sign-out",
        },
        // { label: "Log Out", , icon: "pi pi-sign-out" },
      ],
    };
  },
  methods: {
    logOut() {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.isConnected = false;
        this.$router.replace({ name: "HomeView" });
      });
    },
    toUserProfile() {
      this.$router.replace({ name: "UserProfile" });
    },
  },
  created() {
    this.usersService = new UsersApiServices();
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      try {
        this.usersService.getUsersById(user.uid).then((response) => {
          this.userData = response.data;
        });
        this.isConnected = true;

        this.userData.nickname = auth.currentUser.displayName;
      } catch (err) {
        this.isConnected = false;
      }
    });
  },
  watch: {
    userData() {
      return this.userData.nickname;
    },
  },
  computed: {
    now() {
      return this.nickname;
    },
    label() {
      return this.loggedIn ? this.access : this.items;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap");
.p-toolbar {
  background: #212429;
  display: flex;
  justify-content: space-between;
  border-radius: 0;
}
.p-button-text {
  font-family: "Comfortaa", cursive;
  font-size: 1em;
  color: #e5e3e3 !important;
}
.logo img {
  padding-right: 1vmax;
}
.custom-font {
  font-family: "Comfortaa", cursive;
  font-size: 1em;
}
.p-splitbutton {
  font-family: "Comfortaa", cursive;
  background: transparent;
  display: inline-flex;
  position: relative;
  align-items: center;
}
span {
  font-family: "Comfortaa", cursive;
  color: #e5e3e3 !important;
}
.card {
  margin-left: 1rem;
  min-width: 450px;
  .p-inputtext {
    background: #343843 !important;
    color: white;
    font-family: "Comfortaa", cursive;
  }
}
</style>
