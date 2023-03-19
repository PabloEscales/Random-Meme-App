import { useState } from "react";
import SearchBar from './Components/SearchBar';

export const App = () => {

  const GIPHY_API_KEY = "2cZkiFTqyiS79UdSapL6LHWlublpl7iy";

  const [memeGif, setMemeGif] = useState("");
  const [query, setQuery] = useState("Type here");

  const callGiphyAPI = (string) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${string}&api_key=${GIPHY_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {

        setMemeGif(data.data[0].images.original.url)

      });
  };

    callGiphyAPI(query);

  return (
    <>
      <div>
        <SearchBar setQuery={setQuery} />
      </div>
      <div
        className="App"
        style={{ display: "flex", gap: "20px", alignItems: "center" }}
      >
        <img
          className="meme--image"
          src={memeGif}
          alt="meme"
          style={{
            objectFit: "contain",
            width: "500px",
            heigth: "500px"
          }}
        />
        <h1>Your last before search: {query}</h1>
      </div>
    </>
  );
};

export default App;
