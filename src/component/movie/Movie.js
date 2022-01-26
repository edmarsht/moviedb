import React from "react";
import "./Movie.css"

function Movie({ movie }) {
  return (
    <div>
    <a href="" class="card">
      <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <div class="card__header-text">
            <h3 class="card__title">{movie.title}</h3>            
          </div>
        </div>
        <p class="card__description">{movie.overview}</p>
      </div>
    </a>      
    </div>
  );
}

export default Movie;
