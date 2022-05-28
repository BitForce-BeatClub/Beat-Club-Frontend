<script>
export default {
  name: "user-trend-p",
  props: {
    users: Object,
  },
};
</script>

<template>
  <div class="flex justify-content-start gap-3">
    <div class="grid">
      {{ users.trends }}
    </div>
    <div class="grid">
      {{ users.result }}
    </div>
  </div>
</template>

<style scoped></style>
