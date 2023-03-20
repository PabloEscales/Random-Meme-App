import { useState } from "react";
import SearchBar from './Components/SearchBar';
import memesData from "./memesData.js"


export const App = () => {

  const GIPHY_API_KEY = "2cZkiFTqyiS79UdSapL6LHWlublpl7iy";

  const [memeGif, setMemeGif] = useState("");
  const [randomMemeGif, setRandomMemeGif] = useState("");
  const [query, setQuery] = useState("Keyboard");

  const callGiphyAPI = (query) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${GIPHY_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {

        setMemeGif(data.data[0].images.original.url)

      });
  };

  callGiphyAPI(query);

  const getRandomMeme = () => {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setRandomMemeGif(memesArray[randomNumber].url)
  };

  return (
    <>
      <div>
        <SearchBar className='header' setQuery={setQuery} />
        <button
            className="form--button"
            onClick={getRandomMeme}
            >
              Get a random meme 🖼
          </button>
      </div>
      <div>
        <img
          className="meme--image"
          src={randomMemeGif ? randomMemeGif : memeGif}
          alt="meme"
        />
      </div>
    </>
  );
};

export default App;
