<template>
  <div class="flex">
    <div class="cardBg shadow-8">
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
  border-color: #212429;
  font-family: "Comfortaa", cursive;
  font-size: 18px;
  width: 18rem;
  height: 10rem;
  border-radius: 3%;
  padding-left: 10%;
  display: flex;
  align-items: center;
}
</style>
