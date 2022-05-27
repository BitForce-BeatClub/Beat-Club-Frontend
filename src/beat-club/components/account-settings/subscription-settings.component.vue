<template>
  <membership-card-list-component></membership-card-list-component>
</template>

<script>
import membershipCardListComponent from "../memberships-card/membership-card-list.component.vue";

export default {
  name: "subscription-settings",
  components: {
    membershipCardListComponent,
  },
};
</script>

<style scoped></style>
