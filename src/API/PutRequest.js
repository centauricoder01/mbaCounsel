import axios from "axios";

export const PutRequest = (path, data) => {
  return axios.put(`http://148.66.155.154:3001/api/v1/${path}`, data);
};
