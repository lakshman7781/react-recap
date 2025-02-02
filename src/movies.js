import React, { useState, useEffect } from "react";
import Card from "./movie_card"; 

const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=c13a933a";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    const SearchMovies = async (search) => {
        const response = await fetch(`${URL}&s=${search}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        SearchMovies("avengers");
    }, []);

    return (
        <>
            <div>
                <h1>Movies</h1>
            </div>
            <div>
                {movies.map((movie, index) => (
                    <Card key={index} movie={movie} />
                ))}
            </div>
        </>
    );
}

export default Movies;