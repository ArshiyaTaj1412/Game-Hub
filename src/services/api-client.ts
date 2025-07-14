import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8a8a3a2d0e4f4498ac0fd25ceb0ae612",
  },
});
