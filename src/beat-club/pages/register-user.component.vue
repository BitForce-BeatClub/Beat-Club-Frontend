<template>
  <div class="card">
    <pv-toolbar class="mb-4">
      <template #start>
        <pv-button
          label="New"
          icon="pi pi-plus"
          class="p-button-success mr-2"
          @click="openNew"
        />
      </template>
    </pv-toolbar>
    <pv-dialog
      v-model:visible="songDialog"
      :style="{ width: '450px' }"
      header="Song Information"
      :modal="true"
      class="p-fluid"
    >
      <br />
      <div class="field">
        <span class="p-float-label">
          <pv-input-text
            type="text"
            id="nickName"
            v-model.trim="user.nickName"
            required="true"
            autofocus
            :class="{ 'p-invalid': !user.nickName }"
          />
          <label for="title">firstName</label>
          <small class="p-error" v-if="!user.nickName"
            >Title is required.</small
          >
        </span>
      </div>

      <template #footer>
        <pv-button
          label="Cancel"
          icon="pi pi-times"
          class="p-button-text"
          @click="hideDialog"
        />
        <pv-button
          label="Save"
          icon="pi pi-check"
          class="p-button-text"
          @click="saveChallenge"
        />
      </template>
    </pv-dialog>
  </div>
</template>

<script>
import { BeatClubApiServices } from "../services/beat-club-api.services.js";

export default {
  name: "register-user.component",
  data() {
    return {
      users: [],
      user: {},
      usersService: null,
    };
  },
  created() {
    this.usersService = new BeatClubApiServices();
    this.usersService.getUsers().then((response) => {
      this.users = response.data;
    });
  },
  methods: {
    getStorableUser(displayableUser) {
      return {
        id: displayableUser.id,
        uid: displayableUser.uid,
        nickName: displayableUser.nickName,
      };
    },
    openNew() {
      this.user = {};
      this.submitted = false;
      this.songDialog = true;
    },
    hideDialog() {
      this.songDialog = false;
      this.submitted = false;
    },
    saveChallenge() {
      if (this.user.nickName.trim()) {
        this.user.id = 0;
        this.user = this.getStorableUser(this.user);
        this.usersService.createUsers(this.user).then((response) => {
          this.users.push(this.user);
          this.$toast.add({
            severity: "success",
            summary: "Successful",
            detail: "Challenge Created",
            life: 3000,
          });
          console.log(response);
        });
      }
      this.songDialog = false;
      this.user = {};
    },
  },
};
</script>
