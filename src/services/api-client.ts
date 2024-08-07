import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "27856d8c487b46dd86c2fc6b91d3b9e8",
  },
});
