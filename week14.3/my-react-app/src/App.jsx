import React from 'react';
import MovieList from './MovieList'
import './App.css'
import Movie from './Movie'

function App() {
  const data = MovieList.map(movie => {
    return <Movie
      key={movie.id} 
      {...movie}
      // title={movie.title} 
      // img={movie.img} 
      // alt={movie.alt}
      // rating={movie.rating}
      // year={movie.year}
      // synopsis={movie.synopsis} 
      // reviews={movie.reviews}
      // KEEPING THESE HERE TO HELP ME REMEMBER WHAT THE SPREAD OPERATOR IS DOING!!!!!!
       />
  })
  return (
    <div className='flex-container'>
      {data}
    </div>
  )
}


export default App



