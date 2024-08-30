import axios from "axios";

export const PostRequest = (path, data) => {
  return axios.post(`http://localhost:3001/api/v1/${path}`, data);
};
