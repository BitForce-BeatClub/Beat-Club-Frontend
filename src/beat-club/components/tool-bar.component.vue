<template>
  <pv-toolbar style="background-color: #0d1b29; border-radius: 0">
    <template #start>
      <div class="logo">
        <router-link to="/">
          <img src="../../assets/logo.svg" alt="logo" />
        </router-link>
      </div>
      <span class="p-input-icon-right">
        <i class="pi pi-search" />
        <InputText type="text" placeholder="Search" />
      </span>
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
            <div v-if="!open">
              {{ item.label }}
            </div>
            <div v-else>
              {{ item.label }}
            </div>
          </pv-button>
        </router-link>
        <router-link
          v-for="item in logged"
          :to="item.to"
          custom
          v-slot="{ navigate, href }"
          :key="item.label"
        >
          <pv-button
            class="p-button-text text-white font-poppins"
            :href="href"
            @click="navigate"
            @click.once="open = !open"
          >
            <div v-if="!open">
              {{ item.label }}
            </div>
            <div v-else>
              {{ item.label }}
            </div>
          </pv-button>
        </router-link>
      </div>
    </template>
  </pv-toolbar>
</template>

<script>
export default {
  name: "tool-bar",
  data() {
    return {
      drawer: false,
      items: [
        { label: "Sign In", to: "/" },
        { label: "Sign Up", to: "/profile" },
        { label: "Start Collaborating", to: "/songs" },
      ],
      access: [
        { label: "Hi user", to: "/" },
        { label: "Message", to: "/profile" },
        { label: "Creator Hub", to: "/" },
        { label: "Upload", to: "/songs" },
      ],
      login: [{ label: "Log in", to: "/profile" }],
      logout: [{ label: "Log out", to: "/" }],
      text: "Accede a tu cuenta",
      open: false,
      username: "",
    };
  },
  watch: {
    // open(value) {
    //   if (value) {
    //     this.text = "Cierra sesión";
    //   } else {
    //     this.text = "Accede a tu cuenta";
    //     this.username = "";
    //   }
    // },
  },
  computed: {
    label() {
      return this.open ? this.access : this.items;
    },
    logged() {
      return this.open ? this.logout : this.login;
    },
    styles() {
      return this.open ? ["open"] : ["closed"];
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rajdhani&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.logo img {
  width: 100%;
}
.font-poppins {
  font-family: "Poppins", sans-serif;
}
</style>
