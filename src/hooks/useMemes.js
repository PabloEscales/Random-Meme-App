import { useState, useEffect } from "react";
import memesData from "../memesData.js"

export const useMemes = () => {
  const GIPHY_API_KEY = "2cZkiFTqyiS79UdSapL6LHWlublpl7iy";

  const [memeGif, setMemeGif] = useState("");
  const [randomMemeGif, setRandomMemeGif] = useState("");
  const [query, setQuery] = useState("Keyboard");

  useEffect(() =>{
      fetch(
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${GIPHY_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {

          setMemeGif(data.data[0].images.original.url)

        });
  } ,[query])

  const getRandomMeme = () => {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setRandomMemeGif(memesArray[randomNumber].url)
  };

  return {
    memeGif,
    randomMemeGif,
    setQuery,
    getRandomMeme
  }
}
