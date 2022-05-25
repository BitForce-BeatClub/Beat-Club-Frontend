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
        <h2>Trending Searches</h2>
        <br>
        <p>#LunyTunes </p>
        <p>Sponsored</p>
        <br>
        <p>#Tainy </p>
        <p>Sponsored</p>
        <br>
        <p>#Rock </p>
        <p>30.2k results</p>
        <br>
        <p>#Trap </p>
        <p>2M results</p>
        <br>
        <p>#Urban </p>
        <p>22K results</p>
        <br>
        <p>#lo-fi beat </p>
        <p>30k results</p>
        <br>
        <p>#skere </p>
        <p>10k results</p>
        <br>
        <p>#asap </p>
        <p>3k results</p>
      </div>
      <div class="box2"></div>
      <div class="box">     <song-card-list></song-card-list>
      </div>
      <div class="box2"></div>
      <div class="box">
        <h2>Who to follow?</h2>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 mt-3">
              <div class="card">
                <div class="card-horizontal">
                  <div class="img-square-wrapper">
                    <img class="" src="https://yt3.ggpht.com/ytc/AKedOLTz2_RRKmPM69Ib8ZgXVM21L5eSnZCmw5QrhukbIg=s900-c-k-c0x00ffffff-no-rj" alt="Card image cap">
                  </div>
                  <div class="card-body">
                    <p class="card-text" >LunyTunes</p>
                    <p class="card-text" >8.4K followers</p>
                  </div>
                </div>

              </div>
              <div class="card">
                <div class="card-horizontal">
                  <div class="img-square-wrapper">
                    <img class="" src="https://yt3.ggpht.com/ytc/AKedOLTz2_RRKmPM69Ib8ZgXVM21L5eSnZCmw5QrhukbIg=s900-c-k-c0x00ffffff-no-rj" alt="Card image cap">
                  </div>
                  <div class="card-body">
                    <p class="card-text" >Tainy</p>
                    <p class="card-text" >5K followers</p>
                  </div>
                </div>

              </div>
              <div class="card">
                <div class="card-horizontal">
                  <div class="img-square-wrapper">
                    <img class="" src="https://yt3.ggpht.com/ytc/AKedOLTz2_RRKmPM69Ib8ZgXVM21L5eSnZCmw5QrhukbIg=s900-c-k-c0x00ffffff-no-rj" alt="Card image cap">
                  </div>
                  <div class="card-body">
                    <p class="card-text" >Bizarrap</p>
                    <p class="card-text" >3M followers</p>
                  </div>
                </div>

              </div>
              <div class="card">
                <div class="card-horizontal">
                  <div class="img-square-wrapper">
                    <img class="" src="https://yt3.ggpht.com/ytc/AKedOLTz2_RRKmPM69Ib8ZgXVM21L5eSnZCmw5QrhukbIg=s900-c-k-c0x00ffffff-no-rj" alt="Card image cap">
                  </div>
                  <div class="card-body">
                    <p class="card-text" >Ovy On The Drums</p>
                    <p class="card-text" >3M followers</p>
                  </div>
                </div>

              </div>
              <div class="card">
                <div class="card-horizontal">
                  <div class="img-square-wrapper">
                    <img class="" src="https://yt3.ggpht.com/ytc/AKedOLTz2_RRKmPM69Ib8ZgXVM21L5eSnZCmw5QrhukbIg=s900-c-k-c0x00ffffff-no-rj" alt="Card image cap">
                  </div>
                  <div class="card-body">
                    <p class="card-text" >El Chombo</p>
                    <p class="card-text" >6M followers</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box2"></div>
    </div>
</body>


</template>

<script>

import UserCardProducer from "../components/user-card/user-card-producer.component.vue";
import SongCardList from "../components/song-card/song-card-list.component.vue";

export default {

  name: "Recommended-component",
  components: { UserCardProducer, SongCardList},
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
