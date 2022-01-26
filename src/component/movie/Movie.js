import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ movie }) {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };
  return (
    <div>
      <a href="" class="card">
        <Link to={"/" + movie.title}>
          <img
            src={
              movie.poster_path
                ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
                : "./image_default.png"
            }
            className="card__image"
            alt="Poster movie"
          />
        </Link>
        <div className="card__overlay">
          <div className="card__header">
            <div className="card__header-text">
              <h3 className="card__title">{movie.title}</h3>
            </div>
          </div>
          {movie.release_date ? (
            <p className="card__description">
              Sorti le {dateFormater(movie.release_date)}
            </p>
          ) : (
            ""
          )}
          <h3 className="card__description">{movie.vote_average}/10 ☆</h3>
        </div>
      </a>
    </div>
  );
}

export default Movie;
