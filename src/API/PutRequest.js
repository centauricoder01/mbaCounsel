import axios from "axios";

export const PutRequest = (path, data) => {
  return axios.put(`https://api.mbacounsel.com/api/v1/${path}`, data);
};
