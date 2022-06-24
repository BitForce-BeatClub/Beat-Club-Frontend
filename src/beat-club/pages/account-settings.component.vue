<template>
  <div class="flex" style="padding-top: 5vh">
    <div style="margin-left: 3rem">
      <menu-card></menu-card>
    </div>
    <div style="margin-left: 10vw">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import menuCard from "../components/account-settings/menu-settings-list.component.vue";
export default {
  name: "account-settings",
  components: {
    menuCard,
  },
};
</script>

<style scoped></style>
