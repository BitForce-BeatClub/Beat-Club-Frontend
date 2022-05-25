<template>
  <pv-toolbar style="background-color: #0d1b29; border-radius: 0">
    <template #start>
      <div class="logo">
        <router-link to="/">
          <img src="../../assets/logo.svg" alt="logo" />
        </router-link>
      </div>
    </template>
    <template #end>
      <div class="flex-column">
        <router-link
          v-for="item in label"
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
            <span v-if="!loggedIn">
              {{ item.label }}
            </span>
            <span v-else>
              {{ item.label }}
              <pv-button @click="logOut">Sign out</pv-button>
            </span>
          </pv-button>
        </router-link>
      </div>
    </template>
  </pv-toolbar>
  <pv-toolbar style="background-color: #20252a; border-radius: 0">

    <template #start>
      <div class="flex-column">
        <router-link v-for="item in items2" :to="item.to" custom v-slot="{ navigate, href }" :key="item.label">
          <pv-button class="p-button-text  text-white" :href="href" @click="navigate">{{ item.label }}</pv-button>
        </router-link>
      </div>
    </template>
  </pv-toolbar>
</template>

<script>
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

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
      items2: [
        { label: "Recommended", to: "/recommended" },
        { label: "Trending", to: "/trending" },
        { label: "Following", to: "/trending" },
      ],

      access: [
        { label: "Hi user", to: "/" },
        { label: "Message", to: "/profile" },
        { label: "Creator Hub", to: "/" },
        { label: "Upload", to: "/songs" },

      ],
      loggedIn: false,
    };
  },

  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("usuario conectado", uid);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // ...
      } else {
        console.log("usuario no esta conectado");
        // User is signed out
        // ...
      }
    });
  },
  computed: {
    label() {
      return this.open ? this.access : this.items;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.logo img {
  width: 100%;
}
.font-poppins {
  font-family: "Poppins", sans-serif;

}
.font-poppins2{
  font-family: "Poppins", sans-serif;

  height:5px;
}

</style>
