import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './App.css'
import { getImage } from './services/DalleAPI';


function App() {
  const [prompt, setPrompt] = useState("");
  const [post, setPost] = useState("");
  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) {
      const res = getImage();
      console.log(res)
    } else {
      mounted.current = true;
    }
  }, [post])



  const generateImage = (event) => {
    event.preventDefault()
    console.log(prompt);
    if (prompt === "") {
      alert("Please enter a prompt!");
      return;
    }
    setPost(prompt);
    setPrompt("");
  }

  return (
    <main>
      <form onSubmit={generateImage}>
        <input onChange={(e) => setPrompt(e.target.value)} placeholder="Type your PROMPT" type='text' value={prompt}></input>
        <button type='submit' disabled={prompt === "" ? true : false} >Generate</button>
      </form>
      <img src="https://img.freepik.com/vector-gratis/concepto-transformacion-digital-vector-fondo-microchip-tecnologia-ai_53876-112222.jpg?w=2000"></img>
      {process.env.OPENAI_API_KEY}
    </main>
  );
}

export default App;