<template>
  <div class="container">
    <div class="menu-options">
      <div class="settings">
        <h2>Account Settings</h2>
      </div>
      <div class="options-container">
        <div class="options">
          <ul class="list" style="list-style: none;">
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
              <a href="subscription" class="link">
                <span>Subscription</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="edit-info">
     
      <div class="edit-credential-information">
       <div class="column credential-information">
           <div class="email">
               <span>E-mail</span> <br>
               <div class="row">
                   <div class="email-row">
                       <span>U201718169@upc.edu.pe</span>
                   </div>
                   <div>
                       U201718169@upc.edu.pe
                        <a>change e-mail address</a>
                   </div>
                   
               </div>
           </div>
       </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
body {
  background-color: #0b090a;
}

.container {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: ". .";
  top: 30px;
}

h1,
h2,
h3,
h4,
h5,
a,
p,
span {
  color: white;
}

.menu-options h2 {
  text-align: center;
  align-content: center;
}

.menu-options {
  margin: auto;
}

.edit-info {
  margin-left: 10px;
  justify-content: center;
}

.options {
  background-color: #161a1d;
  /* width: 70%; */
  min-width: 50%;
  height: 8rem;
}

.options-container {
  align-items: center;
}

.item {
  top: 15px;
  margin-top: 10px;
}

.settings h1 {
  font-weight: 600;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding */
.row {
  margin: 0 0px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}



.edit-credential-information{
    width: 100%;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }


  
}





ul {
    padding: 0 20px;
    
}
</style>

