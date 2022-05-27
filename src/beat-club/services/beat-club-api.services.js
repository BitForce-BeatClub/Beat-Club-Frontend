import http from "../../core/services/http-common";

export class BeatClubApiServices {
  getSongs() {
    return http.get("/songs");
  }
  getUsers() {
    return http.get("/users");
  }
  create(data) {
    return http.post("/songs", data);
  }
  createTrack(data) {
    return http.post("/tracks", data);
  }
  createUsers(data) {
    return http.post("/users", data);
  }
  getUsersById(id) {
    return http.get(`/users/${id}`);
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
