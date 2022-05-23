<template>
  <div class="container">
    <div class="menu-options">
      <div class="settings">
        <h2>Account Settings</h2>
      </div>
      <div class="options">
        <ul class="list">
          <li class="item">
            <a href="profile" class="link">
              <span>Profile</span>
            </a>
          </li>
          <li class="item">
            <a href="credentials" class="link">
              <span>Credentials</span>
            </a>
          </li>
          <li class="item">
            <a href="http://localhost:3000/user-profile-3 " class="link">
              <span>Subscription</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="edit-info">

      <div class="row">
        <div class="column">
          <div class="card">

            <h7> <img src="../../../assets/user-profile/Vector.png">
              Artist Basic $10</h7>
            <ul style="list-style-type: disc ;color:white" >
              <li><h8>Upload unlimited tracks and make posts</h8></li>
              <li><h8>Distribution of published tracks</h8></li>
              <li><h8>Sell the license of your tracks</h8></li>
              <li><h8>Being able to connect with your producers</h8></li>
              <li><h8>And more...</h8></li>

              <br>

            </ul>

            <button class="button">Subscribe</button>
          </div>

          <button class="button1">Manage payment methods</button>
          <button class="button1">...</button>


        </div>

        <div class="column">
          <div class="card">
            <h7> <img src="../../../assets/user-profile/Vector1.png">
              Producer Pro $20</h7>
            <ul style="list-style-type: disc ;color:white" >
              <li><h8>Upload unlimited tracks and make publications</h8></li>
              <li><h8>Connect with artists and collaborate</h8></li>
              <li><h8>Sell the license of your beats</h8></li>
              <li><h8>Use tracks from our producers</h8></li>
              <li><h8>Distribute your tracks</h8></li>
              <li><h8>And more...</h8></li>
            </ul>



            <button class="button">Subscribe</button>
          </div>
        </div>

      </div>s
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

.container {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". .";
  top: 30px;
}

h1,h2,h3,h4,h5,a,p{
  color: white;
  fonts:Poppins;
  font-size:18px;

}

h7{
  color: white;
  fonts:Poppins;
  font-weight: bold;
  font-size:50px;

}
h8{
  color: white;
  fonts:Poppins;
  font-size:20px;

}


.menu-options h2{
  text-align: center;
}

.menu-options{
  margin:auto;
}


.options{
  background-color: #161A1D;
  width: 13rem;
  height: 8rem;
  margin-left: 2rem;
}

.item{
  top: 15px;
  margin-top: 10px;
}

.settings h1{
  font-weight: 600;
}

.column {
  float: left;
  width: 50%;
  padding: 0 10px;
}

.row {margin: 0 -5px;}

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
  .card{
    height: 500px;
  }
}

.container{
  margin-top:4%;
  margin-right:4%;

}

.card{
  border-radius: 10px ;
  box-shadow: 0 4px 8px 0 rgba(161, 156, 156, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #242423;

}


.button {
  background-color: #ffffff; /* Green */
  border: none;
  color: #000000;
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
.button1 {
  background-color: #2b2b2b; /* Green */
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