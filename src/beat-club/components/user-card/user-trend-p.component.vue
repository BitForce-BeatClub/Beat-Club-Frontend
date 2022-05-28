<script>
export default {
  name: "user-trend-p",
  props: {
    users: Object,
  },
};
</script>

<template>
  <div class="cardBg">
    <div class="flex my-1">
      {{ users.trends }}
    </div>
    <div style="color: #f5cb5c !important">
      <h5>{{ users.result }}</h5>
    </div>
  </div>
</template>

<style scoped></style>
