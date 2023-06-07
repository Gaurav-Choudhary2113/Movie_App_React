import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SerachIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=80543ffc";

function App() {
  const [movies, setMovies] = useState([]);
  const [serachTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value={serachTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SerachIcon}
          alt="search"
          onClick={() => searchMovies(serachTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
