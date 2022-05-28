import http from "../../core/services/http-common";

export class BeatClubApiServices {
  //GET
  getSongs() {
    return http.get("/songs");
  }
  getUsers() {
    return http.get("/users");
  }
  getMemberships() {
    return http.get("/memberships");
  }
  //POST
  create(data) {
    return http.post("/songs", data);
  }
  createUsers(data) {
    return http.post("/users", data);
  }
  createTrack(data) {
    return http.post("/tracks", data);
  }
  //GET BY ID
  getUsersById(id) {
    return http.get(`/users/${id}`);
  }
  //UPDATE
  updateUser(id, data) {
    return http.put(`users/${id}`, data);
  }
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
