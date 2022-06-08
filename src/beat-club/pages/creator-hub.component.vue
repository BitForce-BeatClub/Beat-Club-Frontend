<template>
  <pv-toast></pv-toast>
  <div class="grid">
    <div class="card mt-3" style="width: 70%">
      <div class="bg-white text-red-500">
        <h2 class="ml-3">Upload</h2>
      </div>
      <pv-tab-view class="tabview-custom">
        <pv-tab-panel>
          <template #header>
            <span>Basic info</span>
          </template>
          <div id="principal-div">
            <h4 class="title-hub">Creator Hub</h4>
            <div class="flex justify-content-around">
              <div class="card">
                <div class="flex justify-content-center">
                  <img
                    class="roundedImage"
                    alt="CoverImage"
                    :src="this.coverUrl"
                  />
                </div>
                <div class="">
                  <h4>Cover Link</h4>
                  <pv-input-text
                    type="text"
                    id="urlToImage"
                    v-model="this.coverUrl"
                  />
                </div>
              </div>
              <div style="width: 50%">
                <div>
                  <h4 class="sub-titles">Track<em class="asterisk">*</em></h4>
                  <span class="p-float-label">
                    <pv-input-text
                      style="width: 100%"
                      id="title-input"
                      type="text"
                      placeholder="Track Url"
                      v-model="track.source"
                      :class="{ 'p-invalid': submitted && !track.source }"
                    />
                    <small class="p-error" v-if="submitted && !track.source"
                      >Source is required.</small
                    >
                  </span>
                </div>
                <div>
                  <h4 class="sub-titles">Title <em class="asterisk">*</em></h4>
                  <span class="p-float-label">
                    <pv-input-text
                      style="width: 100%"
                      id="title-input"
                      type="text"
                      placeholder="Title"
                      v-model.trim="track.title"
                      :class="{ 'p-invalid': submitted && !track.title }"
                    />
                    <small class="p-error" v-if="submitted && !track.title"
                      >Title is required.</small
                    >
                  </span>
                </div>
                <div>
                  <div>
                    <h4 class="sub-titles">
                      Genre <em class="asterisk">*</em>
                    </h4>
                  </div>
                  <div class="pt-0">
                    <pv-dropdown
                      style="width: 100%"
                      v-model="track.gender"
                      :options="genders"
                      optionLabel="name"
                      placeholder="Select a gender"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <h4 class="sub-titles">Description</h4>
                  </div>

                  <div>
                    <pv-text-area
                      style="width: 100%"
                      type="text"
                      class="text-area-description"
                      v-model="track.description"
                      placeholder="Describe you tag."
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <h4 class="sub-titles">Caption</h4>
                  </div>

                  <div>
                    <pv-text-area
                      style="width: 100%"
                      type="text"
                      class="text-area-description"
                      v-model="track.caption"
                      placeholder="Add a caption to your post (optional)"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <h4 class="sub-titles">Privacy:</h4>
                  </div>
                  <div class="flex justify-content-around">
                    <div
                      v-for="category of categories"
                      :key="category.key"
                      class="field-radiobutton"
                    >
                      <pv-radio-button
                        name="category"
                        :value="category.name"
                        v-model="track.privacy"
                      />
                      <label class="text-black-alpha-90" :for="category.key">{{
                        category.name
                      }}</label>
                    </div>
                    <div class="col-6">
                      <div class="flex flex-row-reverse">
                        <pv-button
                          id="btn-cancel"
                          icon="pi pi-times"
                          label="cancel"
                          @click="openNew"
                        />
                        <pv-button
                          id="btn-save"
                          icon="pi pi-save"
                          label="save"
                          @click="saveTrack"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </pv-tab-panel>
      </pv-tab-view>
    </div>
  </div>
</template>

