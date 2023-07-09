import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import MovieList from './MovieList'

export default class Movie extends React.Component {
    render() {
        return (
            <div>
                <img />
                <div>
                    <img src="../otherwomanimg.jpg" alt="this is an image of the movie poster"></img>
                    <h3>Title</h3>
                    <p>Synopsis</p>
                </div>
            </div>
        )
    }
}