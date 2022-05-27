<template>
  <div class="card">
    <div class="flex flex-column card-container">
      <div class="flex align-items-center justify-content-center">
        <div class="form">
          <div class="cardBack">
            <form @submit.prevent="" class="align-items-center">
              <div class="field">
                <router-link
                  style="text-decoration: none; color: inherit"
                  :to="{ name: 'profile' }"
                >
                  <h5>Profile</h5>
                </router-link>
              </div>
              <div class="field">
                <router-link
                  style="text-decoration: none; color: inherit"
                  :to="{ name: 'credentials' }"
                >
                  <h5>Credential</h5>
                </router-link>
              </div>
              <div class="field">
                <router-link
                  style="text-decoration: none; color: inherit"
                  :to="{ name: 'subscriptions' }"
                >
                  <h5>Subscription</h5>
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu-card",
  data() {
    return {
      items: [
        { label: "Profile", to: "/sign-in", icon: "pi pi-users" },
        { label: "Credential", to: "/sign-in", icon: "pi pi-users" },
        { label: "Subscription", to: "/sign-in", icon: "pi pi-sign-in" },
      ],
    };
  },
};
</script>

<style scoped>
router-link {
  text-decoration: none !important;
  color: inherit !important;
}

.cardBack {
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
