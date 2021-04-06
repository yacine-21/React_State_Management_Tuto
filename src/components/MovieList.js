import React, {useContext} from 'react';
import Movie from './Movie'
import {MovieContext} from '../contexts/MovieContext';


const MovieList = () =>{
    const [movies, setMovies] = useContext(MovieContext)

    return(
        <div>
            {movies.map(movie =>(
            <Movie 
                name={movie.name}
                price={movie.price}
                rate={movie.rate}
                key={Math.random()*1000}
            />
        ))}
        </div>
    );
}

export default MovieList;