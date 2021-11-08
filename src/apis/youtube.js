import axios from "axios";

const KEY = "AIzaSyAUCr2rIpewzNb7pNEdOl-_rKAWRWxVdhE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
