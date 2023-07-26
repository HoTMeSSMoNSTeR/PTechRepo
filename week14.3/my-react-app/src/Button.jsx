import React from 'react'
import App from './App'
import Review from './Review'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default function Button(props) {
    function handleClick() {
        {props.review.push()}
    }


    return (
        <button onClick={handleClick}>
            Submit
            </button>
    )
}