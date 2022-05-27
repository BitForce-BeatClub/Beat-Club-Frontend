<template>
  <div>
    <div class="mx-8 pb-4 pl-2 text-black-alpha-90">
      <div class="bg-white p-3 text-red-500">
        <h2>Creator Hub</h2>
      </div>

      <pv-tab-view class="tabview-custom" ref="tabview4">
        <pv-tab-panel>
          <template #header>
            <span @click="openNew">Basic info</span>
          </template>
          <div class="pl-2 pt-1" id="principal-div">
            <div class="pb-0">
              <h3 class="title-hub">Creator Hub</h3>
            </div>

            <div>
              <div>
                <h3 class="sub-titles">Title <em class="astersc">*</em></h3>
                <span class="p-float-label">
                  <pv-input-text
                    id="title-input"
                    type="text"
                    v-model.trim="track.title"
                    :class="{ 'p-invalid': submitted && !track.title }"
                  />
                  <label class="width: 32%" for="title-input">Title</label>
                  <small class="p-error" v-if="submitted && !track.title"
                    >Title is required.</small
                  >
                </span>
              </div>

              <div>
                <div>
                  <h3 class="sub-titles">
                    Permalink <em class="astersc">*</em>
                  </h3>
                </div>
                <div class="pt-0">
                  <pv-dropdown
                    v-model="track.gender"
                    :options="genders"
                    optionLabel="name"
                    :editable="true"
                    placeholder="Select a gender"
                  />
                </div>
              </div>

              <div>
                <div>
                  <h3 class="sub-titles">Additional tags</h3>
                </div>

                <div>
                  <pv-input-text
                    type="text"
                    class="input-text-tags"
                    v-model="track.tags"
                    placeholder="Add tags tot describe the genre and mood of you track"
                  />
                </div>
              </div>
              <div>
                <div>
                  <h3 class="sub-titles">Description</h3>
                </div>

                <div>
                  <pv-text-area
                    type="text"
                    class="text-area-description"
                    v-model="track.description"
                    placeholder="Describe you tag."
                  />
                </div>
              </div>
              <div>
                <div>
                  <h3 class="sub-titles">Caption</h3>
                </div>

                <div>
                  <pv-text-area
                    type="text"
                    class="text-area-description"
                    v-model="track.caption"
                    placeholder="Add a caption to your post (optional)"
                  />
                </div>
              </div>

              <div>
                <div>
                  <h3 class="sub-titles">Privacy:</h3>
                </div>
                <div>
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
                </div>
              </div>
            </div>
          </div>
        </pv-tab-panel>
        <pv-tab-panel>
          <template #header>
            <span>Metadata</span>
          </template>
          <div>
            <div class="p-fluid grid">
              <div class="field col-12 md:col-4">
                <h5>Contains Music</h5>
                <pv-dropdown
                  class="dropdown-metadata"
                  id="dropdown"
                  v-model="track.containsMusic"
                  :options="containsMusicOptions"
                  optionLabel="name"
                />
              </div>
              <div class="field col-12 md:col-4">
                <h5>Artist</h5>
                <pv-input-text
                  id="inputtext"
                  type="text"
                  v-model="track.artist"
                />
              </div>
              <div class="field col-12 md:col-4">
                <h5>Publisher</h5>
                <pv-input-text
                  id="inputtext"
                  type="text"
                  v-model="track.publisher"
                />
              </div>
              <div class="field col-12 md:col-4">
                <h5>ISRC</h5>
                <pv-input-text
                  id="inputtext"
                  type="text"
                  v-model="track.ISRC"
                />
              </div>
              <div class="field col-12 md:col-4">
                <h5>Composer</h5>
                <pv-input-text
                  id="inputtext"
                  type="text"
                  v-model="track.commposer"
                />
              </div>
              <div class="field col-12 md:col-4">
                <h5>Release title</h5>
                <pv-input-text
                  id="inputtext"
                  type="text"
                  v-model="track.releaseTitle"
                />
              </div>
              <div class="field col-12">
                <h5>Buy-link</h5>
                <pv-input-text
                  id="inputtext"
                  type="url"
                  v-model="track.buyLink"
                />
              </div>
              <div class="field col-12 md:col-4">
                <h5>Album title</h5>
                <pv-input-text
                  id="inputtext"
                  type="text"
                  v-model="track.albumTitle"
                />
              </div>
              <div class="field col-12 md:col-4">
                <h5>Record label</h5>
                <pv-input-text
                  id="inputtext"
                  type="text"
                  v-model="track.recordLabel"
                />
              </div>
              <div class="field col-12 md:col-4">
                <h5>Record label date</h5>
                <pv-calendar
                  id="calendar"
                  v-model="track.recordLabelDate"
                  placeholder="Calendar"
                  :showIcon="true"
                  dateFormat="dd.mm.yy"
                />
              </div>
              <div class="field col-12 md:col-8">
                <h5>Barcode</h5>
                <pv-input-text
                  id="inputtext"
                  type="text"
                  v-model="track.barcode"
                />
              </div>
              <div class="field col-12 md:col-4">
                <h5>ISWS</h5>
                <pv-input-text
                  id="inputtext"
                  type="text"
                  v-model="track.ISWS"
                />
              </div>
              <div class="field col-12 md:col-8">
                <h5>P Line</h5>
                <pv-input-text
                  id="inputtext"
                  type="text"
                  v-model="track.pLine"
                />
              </div>
              <div class="field col-12 md:col-4">
                <h5>Contains explicit content</h5>
                <pv-dropdown
                  class="dropdown-metadata"
                  id="dropdown"
                  v-model="track.containsExplicitContent"
                  :options="containsMusicOptions"
                  optionLabel="name"
                />
              </div>
            </div>
            <div class="field-checkbox">
              <pv-checkbox id="binary" v-model="track.license" :binary="true" />
              <label class="pl-1">License</label>
            </div>

            <div class="flex">
              <div
                v-for="typelicense of typeslicence"
                :key="typelicense.key"
                class="field-radiobutton pr-3"
              >
                <pv-radio-button
                  name="typelicense"
                  :value="typelicense.name"
                  v-model="track.containsExplicitContent"
                />
                <label class="text-black-alpha-90" :for="typelicense.key">{{
                  typelicense.name
                }}</label>
              </div>
            </div>
            <div class="flex align-items-around">
              <div class="flex flex-wrap align-items-left justify-content-left">
                <h4 class="mt-7 pt-7 left-0 w-9rem h-9rem mx-3 my-3 md:my-0">
                  * Required fields
                </h4>
              </div>
              <pv-button
                class="ml-8 my-6 w-7rem h-2rem justify-content-left align-items-left"
                id="btn-cancel"
                icon="pi pi-times"
                label="cancel"
              />
              <pv-button
                class="my-6 w-5rem h-2rem justify-content-right align-items-right"
                id="btn-save"
                icon="pi pi-save"
                label="save"
                @click="saveTrack"
              />
            </div>
          </div>
        </pv-tab-panel>
        <pv-tab-panel>
          <template #header>
            <span>Permissions</span>
          </template>
          <p class="tabs-content">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus.
          </p>
        </pv-tab-panel>
      </pv-tab-view>
    </div>
  </div>
