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
            >{{ item.label }}</pv-button
          >
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
        { label: "Sign In", to: "/sign-in-" },
        { label: "Sign Up", to: "/sign-up-" },
        { label: "Start Collaborating", to: "/songs" },
      ],
    };
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
