<template>
  <div>
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
      <pv-data-table
        ref="dt"
        :value="songs"
        v-model:selection="selectedSongs"
        dataKey="id"
        :paginator="true"
        :rows="5"
        :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 15]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} challenges"
        responsiveLayout="scroll"
      >
        <template #header>
          <div
            class="table-header flex flex-column md:flex-row md:justify-content-between"
          >
            <h5 class="mb-2 md:m-0 p-as-md-center text-xl">Manage Songs</h5>
            <span class="p-input-icon-left"
              ><i class="pi pi-search" /><pv-input-text
                v-model="filters['global'].value"
                placeholder="Search..."
              />
            </span>
          </div>
        </template>
        <pv-column
          field="id"
          header="Id"
          :sortable="true"
          style="min-width: 12rem"
        ></pv-column>
        <pv-column
          field="title"
          header="Title"
          :sortable="true"
          style="min-width: 16rem"
        ></pv-column>
        <pv-column
          field="description"
          header="Description"
          :sortable="true"
          style="min-width: 12rem"
        >
        </pv-column>
        <pv-column
          field="urlToImage"
          header="Url To Image"
          :sortable="true"
          style="min-width: 12rem"
        >
        </pv-column>
        <pv-column
          field="userId"
          header="User Id"
          :sortable="true"
          style="min-width: 12rem"
        >
        </pv-column>

        <pv-column :exportable="false" style="min-width: 8rem">
          <template #body="slotProps">
            <pv-button
              icon="pi pi-pencil"
              class="p-button-text p-button-rounded"
              @click="editChallenge(slotProps.data)"
            />
            <pv-button
              icon="pi pi-trash"
              class="p-button-text p-button-rounded"
              @click="confirmDeleteChallenge(slotProps.data)"
            />
          </template>
        </pv-column>
      </pv-data-table>
    </div>
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
            id="title"
            v-model.trim="song.title"
            required="true"
            autofocus
            :class="{ 'p-invalid': submitted && !song.title }"
          />
          <label for="title">Title</label>
          <small class="p-error" v-if="submitted && !song.title"
            >Title is required.</small
          >
        </span>
      </div>
      <div class="field">
        <span class="p-float-label">
          <pv-input-text
            id="description"
            v-model="song.description"
            required="false"
            rows="2"
            cols="2"
          />
          <label for="description">Description</label>
        </span>
      </div>
      <div class="field">
        <span class="p-float-label">
          <pv-input-text
            id="urlToImage"
            v-model="song.urlToImage"
            required="false"
            rows="2"
            cols="2"
          />
          <label for="description">Url To Image</label>
        </span>
      </div>
      <div class="field">
        <span class="p-float-label">
          <pv-input-text
            id="userId"
            v-model="song.userId"
            required="false"
            rows="2"
            cols="2"
          />
          <label for="description">User Id</label>
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
    <pv-dialog
      v-model:visible="deleteSongDialog"
      :style="{ width: '450px' }"
      header="Confirm"
      :modal="true"
    >
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
        <span v-if="song"
          >Are you sure you want to delete <b>{{ song.title }}</b></span
        >
      </div>
      <template #footer>
        <pv-button
          label="No"
          icon="pi pi-times"
          class="p-button-text"
          @click="deleteSongDialog = false"
        />
        <pv-button
          label="Yes"
          icon="pi pi-check"
          class="p-button-text"
          @click="deleteChallenge"
        />
      </template>
    </pv-dialog>
  </div>
</template>

<script>
import { FilterMatchMode } from "primevue/api";
import { BeatClubApiServices } from "../services/beat-club-api.services.js";

export default {
  name: "song-list",
  data() {
    return {
      songs: [],
      songDialog: false,
      deleteSongDialog: false,
      deleteSongsDialog: false,
      song: {},
      selectedSongs: null,
      filters: {},
      submitted: false,
      songsService: null,
    };
  },
  created() {
    this.songsService = new BeatClubApiServices();
    this.songsService.getAll().then((response) => {
      this.songs = response.data;
      this.songs.forEach((challenge) =>
        this.getDisplayableChallenge(challenge)
      );
    });
    this.initFilters();
  },
  methods: {
    getDisplayableChallenge(challenge) {
      // challenge.status = challenge.challengeType
      //   ? this.statuses[0].value
      //   : this.statuses[1].value;
      return challenge;
    },
    getStorableChallenge(displayableChallenge) {
      return {
        id: displayableChallenge.id,
        title: displayableChallenge.title,
        description: displayableChallenge.description,
        urlToImage: displayableChallenge.urlToImage,
        userId: displayableChallenge.userId,
      };
    },
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      };
    },
    findIndexById(id) {
      return this.songs.findIndex((offer) => offer.id === id);
    },
    openNew() {
      this.song = {};
      this.submitted = false;
      this.songDialog = true;
    },
    hideDialog() {
      this.songDialog = false;
      this.submitted = false;
    },
    saveChallenge() {
      this.submitted = true;
      if (this.song.title.trim()) {
        if (this.song.id) {
          this.song = this.getStorableChallenge(this.song);
          this.songsService.update(this.song.id, this.song).then((response) => {
            this.songs[this.findIndexById(response.data.id)] =
              this.getDisplayableChallenge(response.data);
            this.$toast.add({
              severity: "success",
              summary: "Successful",
              detail: "Challenge Updated",
              life: 3000,
            });
            console.log(response);
          });
        } else {
          this.song.id = 0;
          this.song = this.getStorableChallenge(this.song);
          this.songsService.create(this.song).then((response) => {
            this.song = this.getDisplayableChallenge(response.data);
            this.songs.push(this.song);
            this.$toast.add({
              severity: "success",
              summary: "Successful",
              detail: "Challenge Created",
              life: 3000,
            });
            console.log(response);
          });
        }
      }
      this.songDialog = false;
      this.song = {};
    },
    editChallenge(challenge) {
      this.song = { ...challenge };
      this.songDialog = true;
    },
    confirmDeleteChallenge(challenge) {
      this.song = challenge;
      this.deleteSongDialog = true;
    },
    deleteChallenge() {
      this.songsService.delete(this.song.id).then((response) => {
        this.songs = this.songs.filter((t) => t.id !== this.song.id);
        this.deleteSongDialog = false;
        this.song = {};
        this.$toast.add({
          severity: "success",
          summary: "Successful",
          detail: "Challenge Deleted",
          life: 3000,
        });
        console.log(response);
      });
    },
  },
};
</script>

<style scoped></style>
