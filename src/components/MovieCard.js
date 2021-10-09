import React from 'react'
import Rating from './Rating/Rating'
import './MovieCard.css'
const MovieCard = ({el}) => {
    return (
        <div>
<div class="movie_card" id="bright">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina" src= {el.url}/>
      <h1>{el.name}</h1>
      <span class="rating"><Rating rate={el.rate}/></span>
      <h4>{el.date}, {el.réalisateur} </h4>
      <p>{el.type}</p>
      <p>{el.description}</p>
      
    </div>
  </div>
  <div class="blur_back bright_back"><img style={{ height: " 100%", width: "100%"}} src={el.url} /></div>
  </div>
</div>

    )
}
export default MovieCard
