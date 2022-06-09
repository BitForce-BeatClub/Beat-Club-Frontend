<template>
  <pv-card class="songCard">
    <template #header>
      <img alt="user header" :src="songData.cover" />
    </template>
    <template #title>
      <div class="title">
        {{ songData.title }}
      </div>
    </template>
    <template #content>
      <p>{{ songData.artist }}</p>
    </template>
  </pv-card>
</template>

<script>
export default {
  name: "song-card",
  props: {
    songData: Object,
  },
};
</script>

<style scoped>
.title {
  font-size: 16px !important;
  font-family: Poppins, sans-serif;
}
.songCard {
  background-color: #161d21;
  color: white;
}
</style>
