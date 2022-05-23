<template>
  <div class="container-profile">

    <div class="edit-info">

      <div class="row">
        <div class="column">
          <div class="card-profile">
            <div class="first">
              <br>
              <img  src="../../../assets/user-profile/Vector2.png">
              <br>
              <h2>Adrian Esqueiros</h2>
              <br>
              <button class="button-profile"><img  src="../../../assets/user-profile/Vector3.png"> Edit Profile</button>
              <br><br>
              <h3>STATS</h3><br>
              <h3>Followers</h3>
              <h3>Plays</h3>
              <h3>PlaysTracks</h3>


            </div>

          </div>

        </div>

        <div class="column">
          <div class="card-profile">
            <div class="second">
              <img clas="img" src="../../../assets/user-profile/Vector4.png">
              <h1>No content Available</h1>
              <h1>There is not yet enough content</h1>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>

<style>
body{
  background-color: #0B090A;
}

.container-profile {
  display: grid;
  grid-template-columns: 1fr ;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". .";
  top: 120px;
}

h1{
  color: white;
  fonts:Poppins;
  font-size:20px;

}



.menu-options h2{
  text-align: center;
}



.settings h1{
  font-weight: 600;
}

.column {
  float: left;
  width: 50%;
  padding: 0 10px;
}

.row {margin: 0px 0px;}

.row:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (max-width: 1000px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
  .card-profile{
    height: 600px;
  }
}


.card-profile{
  border-radius: 10px ;
  padding: 16px;
  text-align: center;
  height:500px;

}

.second{
  top:20%;
  left:-6%;
}

.second img{
  left:50px;
  bottom:30px;
}

.first{
  background-color: #161A1D;
  width: 30rem;
  height: 35rem;
  margin-left: 25%;
}

h2{
  top:4%;
}
h3{
  left:70px;
 text-align:left;
}
.first img{
  top:2%;
}
.button-profile {
  background-color: #333533; /* Green */
  border: none;
  color: #ffffff;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  fonts:Poppins;
  font-size:25px;
  font-weight: bold;
  margin-top: 30px;
  border-radius: 10px ;


}
</style>