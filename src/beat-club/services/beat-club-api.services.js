import http from "../../core/services/http-common";

export class BeatClubApiServices {
  getAll() {
    return http.get("/songs");
  }
  getUsers() {
    return http.get("/users");
  }

  create(data) {
    return http.post("/songs", data);
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
