<template>
  <div>
    <pv-card class="songCard">
      <template #header>
        <img alt="user header" :src="songData.urlToImage" />
      </template>
      <template #content>
        {{ songData.title }}
        <p>{{ songData.description }}</p>
      </template>
    </pv-card>
  </div>
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
.songCard {
  background-color: #161d21;
  color: white;
}
</style>
