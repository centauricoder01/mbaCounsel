import axios from "axios";

export const DeleteRequest = (path, id) => {
  return axios.delete(`http://148.66.155.154:3001/api/v1/${path}`, {
    data: { id: id },
  });
};
