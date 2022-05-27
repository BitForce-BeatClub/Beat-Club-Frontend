<script>
export default {
  name: "user-trend-p",
  props: {
    users: Object,
  },
};
</script>

<template>
  <br>
<h2> {{ users.trends }}</h2><h2> {{ users.result }}</h2>

</template>

<style scoped>
.card {
  background-color: #161d21;
  color: white;
}
</style>
