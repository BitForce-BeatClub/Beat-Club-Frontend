<template>
  <div class="login" >
    <h1 class="title"><img src="../../assets/logo.svg" alt="logo" /></h1>
    <h1 class="title">Sign up to Cotinue</h1>
    <form action class="form">
      <label class="form-label" for="#email">Create a BeatClub account & start collaborating!</label>
      <input  class="form-input" type="email" id="email" required placeholder="Sing Up with Email">

      <h1></h1>
      <p>-------------------------------or------------------------------</p>
      <input class="form-submit2" type="submit" value="Sign Up With Google">
      <h1></h1>
      <p>Already have an account?<p-btn @click.prevent="login" block color="primary"><router-link to="/sign-in-" class="text-warning" >
        Sign in
      </router-link></p-btn> </p>
    </form>
  </div>
</template>



<script>
export default {
  name: "sign-up",
};
</script>

<style lang="scss" scoped>

.login {
  padding: 7rem;
  background: black;

}
.login img {
  width: 30%;
  justify-content: center;
}
.title {
  text-align: center;
  color: yellow;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  min-width: 350px;
  max-width: 200%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 2rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: #3c3f41;
  background-image: none;
  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}
.form-submit {
  background: #1a29b1;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
.form-submit2 {
  background: #53c8d5;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
</style>
