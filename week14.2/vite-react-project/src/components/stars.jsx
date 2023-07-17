import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import { FaStar } from 'react-icons/fa'

export default function Stars() {
{
        const [rating, setRating] = useState(null);
        const [hover, setHover] = useState(null);
        <div>
            {
                [...Array(5)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                        <label>
                            <input
                                type='radio'
                                name='rating'
                                value={currentRating}
                                onClick={() => setRating(currentRating)}
                            />
                            <FaStar
                                className="star"
                                size={20}
                                color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                onMouseEnter={() => setHover(currentRating)}
                                onMouseLeave={() => setHover(null)}
                            />;
                        </label>
                    )
                })
            }
        </div >
    }
}

