import axios from "axios";

async function fetchData(path) {
  return await fetch(`https://api.mbacounsel.com/api/v1/home/${path}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => data)
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}

function getAttributeDetails(path) {
  return axios.get(`https://api.mbacounsel.com/api/v1/${path}`);
}

function postUserDetails(path, data) {
  return axios.post(`https://api.mbacounsel.com/api/v1/${path}`, data);
}

export const GetRequest = (path) => {
  return axios.get(`https://api.mbacounsel.com/api/v1/${path}`);
};

export { fetchData, getAttributeDetails, postUserDetails };
