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
    <div style="color: #f5cb5c !important">
      {{ users.nickName }}
    </div>
  </div>
</template>

<style scoped></style>
