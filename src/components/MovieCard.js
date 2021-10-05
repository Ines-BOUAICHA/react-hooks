import React from 'react'
import Rating from './Rating/Rating'
const MovieCard = ({el}) => {
    return (
        <div>
<div class="movie_card" id="bright">
  <div>
    <div>
      <img src={el.url}/>
      <h1>{el.name}</h1>
      <h4>{el.date}</h4>
      <span><Rating rate={el.rate}/></span>
      <p>{el.type}</p>
      <p> {el.description} </p>
    </div>
  
  </div>
  
</div>
         </div>
    )
}
export default MovieCard
