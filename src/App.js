import { useEffect } from "react";
import './App.css';

const API_URL = 'https://www.omdbapi.com?apikey=6ad9847';   // API URL


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
        <h1>Hello World</h1>
    );
}

export default App;