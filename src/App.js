import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import './App.css';
import SearchIcon from './search.svg';
import Loader from "./Loader";


const API_URL = 'https://www.omdbapi.com?apikey=6ad9847';   // API URL

const App = () => {

    const[movies, setMovies] = useState([]);
    const[searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const Data = await response.json();

        setMovies(Data.Search);
    }

    useEffect(() => {
         searchMovies('Avengers');
         setTimeout(() => {
            setIsLoading(false);
          }, 2000);
    }, []);
  
    if (isLoading) {
      return <Loader />;
    }

    return (
        <div className="app">
            <h1>Movie Land</h1>
            <div className="search">
                <input placeholder="Search for movies..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <img src = {SearchIcon} alt="Search Icon" onClick={() => searchMovies(searchTerm)}/>
            </div>



            { movies?.length > 0
                ? (
                    <div className="container">
                        {
                            movies.map((movie) => (
                                <MovieCard movie={movie}/>
                            ))
                        }
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>    
                )}

            
        </div>
    );
}

export default App;