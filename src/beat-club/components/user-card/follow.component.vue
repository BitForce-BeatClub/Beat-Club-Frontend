<template>

  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mt-3">
        <div class="card">
          <div class="card-horizontal">
            <div class="img-square-wrapper">
              <img alt="user header" :src="users.urlToImage" />
            </div>
            <div class="card-body">
              <p class="card-text" >{{ users.nickName }}</p>
              <p class="card-text" >{{users.follow}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "follow-component",
  props: {
    users: Object,
  },
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
