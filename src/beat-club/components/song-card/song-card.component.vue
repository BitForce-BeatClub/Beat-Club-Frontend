<template>
  <pv-card class="songCard">
    <template #header>
      <img alt="user header" :src="songData.urlToImage" />
    </template>
    <template #title>
      <div class="title">
        {{ songData.title }}
      </div>
    </template>
    <template #content>
      <p>{{ songData.description }}</p>
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
