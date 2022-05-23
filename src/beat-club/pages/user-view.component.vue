<template>
  <div class="containers">
    <h1 align="left">Spotlight</h1>
    <song-card-list></song-card-list>

  </div>

  <div class="containers">
    <producer-card-list></producer-card-list>
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

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
.containers {
  width: 100%;
  background: #0e1315;
}
.background {
  background: #0e1315;
}

.slogan span {
  font-family: "Bebas Neue", cursive;
  font-size: 50px;
}

.slogan span:nth-child(1),
.slogan span:nth-child(3) {
  color: white;
}
.slogan span:nth-child(2) {
  color: #e5383b;
}

.container {
  height: auto;
  /*background: url("../../assets/background.png");*/
}
img {
  width: 100%;
}
</style>