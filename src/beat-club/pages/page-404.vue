<template>
  <div class="grid">
    <img
      src="https://cdn.dribbble.com/users/329098/screenshots/8725891/media/4a602969990214837743da1bcadd7cc0.jpg"
    />
  </div>
  <pv-button class="p-button-warning pos" @click="goHome">Go Back</pv-button>
</template>

<script>
export default {
  name: "page-404",
  methods: {
    goHome() {
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
.pos {
  position: absolute;
  top: 66%;
  left: 64%;
  width: 18rem;
  transform: translate(-40%, -20%);
  font-family: "Bebas Neue", cursive;
  font-size: 3rem;
  display: flex;
  justify-content: center;
}
</style>