<script>
import { useToast } from "primevue/usetoast";
import { SongsApiServices } from "../services/songs/songs-api.services";
import { UsersApiServices } from "../services/users/users-api.services";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "creator-hub",
  data() {
    return {
      userService: null,
      userId: null,
      coverUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcT0gfUfQFnyI5p8HCnWSbLHQhmy_cO80TxudY7E4ZtfoqI93Ky2Dx6FDvjoICrsBAj8&usqp=CAU",
      tracks: [],
      track: {},
      submitted: false,
      toast: null,
      tracksService: null,
      selectedGender: null,
      checked: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      loading: false,
      value1: null,
      value2: null,
      value3: null,
      categories: [{ name: "Public" }, { name: "Private" }],
      selectedCategory: null,
      genders: [
        { name: "Rock" },
        { name: "Pop" },
        { name: "Metal" },
        { name: "Reggae" },
        { name: "Salsa" },
      ],
      active1: false,
      active2: false,
    };
  },
  created() {
    this.toast = useToast();
    this.userService = new UsersApiServices();
    this.tracksService = new SongsApiServices();
    this.getCurrentUser();
  },
  methods: {
    showSuccess() {
      this.toast.add({
        severity: "success",
        summary: "Success message",
        detail: "Message content",
        life: 3000,
      });
    },
    getDisplayableTrack(track) {
      return track;
    },
    getStorableTrack(displayableTrack) {
      return {
        id: displayableTrack.id,
        userId: (displayableTrack.userId = this.userId),
        title: displayableTrack.title,
        gender: displayableTrack.gender.name,
        tags: displayableTrack.tags,
        description: displayableTrack.description,
        caption: displayableTrack.caption,
        privacy: displayableTrack.privacy,
        artist: displayableTrack.artist,
        cover: (displayableTrack.cover = this.coverUrl),
        source: displayableTrack.source,
      };
    },
    findIndexById(id) {
      return this.tracks.findIndex((offer) => offer.id === id);
    },
    openNew() {
      this.track = {};
      this.submitted = false;
    },
    async saveTrack() {
      this.submitted = true;
      if (this.track.title.trim()) {
        if (this.track.id) {
          this.track = this.getStorableTrack(this.track);
          await this.tracksService
            .updateTrack(this.track.id, this.track)
            .then((response) => {
              this.tracks[this.findIndexById(response.data.id)] =
                this.getDisplayableTrack(response.data);
              this.showSuccess();
            });
        } else {
          this.track.id = 0;
          this.track = this.getStorableTrack(this.track);
          await this.tracksService.createTrack(this.track).then((response) => {
            this.track = this.getDisplayableTrack(response.data);
            this.tracks.push(this.track);
            this.showSuccess();
            console.log(this.track);
          });
        }
      }
      this.track = {};
      this.submitted = false;
      this.coverUrl =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcT0gfUfQFnyI5p8HCnWSbLHQhmy_cO80TxudY7E4ZtfoqI93Ky2Dx6FDvjoICrsBAj8&usqp=CAU";
    },
    getCurrentUser() {
      this.usersService = new UsersApiServices();
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        {
          this.usersService.getUsersById(user.uid).then((response) => {
            this.userId = response.data.id;
          });
        }
      });
    },
  },
};
</script>
<style>
#principal-div {
  background-color: #ffffff;
  color: #000000;
}
.tabs-content {
  color: #000000;
}
.title-hub {
  color: #000000;
}
.sub-titles {
  font-weight: bold;
  color: #000000;
  padding-bottom: 0.5rem;
}
.asterisk {
  color: red;
}
h4 {
  padding-top: 1rem;
}
.input-text-tags {
  width: 35%;
  height: 50px;
}
.text-area-description {
  width: 35%;
}
.categories-list {
  color: #000000;
}
#btn-save {
  color: white;
  background: orangered;
}
#btn-cancel {
  color: black;
  background: #f2f2f2;
}
.roundedImage {
  margin-top: 3rem;
  background: no-repeat;
  background-size: cover;
  overflow: hidden;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 10%;
  width: 200px;
  height: 200px;
}
</style>
