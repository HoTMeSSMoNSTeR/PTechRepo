import React from 'react'
import ReactDOM from 'react-dom/client'
import ReviewForm from './components/ReviewForm'

function ReviewList() {
    let listItem = reviewArray.map( movie => (
        <li>{movie}</li>
    ))
    return(
        <ul>
            {listItem}
        </ul>
    )
}