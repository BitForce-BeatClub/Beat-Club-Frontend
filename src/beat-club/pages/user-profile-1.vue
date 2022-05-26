<template>
  <div class="container">
    <div class="menu-options">
      <div class="settings">
        <h2>Account Settings</h2>
      </div>
      <div class="options-container">
        <div class="options">
          <ul class="list" style="list-style: none">
            <li class="item">
              <a href="http://localhost:3000/user-profile-1" class="link">
                <span>Profile</span>
              </a>
            </li>
            <li class="item">
              <a href="credentials" class="link">
                <span>Credentials</span>
              </a>
            </li>
            <li class="item">
              <a href="subscription" class="link">
                <span>Subscription</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="edit-info">
      <div class="row profile-pictore-row">
        <div class="upload-image">
          <img src="../../assets/img/user.png" class="profile-picture" />
          <div class="container-profile-picture">
            <span
              >Upload New Image
              <img src="../../assets/img/down-sign.png" alt=""
            /></span>
          </div>
        </div>
      </div>

      <div class="edit-profile-information">
        <form>
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label for="dname">Display Name</label>
          <input
            type="text"
            id="dname"
            name="displayname"
            placeholder="Your display name.."
          />

          <label for="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="City, State (e.g. San Fransisco, CA)"
          />

          <input type="submit" value="Save changes" />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<!--<style>-->
<!--body {-->
<!--  background-color: #0b090a;-->
<!--}-->

<!--.container {-->
<!--  display: grid;-->
<!--  grid-template-columns: 1fr 4fr;-->
<!--  grid-template-rows: 1fr;-->
<!--  gap: 0px 0px;-->
<!--  grid-template-areas: ". .";-->
<!--  top: 30px;-->
<!--}-->

<!--h1,-->
<!--h2,-->
<!--h3,-->
<!--h4,-->
<!--h5,-->
<!--a,-->
<!--p,-->
<!--span {-->
<!--  color: white;-->
<!--}-->

<!--.menu-options h2 {-->
<!--  text-align: center;-->
<!--  align-content: center;-->
<!--}-->

<!--.menu-options {-->
<!--  margin: auto;-->
<!--}-->

<!--.edit-info {-->
<!--  margin-left: 10px;-->
<!--  width: 90%;-->
<!--  justify-content: center;-->
<!--}-->

<!--.options {-->
<!--  background-color: #161a1d;-->
<!--  /* width: 70%; */-->
<!--  min-width: 50%;-->
<!--  height: 8rem;-->
<!--}-->

<!--.options-container {-->
<!--  align-items: center;-->
<!--}-->

<!--.item {-->
<!--  top: 15px;-->
<!--  margin-top: 10px;-->
<!--}-->

<!--.settings h1 {-->
<!--  font-weight: 600;-->
<!--}-->

<!--/* Float four columns side by side */-->
<!--.column {-->
<!--  float: left;-->
<!--  width: 25%;-->
<!--  padding: 0 10px;-->
<!--}-->

<!--/* Remove extra left and right margins, due to padding */-->
<!--.row {-->
<!--  margin: 0 0px;-->
<!--}-->

<!--/* Clear floats after the columns */-->
<!--.row:after {-->
<!--  content: "";-->
<!--  display: table;-->
<!--  clear: both;-->
<!--}-->

<!--/* Responsive columns */-->
<!--@media screen and (max-width: 600px) {-->
<!--  .column {-->
<!--    width: 100%;-->
<!--    display: block;-->
<!--    margin-bottom: 20px;-->
<!--  }-->

<!--  .edit-info .profile-picture {-->
<!--    width: 4rem;-->
<!--  }-->

<!--  .container-profile-picture {-->
<!--    background-color: #005ff8;-->
<!--    border-radius: 4px;-->
<!--    color: white;-->
<!--    padding: 5px 20px;-->
<!--    text-align: center;-->
<!--    text-decoration: none;-->
<!--    display: inline-block;-->
<!--    font-size: 8px;-->
<!--    margin: 4px 2px;-->
<!--    cursor: pointer;-->
<!--    margin-left: 15px;-->
<!--    top: -1.6rem;-->
<!--  }-->

<!--  .upload-image img {-->
<!--    margin-bottom: 20px;-->
<!--  }-->
<!--}-->

<!--/* Style the counter cards */-->
<!--.card {-->
<!--  box-shadow: 0 4px 8px 0 rgba(161, 156, 156, 0.2);-->
<!--  padding: 16px;-->
<!--  text-align: center;-->
<!--  background-color: #242423;-->
<!--}-->

<!--.upload-image {-->
<!--  align-items: center;-->
<!--  text-align: center;-->
<!--}-->

<!--.upload-image img {-->
<!--  align-items: center;-->
<!--}-->

<!--.profile-picture {-->
<!--  width: 4rem;-->
<!--}-->

<!--.container-profile-picture {-->
<!--  background-color: #005ff8;-->
<!--  border-radius: 4px;-->
<!--  color: white;-->
<!--  padding: 5px 10px;-->
<!--  text-align: center;-->
<!--  text-decoration: none;-->
<!--  display: inline-block;-->
<!--  font-size: 16px;-->
<!--  margin: 4px 2px;-->
<!--  cursor: pointer;-->
<!--  margin-left: 15px;-->
<!--  top: -1.6rem;-->
<!--}-->

<!--/* FOR */-->

<!--input[type="text"],-->
<!--select {-->
<!--  width: 100%;-->
<!--  padding: 12px 20px;-->
<!--  margin: 8px 0;-->
<!--  display: inline-block;-->
<!--  border: 1px solid #424242;-->
<!--  border-radius: 4px;-->
<!--  box-sizing: border-box;-->
<!--  background-color: #242423;-->
<!--}-->

<!--input[type="text"]::placeholder {-->
<!--  color: white;-->
<!--  opacity: 50%;-->
<!--}-->

<!--label {-->
<!--  color: white;-->
<!--}-->

<!--input[type="submit"] {-->
<!--  width: 100%;-->
<!--  background-color: #005ff8;-->
<!--  color: white;-->
<!--  padding: 14px 20px;-->
<!--  margin: 8px 0;-->
<!--  border: none;-->
<!--  border-radius: 4px;-->
<!--  cursor: pointer;-->
<!--}-->

<!--input[type="submit"]:hover {-->
<!--  background-color: #4089ff;-->
<!--}-->

<!--ul {-->
<!--  padding: 0 20px;-->
<!--}-->
<!--</style>-->
