import React from "react";

const MovieCard = ({ movie }) => {
    if (movie.Poster === 'N/A') {
        return null; // Return null to not render anything if Poster is 'N/A'
    }
    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img src={movie.Poster} alt={movie.Title}/>
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;