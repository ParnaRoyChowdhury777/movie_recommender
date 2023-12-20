import { useEffect } from "react";
import MovieCard from "./MovieCard";
import './App.css';
import SearchIcon from './search.svg';


const API_URL = 'https://www.omdbapi.com?apikey=6ad9847';   // API URL

const movie1 = {
    "Poster" : "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg",
    "Title" : "Spiderman in Cannes",
    "Type" : "movie",
    "Year" : "2016",
    "imdbID" : "tt5978586"
}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }
    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className="app">
            <h1>Movie Land</h1>
            <div className="search">
                <input placeholder="Search for movies..." value="Superman" onChange={() => {}}/>
                <img src = {SearchIcon} alt="Search Icon" onClick={() => {}}/>
            </div>

            <div className="container">
                <MovieCard movie1 = {movie1}/>
            </div>
        </div>
    );
}

export default App;