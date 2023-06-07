import { useEffect } from "react";
import "./App.css";

// 80543ffc

const API_URL = "http://www.omdbapi.com?apikey=80543ffc";

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return <></>;
}

export default App;
