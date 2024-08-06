import React from 'react';

const Card = (props) => {
    const { movie } = props;
    return (
        <div className='card'>
            <h1>{movie.Title}</h1>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt='movie'></img>
        </div>
    );
}

export default Card;