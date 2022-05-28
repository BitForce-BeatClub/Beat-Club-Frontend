<template>
  <div class="cardBg">
    <div class="align-items-center">
      <div class="field">
        <router-link
          style="text-decoration: none; color: inherit"
          :to="{ name: 'ProfileSettings' }"
        >
          <h5>Profile</h5>
        </router-link>
      </div>
      <div class="field">
        <router-link
          style="text-decoration: none; color: inherit"
          :to="{ name: 'CredentialSettings' }"
        >
          <h5>Credential</h5>
        </router-link>
      </div>
      <div class="field">
        <router-link
          style="text-decoration: none; color: inherit"
          :to="{ name: 'SubscriptionSettings' }"
        >
          <h5>Subscription</h5>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu-card",
  data() {
    return {};
  },
};
</script>

<style scoped>
router-link {
  text-decoration: none !important;
  color: inherit !important;
}

.cardBg {
  background: #212429;
  border-color: white;
  border-width: 1px;
  border-style: solid;
  font-family: "Comfortaa", cursive;
  font-size: 18px;
  width: 16rem;
  height: 10rem;
  border-radius: 3%;
  padding-left: 10%;
  display: flex;
  align-items: center;
}
</style>
