import axios from "axios";

export default axios.create({
  baseURL:
    "https://my-json-server.typicode.com/BitForce-BeatClub/Beat-Club-Frontend",
  headers: { "Content-type": "application/json" },
});
