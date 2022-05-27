<template>
  <div class="card" style="padding-top: 5vh">
    <div class="flex flex-row gap-8">
      <div class="flex flex-justify-content-center" style="">
        <menu-card></menu-card>
      </div>
      <div>
        <router-view></router-view>
      </div>
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

<style scoped>
.flex {
  justify-content: center;
}
</style>
