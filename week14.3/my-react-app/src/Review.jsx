import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './MovieList'
import './App.css'
import { useState, onChange } from 'react';



export default function Review() {
const [userReview, setUserReview] = useState("")
const [list, setList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
            console.log(userReview)
        const data={userReview}
        if(userReview) {
            setList((ls) => [...ls, data])
            setUserReview("")
        }
    }
    return (
        <>

            <form className="form-group"
            onSubmit={handleSubmit}>
                <label htmlFor="review-form">Leave a Review Here!</label>
                <input
                    type='text' 
                    value={userReview}
                    onChange={(e) => setUserReview(e.target.value)}
                    className="form-control">    
                    </input>
                <button>Submit Review</button>
            </form>
            <div>
                <p>{userReview}</p>
            </div>
            {
                list.map((a) => <div>
                    <li className='submitted-review'><i>"{a.userReview}"</i></li>
                </div>)
            }
        </>
    )
}
