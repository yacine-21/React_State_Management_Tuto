import React,{useState, useContext} from 'react';
import {MovieContext} from "../contexts/MovieContext"

const AddMovie = () =>{

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [rate, setRate] = useState("");
    const [Movies, setMovies] = useContext(MovieContext)

    const updateName = (event) =>{
        setName(event.target.value)
    };
    const updatePrice = (event) =>{
        setPrice(event.target.value)
    };
    const updateRate = (event) =>{
        setRate(event.target.value)
    };

    const addMovie = (event) =>{
        event.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name: name, price: price, rate: rate}])
        setName("");
        setPrice("");
        setRate("");
    }


    return(
        <form onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={updateName}/>
            <input type="text" name="price" value={price} onChange={updatePrice}/>
            <input type="text" name="rate" value={rate} onChange={updateRate}/>
            <button>Submit</button>
        </form>
    )
}

export default AddMovie;