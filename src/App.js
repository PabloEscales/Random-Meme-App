import SearchBar from './Components/SearchBar';
import { useMemes } from './hooks/useMemes';

export const App = () => {
  const {
    memeGif,
    randomMemeGif,
    setQuery,
    getRandomMeme
  } = useMemes()

  return (
    <>
      <div>
        <SearchBar className='header' setQuery={setQuery} />
        <button
            className="form--button"
            onClick={getRandomMeme}
            >
              Random meme
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
