import axios from "axios";

export const DeleteRequest = (path, id) => {
  return axios.delete(`https://api.mbacounsel.com/api/v1/${path}`, {
    data: { id: id },
  });
};
