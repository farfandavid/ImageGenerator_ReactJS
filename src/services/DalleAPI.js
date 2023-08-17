import axios from "axios";

const BASE_URL = "https://api.openai.com/v1/images/generations";
const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
  }
}


export const getImageWithFetch = async () => await fetch("https://api.openai.com/v1/images/generations", {
  method: "POST",
  body: JSON.stringify({
    prompt: 'A logo',
    n: 1,
    size: "512x512",
  }),
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
  },
})
  .then(res => res.text())
  .then(result => JSON.parse(result))
  .catch(err => console.error(err));


export const getImageWithAxios = async () => axios.post(BASE_URL, {
  prompt: 'a logo',
  n: 1,
  size: "512x512"
}, axiosConfig)
  .then(response => response.data)
  .then(result => JSON.parse(result))
  .catch(err => console.error(err.response?.data));