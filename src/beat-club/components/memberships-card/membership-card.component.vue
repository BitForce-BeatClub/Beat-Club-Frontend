<template>
  <pv-card class="membershipCard">
    <template #header>
      <img
        alt="membership"
        :src="membershipData.urlToImage"
        style="height: 18rem"
      />
    </template>
    <template #title>
      <div class="flex justify-content-between">
        <section>
          {{ membershipData.title }}
        </section>
        {{ membershipData.price }}
      </div>
    </template>
    <template #subtitle>
      <div style="color: white !important">
        {{ membershipData.feature }}
      </div>
    </template>
    <template #content>
      <p>
        {{ membershipData.description }}
      </p>
    </template>
    <template #footer>

    <div class="btnPos">
        <pv-button
          icon="pi pi-times"
          label="Subscribe"
          class="p-button-secondary"
        ></pv-button>
      </div>
    </template>
  </pv-card>
</template>

<script>
export default {
  name: "membership-card.component",
  props: {
    membershipData: Object,
  },
};
</script>

<style scoped>
.membershipCard {
  background-color: #212429;
  color: white;
}
.btnPos {
  display: flex;
  justify-content: center;
}
p {
  white-space: pre-line;
  display: flex;
  justify-content: center;
}
</style>
