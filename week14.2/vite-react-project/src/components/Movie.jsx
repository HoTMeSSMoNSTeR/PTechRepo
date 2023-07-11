import React from 'react'
import ReactDOM from 'react-dom/client'
import MovieList from './MovieList.js'


function Movie() {
    {MovieList.map(movie => (
        <>
        <img src={movie.url} alt={movie.alt}></img>
        <h3>{movie.title}</h3>
        <h5>{movie.year}{movie.rating}</h5>
        <p>{movie.synopsis}</p>
        </>
    ))}

}

export default Movie 
ReactDOM.render(<Movie/>)