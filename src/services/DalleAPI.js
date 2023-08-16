import axios from "axios";

const BASE_URL = "https://api.openai.com/v1/images/generations";
const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
  }
}


export const getImage = async () => {
  const res = await fetch("https://api.openai.com/v1/images/generations", {
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
    .then(result => console.log(result))
    .catch(err => console.error(err));
  /* await fetch(BASE_URL, {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      prompt: 'A logo',
      n: 1,
      size: "512x512",
    }),
  })
    .then(response => response.text)
    .then(result => console.log(result))
    .catch(err => console.error(err)); */
  /* return await axios.post(BASE_URL, JSON.stringify({
    prompt: 'A logo',
    n: 1,
    size: "512x512",
  }),
    {
      headers: axiosConfig.headers,
      auth
      
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    }) */
}