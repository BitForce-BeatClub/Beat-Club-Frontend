<template>
  <h1 class="my-4" style="margin-left: 4rem">Spotlight</h1>
  <div class="grid">
    <div class="" style="width: 70%">
      <song-card-list></song-card-list>
    </div>
    <div class="grid" style="width: 14rem">
      <h2 class="my-3">Top Producers</h2>
      <producer-card-list></producer-card-list>
    </div>
  </div>
</template>

<script>
import SongCardList from "../components/song-card/song-card-list.component.vue";
import ProducerCardList from "../components/producer-card/producer-card-list.component.vue";
export default {
  name: "user-view",
  components: { ProducerCardList, SongCardList },
};
</script>

<style lang="scss" scoped></style>
