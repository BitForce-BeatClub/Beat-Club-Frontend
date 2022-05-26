<template>
  <pv-toolbar>
    <template #start>
      <div class="logo">
        <router-link to="/">
          <img src="../../assets/logo.svg" alt="logo" />
        </router-link>
      </div>
    </template>
    <template #end>
      <div class="card" v-if="!isConnected">
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
                class="p-button-text text-white font-poppins"
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
        <div class="mx-5 flex flex-row card-container">
          <div class="flex align-items-center justify-content-center">
            <pv-split-button @click="logOut" class="p-button-text p-button-warning" :model="dropDown">
              <div class="flex align-items-center justify-content-center">
                Hi
                <span class="mx-1" style="color: #f5cb5c">
                  {{ this.userData.nickName }}
                </span>
                !
              </div>
            </pv-split-button>
          </div>
          <div class="flex align-items-center justify-content-center">
            <router-link
              v-for="item in access"
              :to="item.to"
              custom
              v-slot="{ navigate, href }"
              :key="item.label"
            >
              <pv-button
                type="button"
                class="p-button-text"
                :icon="item.icon"
                :href="href"
                :label="item.label"
                @click="navigate"
              />
            </router-link>
          </div>
          <div class="flex align-items-center justify-content-center">
            <pv-button
              @click="logOut()"
              icon="pi pi-sign-out"
              style="background: #e5383b"
              class="p-button"
              type="submit"
              label="Logout"
            />
          </div>
        </div>
      </div>
    </template>
  </pv-toolbar>
</template>

<script>
import { ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { BeatClubApiServices } from "../services/beat-club-api.services";
export default {
  name: "tool-bar",
  data() {
    return {
      auth: getAuth(),
      userData: [],
      dropDown: [
        { label: "Profile", to: "/profile", icon: "pi pi-user" },
        { label: "Credentials", to: "/credentials", icon: "pi pi-id-card" },
        {
          label: "Subscription",
          to: "/subscription",
          icon: "pi pi-credit-card",
        },
        // { label: "Log Out", , icon: "pi pi-sign-out" },
      ],
      items: [
        { label: "Explore", to: "/sign-in", icon: "pi pi-users" },
        { label: "Creator", to: "/sign-in", icon: "pi pi-users" },
        { label: "Sign In", to: "/sign-in", icon: "pi pi-sign-in" },
        { label: "Sign Up", to: "/sign-up", icon: "pi pi-users" },
      ],
      access: [
        { label: "Message", to: "/profile", icon: "pi pi-comment" },
        { label: "Creator Hub", to: "/", icon: "pi pi-sliders-v" },
        { label: "Upload", to: "/songs", icon: "pi pi-cloud-upload" },
      ],
      loggedIn: false,
      isConnected: false,
    };
  },
  methods: {
    logOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.isConnected = false;
          // console.log(auth);
          this.$router.replace({ name: "HomeView" });
          // Sign-out successful.
        })
        .catch((error) => {
          // console.log(error);
          // An error happened.
        });
    },
  },
  created() {
    this.usersService = new BeatClubApiServices();
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      try {
        this.usersService.getUsersById(user.uid).then((response) => {
          this.userData = response.data;
          // console.log("user", this.userData);
        });
        this.isConnected = true;
        this.userData.nickname = auth.currentUser.displayName;
        // console.log("usuario conectado", user.uid);
        console.log("Info: ", this.userData.nickname);
      } catch (err) {
        this.isConnected = false;
        console.log("usuario no esta conectado", err);
      }
    });
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
  border-radius: 0.4rem;
  background: #0d1b29;
  //background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
  //background-blend-mode: multiply;
  //background-image: linear-gradient(to left, #2b5876 0%, #4e4376 100%);
  //background-image: linear-gradient(to bottom, #29323c 0%, #485563 100%);
}
.p-button-text {
  font-family: "Comfortaa", cursive;
  font-size: 1em;
  color: white !important;
}
.logo img {
  width: 100%;
  margin-left: 3rem;
}

.p-splitbutton {
  font-family: "Comfortaa", cursive;
  background: transparent;
  display: inline-flex;
  position: relative;
  align-items: center;
}
span.mx-1 {
  display: flex;
  align-items: center;
}
//.font-poppins {
//  font-family: "Poppins", sans-serif;
//}
</style>
