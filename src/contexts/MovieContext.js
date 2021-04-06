import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) =>{
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: "10",
            rate : "4.8",
            id:12345
        },
        {
            name: 'Game Of Thrones',
            price: "10",
            rate : "5",
        },
        {
            name: 'Inception',
            price: "10",
            rate : "3",
        },
        {
            name: 'The Queen Of Island',
            price: "10",
            rate : "3.9",
        },
        {
            name: 'Insomnia',
            price: "10",
            rate : "4.5",
        },
        {
            name: 'Pandemonium',
            price: "10",
            rate : "3.7",
        },
    ]);

    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}