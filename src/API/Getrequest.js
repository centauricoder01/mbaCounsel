import axios from "axios";

function fetchData(path) {
  return fetch(`http://localhost:3001/api/v1/home/${path}`)
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
  return axios.get(`http://localhost:3001/api/v1/${path}`);
}

function postUserDetails(path, data) {
  return axios.post(`http://localhost:3001/api/v1/${path}`, data);
}
export { fetchData, getAttributeDetails, postUserDetails };
