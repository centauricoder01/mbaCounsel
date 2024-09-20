import axios from "axios";

export const PostRequest = (path, data) => {
  return axios.post(`http://148.66.155.154:3001/api/v1/${path}`, data);
};
