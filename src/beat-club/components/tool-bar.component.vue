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
      <div v-if="!isConnected">
        <div class="flex-column">
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
      <div v-else>
        <div class="grid">
          <router-link
            v-for="item in access"
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
          <form @submit.prevent="logOut">
            <pv-button class="btn-width" type="submit" label="Logout" />
          </form>
        </div>
      </div>
    </template>
  </pv-toolbar>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
  name: "tool-bar",
  data() {
    return {
      drawer: false,
      items: [
        { label: "Sign In", to: "/sign-in" },
        { label: "Sign Up", to: "/sign-up" },
        { label: "Start Collaborating", to: "/songs" },
      ],
      access: [
        { label: "Hi user", to: "/" },
        { label: "Message", to: "/profile" },
        { label: "Creator Hub", to: "/" },
        { label: "Upload", to: "/songs" },
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
          console.log(auth);
          this.$router.replace({ name: "HomeView" });
          // Sign-out successful.
        })
        .catch((error) => {
          console.log(error);
          // An error happened.
        });
    },
  },

  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.isConnected = false;
      try {
        const uid = user.uid;
        console.log("usuario conectado", uid);
        this.isConnected = true;
      } catch (err) {
        console.log("usuario no esta conectado", err);
      }
    });
  },
  computed: {
    label() {
      return this.loggedIn ? this.access : this.items;
    },
  },
};
</script>

<style lang="scss" scoped>
.p-toolbar {
  background-color: #0d1b29;
  border-radius: 0;
}
.logo img {
  width: 100%;
}
.font-poppins {
  font-family: "Poppins", sans-serif;
}
</style>
