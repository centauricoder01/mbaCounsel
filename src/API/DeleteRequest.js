import axios from "axios";

export const DeleteRequest = (path, id) => {
  return axios.delete(`http://localhost:3001/api/v1/${path}`, {
    data: { id: id },
  });
};
