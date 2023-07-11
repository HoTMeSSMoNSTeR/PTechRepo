import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom/client'

function ReviewForm() {
const[comment, setComment] = useState('')
const reviewArray = []

    let handleClick = reviewArray.push(input.value)

    return (
        <form>
            <label></label>
            <input type='text'></input>
            <button onClick={handleClick}>Submit Review</button>
        </form>
    )
    
}

export default ReviewForm
ReactDOM.render(<ReviewForm/>)