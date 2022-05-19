<template>
  <div class="background">
    <div class="container slogan">
      <span> the </span>
      <span> world’s #1 </span>
      <span>
        platform for <br />
        music production
      </span>
      <img src="../../assets/background.png" alt="banner" />
    </div>
    <song-card-list></song-card-list>
    <user-card-list></user-card-list>
  </div>
</template>

<script>
import SongCardList from "../components/song-card/song-card-list.component.vue";
import UserCardList from "../components/user-card/user-card-list.component.vue";
export default {
  name: "home-view",
  components: { UserCardList, SongCardList },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
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
