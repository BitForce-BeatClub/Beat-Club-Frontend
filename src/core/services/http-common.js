import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8080/api/v1",
  // baseURL: "http://localhost:5100/api/v1",
  baseURL: "https://my-json-server.typicode.com/BitForce-BeatClub/Beat-Club-Frontend",
  headers: {
    "Content-Type": "application/json",
  },
});
