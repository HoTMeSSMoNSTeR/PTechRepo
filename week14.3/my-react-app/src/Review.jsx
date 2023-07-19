import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from './Rating'

export default function Review() {
    // state = {
    //     reviewList: []
    // }
    return (
        <form>
            <div className="form-group">
                <label for="review-form">Leave a Review Here!</label>
                <textarea className="form-control" id="review-form" rows="3"></textarea>
            </div>
            <Rating />
        </form>
    )
}