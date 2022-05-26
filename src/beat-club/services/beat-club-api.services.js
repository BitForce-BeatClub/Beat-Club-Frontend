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
  createUsers(data) {
    return http.post("/users", data);
  }
  getUsersById(id) {
    return http.get(`/users/${id}`);
  }
  updateUser(id, data) {
    return http.put(`users/${id}`, data);
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
