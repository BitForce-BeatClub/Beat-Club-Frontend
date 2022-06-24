<template>
  <div>
    <pv-toast></pv-toast>
    <div style="background: white" class="card">
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
            <span class="p-input-icon-left"
              ><i class="pi pi-search" /><pv-input-text
                v-model="filters['global'].value"
                placeholder="Search..."
              />
            </span>
          </div>
        </template>
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

        <pv-column
          field="title"
          header="Title"
          :sortable="true"
          style="min-width: 8rem"
        />
        <pv-column
          field="artist"
          header="Artist"
          :sortable="true"
          style="min-width: 8rem"
        />
        <pv-column
          field="description"
          header="Description"
          :sortable="true"
          style="min-width: 8rem"
        />
        <pv-column
          field="genre"
          header="Genre"
          :sortable="true"
          style="min-width: 8rem"
        />

        <pv-column
          field="caption"
          header="Caption"
          :sortable="true"
          style="min-width: 8rem"
        />
        <pv-column
          field="privacy"
          header="Privacy"
          :sortable="true"
          style="min-width: 8rem"
        />
        <pv-column field="cover" header="Cover" :sortable="true" />
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
            type="text"
            id="title"
            v-model.trim="song.artist"
            required="true"
            :class="{ 'p-invalid': submitted && !song.artist }"
          />
          <label for="artist">Artist</label>
          <small class="p-error" v-if="submitted && !song.artist"
            >Artist is required.</small
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
          <pv-dropdown
            style="width: 100%"
            v-model="song.genre"
            :options="genres"
            optionLabel="name"
            :placeholder="song.genre"
          />
          <label for="genre">Genre</label>
        </span>
      </div>

      <div class="field">
        <span class="p-float-label">
          <pv-input-text
            id="urlToImage"
            v-model="song.cover"
            required="false"
            rows="2"
            cols="2"
          />
          <label for="cover">Cover Url</label>
        </span>
      </div>
      <div class="field">
        <span class="p-float-label">
          <pv-input-text id="userId" v-model="song.caption" required="true" />
          <label for="description">Caption</label>
        </span>
      </div>
      <div class="field">
        <span class="p-float-label">
          <div class="flex justify-content-evenly">
            <div
              v-for="category of categories"
              :key="category.key"
              class="field-radiobutton"
            >
              <pv-radio-button
                name="category"
                :value="category.name"
                v-model="song.privacy"
              />
              <label class="mt-1 mx-auto" :for="category.key">{{
                category.name
              }}</label>
            </div>
          </div>
          <label for="description">Privacy</label>
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
import { useToast } from "primevue/usetoast";
import { SongsApiServices } from "../../services/songs/songs-api.services";
import { UsersApiServices } from "../../services/users/users-api.services";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "manage-tracks",
  data() {
    return {
      genres: [
        { name: "Rock" },
        { name: "Pop" },
        { name: "Metal" },
        { name: "Reggae" },
        { name: "Salsa" },
      ],
      categories: [{ name: "Public" }, { name: "Private" }],
      songs: [],
      songDialog: false,
      deleteSongDialog: false,
      deleteSongsDialog: false,
      song: {},
      selectedSongs: null,
      filters: {},
      submitted: false,
      songsService: null,
      toast: null,
      userId: null,
    };
  },

  created() {
    this.toast = useToast();
    this.songsService = new SongsApiServices();
    this.getCurrentUser();
    this.initFilters();
  },
  methods: {
    getCurrentUser() {
      this.usersService = new UsersApiServices();
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        this.usersService.getUsersById(user.uid).then((uid) => {
          this.userId = uid.data.id;
          this.songsService.getTracks().then((response) => {
            this.songs = response.data.filter(
              (item) => item.userId === this.userId
            );
            this.songs.forEach((song) => {
              this.getDisplayableSong(song);
            });
          });
        });
      });
    },

    showSuccess() {
      this.toast.add({
        severity: "success",
        summary: "Success",
        detail: "Track has been changed successfully!",
        life: 3000,
      });
    },
    getDisplayableSong(song) {
      return song;
    },
    getStorableSong(displayableSongs) {
      return {
        id: displayableSongs.id,
        userId: (displayableSongs.userId = this.userId),
        title: displayableSongs.title,
        genre: displayableSongs.genre.name,
        tags: displayableSongs.tags,
        description: displayableSongs.description,
        caption: displayableSongs.caption,
        privacy: displayableSongs.privacy,
        artist: displayableSongs.artist,
        cover: displayableSongs.cover,
        source: displayableSongs.source,
        publishDate: displayableSongs.publishDate,
      };
    },
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      };
    },
    findIndexById(id) {
      return this.songs.findIndex((song) => song.id === id);
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
          this.song = this.getStorableSong(this.song);
          this.songsService
            .updateTrack(this.song.id, this.song)
            .then((response) => {
              this.songs[this.findIndexById(response.data.id)] =
                this.getDisplayableSong(response.data);
              this.showSuccess();
            });
        }
      } else {
        this.toast.add({
          severity: "error",
          summary: "Can't save",
          detail: "Required fields must complete filled in",
          life: 3000,
        });
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
      this.songsService.deleteTracks(this.song.id).then((response) => {
        this.songs = this.songs.filter((t) => t.id !== this.song.id);
        this.deleteSongDialog = false;
        this.song = {};
        this.$toast.add({
          severity: "success",
          summary: "Successful",
          detail: "Track Deleted",
          life: 3000,
        });
        console.log(response);
      });
    },
  },
};
</script>

<style scoped></style>
