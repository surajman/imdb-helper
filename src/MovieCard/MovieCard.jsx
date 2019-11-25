import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
    const { Title, Year, Type, Poster } = movie;
    return (
        <div className="category">
            <div className="imageDetails">
                <img src={Poster} alt={Title} className="movieImage" />
            </div>
            <div className="movieDetails">
                <div className="movieName" title={Title}>{Title}</div>
                <div className="movieYear" title={Year}>Released in {Year}</div>
                <div>Category: {Type}</div>
            </div>
        </div>
    );
};

export default MovieCard;