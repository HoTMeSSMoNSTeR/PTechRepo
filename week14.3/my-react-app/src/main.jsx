import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Movie from './Movie.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Movie
    title="The Nightmare Before Christmas"
    img="https://m.media-amazon.com/images/M/MV5BMTc5MDY0MjkwNV5BMl5BanBnXkFtZTcwNTk2Njk3OA@@._V1_.jpg"
    alt="A movie poster for the Nightmare Before Christmas, a cartoon skeleton and doll standing on a hill top, with a large moon behind them. They are standing between a group of three children in costumes and a ghost dog."
    rating="PG"
    year="1993"
    synopsis="Jack Skellington, king of Halloween Town, discovers Christmas Town, but his attempts to bring Christmas to his home causes confusion.-IMDB"
    />
    <Movie 
     title="The Other Woman"
     img="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/45121b5d729415d34beec95228fdc8cee12b8ea16905dfe3347ccce912ecf20e._RI_TTW_.jpg"
     alt="A movie poster for The Other Woman, showing three women standing next to each other, with their arms around each other"
     rating="PG-13"
     year="2014"
     synopsis="After discovering that her boyfriend is married, Carly meets the wife he's been betraying; when yet another affair is discovered, all three women team up to plot revenge on the three-timing S.O.B.-IMDB"
    />
    <Movie 
    title="Scream"
    img="https://i.ebayimg.com/images/g/19IAAOSw7JVio07c/s-l1600.jpg"
    alt="A movie poster for Scream, on a black background is a large image of a woman looking wide eyed straight into the camera, gasping with her hand over her mouth, and 5 young adults in the foreground."
    rating="R"
    year="1996"
    synopsis="A year after the murder of her mother, a teenage girl is terrorized by a masked killer who targets her and her friends by using scary movies as part of a deadly game.-IMDB"
    />
    <Movie 
     title="Saw"
     img="https://images.static-bluray.com/movies/covers/290805_medium.jpg"
     alt="A movie poster for the movie Saw, a white background with a bronzed circular saw, encompassing a smaller handsaw."
     rating="R"
     year="2004"
     synopsis="Two strangers awaken in a room with no recollection of how they got there, and soon discover they're pawns in a deadly game perpetrated by a notorious serial killer.-IMDB"
    />
  </React.StrictMode>,
)
