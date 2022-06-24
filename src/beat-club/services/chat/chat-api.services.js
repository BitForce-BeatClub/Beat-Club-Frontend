import http from "../../../core/services/http-common";

export class MessagesApiServices {
  //GET
  async getMessages() {
    return await http.get("/messages");
  }
  //POST
  createMessages(data) {
    return http.post("/messages", data);
  }
  //GET BY ID
  getMessageById(id) {
    return http.get(`/messages/${id}`);
  }
  updateMessage(id, data) {
    return http.put(`/messages/${id}`, data);
  }
}
