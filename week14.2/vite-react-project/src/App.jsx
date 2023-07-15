import { useState } from 'react'
import react from 'react'
import './App.css'
import Movie from './components/Movie.jsx'
import Stars from './components/stars' 

function App() {
  return (
    <>
    <Movie
    title="The Other Woman"
    url="./otherwomanimg.jpg"
    alt="A movie poster for The Other Woman, showing three women standing next to each other, with their arms around each other"
    rating="PG-13"
    year="2014"
    synopsis="After discovering that her boyfriend is married, Carly meets the wife he's been betraying; when yet another affair is discovered, all three women team up to plot revenge on the three-timing S.O.B.-IMDB"
     />
    <Movie />
    <Movie />
    <Movie />
    </>
  )
}

export default App
ReactDOM.render(<App/>)