import axios from "axios";

export const CloudinaryImg = (data) => {
  return axios.post(
    `https://api.cloudinary.com/v1_1/dw46ha5xj/image/upload`,
    data
  );
};
