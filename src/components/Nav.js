import React,{useContext} from 'react';
import '../App.css';
import {MovieContext} from '../contexts/MovieContext'

const Nav = () =>{

    const [movies, setMovies] = useContext(MovieContext)
    return(
        <div className="nav">
            <h3>Yacine Lyoubi</h3>
            <p>List of Movies: {movies.length} </p>
        </div>
    );
}

export default Nav;