</template>

<script>
import { useToast } from "primevue/usetoast";
import { BeatClubApiServices } from "../services/beat-club-api.services";

export default {
  name: "creator-hub",
  data() {
    return {
      tracks: [],
      track: {},
      submitted: false,
      toast: null,
      tracksService: null,
      selectedGender: null,
      checked: false,
      loading: false,
      value1: null,
      value2: null,
      value3: null,
      containsMusicOptions: [
        { name: "Yes"},
        { name: "No"},
      ],
      containsExplicitContent: [
        { name: "Yes"},
        { name: "No"},
      ],
      typeslicence: [
        { name: "All rights reserved", key: "1" },
        { name: "Creative commons", key: "0" },
      ],
      categories: [
        { name: "Public" },
        { name: "Private" },
        { name: "Schedule" },
      ],
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
      items: Array.from({ length: 100000 }, (_, i) => ({
        label: `Item #${i}`,
        value: i,
      })),
    };
  },
  created() {
    this.toast = useToast();
    this.tracksService = new BeatClubApiServices();
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
      // challenge.status = challenge.challengeType
      //   ? this.statuses[0].value
      //   : this.statuses[1].value;
      return track;
    },
    getStorableTrack(displayableTrack) {
      return {
        id: displayableTrack.id,
        userId: displayableTrack.userId,
        title: displayableTrack.title,
        gender: displayableTrack.gender,
        tags: displayableTrack.tags,
        description: displayableTrack.description,
        caption: displayableTrack.caption,
        privacy: displayableTrack.privacy,
        containsMusic: displayableTrack.containsMusic,
        artist: displayableTrack.artist,
        publisher: displayableTrack.publisher,
        ISRC: displayableTrack.ISRC,
        commposer: displayableTrack.commposer,
        releaseTitle: displayableTrack.releaseTitle,
        buyLink: displayableTrack.buyLink,
        albumTitle: displayableTrack.albumTitle,
        recordLabel: displayableTrack.recordLabel,
        recordLabelDate: displayableTrack.recordLabelDate,
        barcode: displayableTrack.barcode,
        ISWS: displayableTrack.ISWS,
        pLine: displayableTrack.pLine,
        containsExplicitContent: displayableTrack.containsExplicitContent,
        license: displayableTrack.license,
        typeLicense: displayableTrack.typeLicense,
      };
    },
    findIndexById(id) {
      return this.tracks.findIndex((offer) => offer.id === id);
    },
    openNew() {
      this.track = {};
      this.submitted = false;
    },
    saveTrack() {
      this.submitted = true;
      if (this.track.title.trim()) {
        if (this.track.id) {
          this.track = this.getStorableTrack(this.track);
          this.tracksService
            .updateTrack(this.track.id, this.track)
            .then((response) => {
              this.tracks[this.findIndexById(response.data.id)] =
                this.getDisplayableTrack(response.data);
              this.showSuccess();
              console.log(response);
            });
        } else {
          this.track.id = 0;
          this.track = this.getStorableTrack(this.track);
          this.tracksService.createTrack(this.track).then((response) => {
            this.track = this.getDisplayableTrack(response.data);
            this.tracks.push(this.track);
            this.showSuccess();
            this.console.log(response);
          });
        }
      }

      this.track = {};
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
.astersc {
  color: red;
}
h3 {
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
</style>
