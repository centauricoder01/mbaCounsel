import axios from "axios";

export const PostRequest = (path, data) => {
  return axios.post(`https://api.mbacounsel.com/api/v1/${path}`, data);
};
