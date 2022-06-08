import http from "../../../core/services/http-common";

export class SongsApiServices {
  //GET
  getSongs() {
    return http.get("/songs");
  }
  //POST
  create(data) {
    return http.post("/songs", data);
  }
  createTrack(data) {
    return http.post("/tracks", data);
  }
  //GET BY ID
  getUsersById(id) {
    return http.get(`/users/${id}`);
  }
  //UPDATE
  updateTrack(id, data) {
    return http.put(`/tracks/${id}`, data);
  }
  update(id, data) {
    return http.put(`/songs/${id}`, data);
  }
  delete(id) {
    return http.delete(`/songs/${id}`);
  }
  findByName(name) {
    return http.get(`/songs=${name}`);
  }
}
