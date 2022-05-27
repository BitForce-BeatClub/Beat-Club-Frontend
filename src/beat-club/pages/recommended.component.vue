<template>


    <body>
    <br>
    <br>
    <div class="container2">
      <div class="box2"></div>
      <div class="box2"><p>YOUR FEED</p></div>
    </div>
  <br>
    <div class="container">
      <div class="box2"></div>
      <div class="box">
        <user-trend></user-trend>
      </div>
      <div class="box2"></div>
      <div class="box">
        <song-card-list></song-card-list>
      </div>
      <div class="box2"></div>
      <div class="box">
        <user-follow></user-follow>

      </div>
      <div class="box2"></div>
    </div>
</body>


</template>

<script>


import SongCardList from "../components/song-card/song-card-list.component.vue";
import userTrend from "../components/user-card/user-trend.component.vue";
import UserFollow from "../components/user-card/user-follow.component.vue"
export default {

  name: "Recommended-component",
  components: { SongCardList,userTrend,UserFollow},
  data(){
    return{}
  }
};
</script>

<style scoped>
.container{
  height: 100%;
  width:100%;
  grid-gap: 10px;
  display:grid;
  grid-template-columns: 2% 20% 2% 50% 2% 20% 2%;

}
.container2{
  height: 100%;
  width:100%;
  grid-gap: 10px;
  display:grid;
  grid-template-columns: 2% 98%;
}
body{
  height: 100%;
  background-color: #000000;

}
.box{
  background-color: #161A1D;
  padding:10px;
  text-align: center;
  border-radius: 10px;

}
.box2{
  background-color: #000000;
  padding:10px;
  text-align: center;
  border-radius: 10px;

}
p{
  color: white;
  text-align: left;
}
small{
  color: white;
  text-align:right;
}
h2{
  color:white;
}
.card-horizontal {
  display: flex;
  flex: 1 1 auto;
}
img{
  width:100px;
  height: 100px;
}
</style>
