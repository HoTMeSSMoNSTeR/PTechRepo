import React from 'react'
import MovieList from './MovieList'
import App from './App'
import ReviewForm from './ReviewForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

// FIGURE OUT THE FREAKING WIDTH PROBLEM!!!!!!!!!!!!!!!!!!!!!!!

export default function Movie(props) {
    return (
        <>
            <div className='movie-card card'>
                <img className='card-img-top .img-fluid' src={props.img} alt={props.alt}></img>
                <h2 className='card-title'>{props.title}</h2>
                <h4 className='card-subtitle mb-2 text-body-secondary'>Release:{props.year} Rated:{props.rating}</h4>
                <p className='card-text'>{props.synopsis}</p>
                <ReviewForm />
            </div>
            <div>
                
            </div>

        </>
    )
}