import React from "react";
import "./Movie.css";
import Providers from "../../component/providers/Providers";


function Movie({ movie }) {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };

  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    return genreArray.slice(0, 2).map((genre) => <p key={genre}>{genre}</p>);
  };

  const addStorage = () => {
    let storedData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];
    if (!storedData.includes(movie.id.toString())) {
      storedData.push(movie.id);
      window.localStorage.movies = storedData;
    }
  };

  const deleteStorage = () => {
    let storedData = window.localStorage.movies.split(",");

    let newData = storedData.filter((id) => id != movie.id);

    window.localStorage.movies = newData;

    window.location.reload();

  
  };

  return (
    <div class="card">
      <img
        src={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
            : "./image_default.png"
        }
        className="card__image"
        alt="Poster movie"
      />
      <div className="card__overlay">
        <div className="card__header">
          <div className="card__header-text">
            <h3 className="card__title">{movie.title}</h3>
          </div>
        </div>

        {/* -------------------------------------------Date-------------------------------- */}

        {/* {movie.release_date ? (
            <p className="card__description">
              Sorti le {dateFormater(movie.release_date)}
            </p>
          ) : (
            ""
          )} */}

        {/* -------------------------------------------Date-------------------------------- */}

        <div className="reviewandfavorite">
          <h3 className="card__title">{movie.vote_average}/10 ☆</h3>
          {movie.genre_ids ? <div className="button__favorite" onClick={() => addStorage()}>
            <button>❤</button>
          </div> : <div className="button__favorite" onClick={() => deleteStorage()}>
            <button>⤫</button>
          </div>}
          
        </div>
        <div className="card__title"><Providers key={movie.id} movie={movie}/></div>
        <p className="card__description description">{movie.overview}</p>
        {movie.genre_ids ? (
          <p className="card__description genre">{genreFinder()}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Movie;
