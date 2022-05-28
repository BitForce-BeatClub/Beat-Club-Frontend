<template>
  <router-view></router-view>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
export default {
  name: "log-out",
  mounted() {
    this.logOut();
  },
  methods: {
    logOut() {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.$router.replace({ name: "HomeView" });
        // Sign-out successful.
      });
    },
  },
};
</script>

<style scoped></style>
