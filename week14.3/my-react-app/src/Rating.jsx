import React from 'react';
import { useState } from 'react';
import Stars from "./Stars"
import './App.css'

const Rating = () => {
    const [rating, setRating] = useState(0);

    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
    };

    return (
        <div className='rating-stars'>
            {[...Array(5)].map((_, index) => 
            <Stars 
                key={index}
                selected={index < rating}
                onClick={() => handleStarClick(index + 1)}
            />
            )}
        </div>
    )
}

export default Rating