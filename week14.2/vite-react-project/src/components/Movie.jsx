import React from 'react'
import ReactDOM from 'react-dom/client'
import MovieList from './MovieList.js'

console.log(MovieList)

// let movie = MovieList.map(movie => ({}))

export default function Movie(props) {
return (
        <>
        <img src="./otherwomanimg.jpg" alt="alt for now"></img>
        <h3>The Other Woman</h3>
        <h5>2014 rated PG-13</h5>
        <p>Some Synopsis here!</p>
        </>
)}

console.log(<Movie />)

// export default Movie 
