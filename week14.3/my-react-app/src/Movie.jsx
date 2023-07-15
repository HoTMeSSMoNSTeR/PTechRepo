import React from 'react'


export default function Movie(props) {
    return (
        <div >
        <h2>{props.title}</h2>
        <img src={props.img} width="20%" alt={props.alt}></img>
        <h4>Release:{props.year} Rated:{props.rating}</h4>
        <p>{props.synopsis}</p>
        </div>
    )
}