import React from 'react';
import MovieList from './MovieList'
import './App.css'
import Movie from './Movie'

function App() {
  const data = MovieList.map(movie => {
    return <Movie 
      title={movie.title} 
      img={movie.img} 
      alt={movie.alt}
      rating={movie.rating}
      year={movie.year}
      synopsis={movie.synopsis} 
      reviews={movie.rating}
       />
  })
  return (
    <div className='flex-container'>
      {data}
    </div>
  )
}


export default App



