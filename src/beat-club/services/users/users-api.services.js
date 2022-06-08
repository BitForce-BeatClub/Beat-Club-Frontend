import http from "../../../core/services/http-common";

export class UsersApiServices {
  //GET
  getUsers() {
    return http.get("/users");
  }
  //POST
  createUsers(data) {
    return http.post("/users", data);
  }
  //GET BY ID
  getUsersById(id) {
    return http.get(`/users/${id}`);
  }
  //UPDATE
  updateUser(id, data) {
    return http.put(`users/${id}`, data);
  }
}
