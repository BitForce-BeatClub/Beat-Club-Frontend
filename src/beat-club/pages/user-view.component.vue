<template>
  <div class="background">
    <div>
      
    </div>
    <div class="container">
      <div class="box2"></div>
      <div class="box">
        <h1 align="left">Spotlight</h1>
        <song-card-list></song-card-list>
      </div>
      <div class="box2"></div>
      <div class="box">
        <h1 align="left">Top Producer</h1>
        <producer-card-list></producer-card-list>
      </div>
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

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
img {
  width: 100%;
}
body{
  height: 100%;
  background-color: #000000;

}
.background{
  background-color: #0e1315;
}
.container{
  height: 100%;
  width:100%;
  grid-gap: 10px;
  display:grid;
  grid-template-columns: 2% 70% 2% 24% 2%;

}

.box2{

}
.box{
  background-color: #161A1D;
  padding:15px;
  text-align: center;
  border-radius: 10px;
}
</style>