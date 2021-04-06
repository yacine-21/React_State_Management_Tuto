import React from 'react';


const Movie = ({name, price,rate}) =>{

    return(
        <div>
            <h3> Title : {name}</h3>
            <p> Price : ${price}</p>
            <p>Rate : {rate}/5</p>
        </div>
    );
}

export default Movie;