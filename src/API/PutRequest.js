import axios from "axios";

export const PutRequest = (path, data) => {
  return axios.put(`http://localhost:3001/api/v1/${path}`, data);
};
