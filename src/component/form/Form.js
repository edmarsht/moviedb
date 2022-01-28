import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Form.css";
import Movie from "../../component/movie/Movie";


function Form() {
const [moviesData, setMoviesData] = useState([]);
const [search, setSearch] = useState("");
const [goodToBad, setGoodToBad] = useState(null)

    useEffect(() => {
axios.get(
`https://api.themoviedb.org/3/search/movie?api_key=058ed05a25fdffd8c072453602b6909f&query=${search}&language=fr-FR&page=1&include_adult=false`
).then((res) => setMoviesData(res.data.results));
    }, [search]);



    // -------------------------------------------- Lien tv serie and movie 
    // `https://api.themoviedb.org/3/search/multi?api_key=058ed05a25fdffd8c072453602b6909f&language=fr-FR&query=${search}&page=1&include_adult=false`



    // -------------------------------------------- Lien pour serie tv
//     useEffect(() => {
// axios.get(
// `https://api.themoviedb.org/3/search/tv?api_key=058ed05a25fdffd8c072453602b6909f&language=fr-FR&page=1&query=${search}&include_adult=false`
// ).then((res) => setMoviesData(res.data.results));
//     }, [search]);

  return (
    <div className="form">
      <div className="form__container">
        <form>
          <input type="text" placeholder="Search a movie" id="search-movie"                 autoComplete="off"
 onChange={(e) => setSearch(e.target.value)} />
          {/* <button className="noborder-button" type="submit" Value="Search">
            Search
          </button> */}
        </form>
      </div>
      <div className="form__sortedby">
        <button className="noborder-right" id="goodtobad" onClick={() => setGoodToBad("goodtobad")}>
          Top ↑
        </button>
        <button className="noborder-left" id="badtogood" onClick={() => setGoodToBad("badtogood")}>
          ↓ Down
        </button>
      </div>
      <div className="form__result">
          {moviesData.slice(0, 12).sort((a, b) => {
              if (goodToBad === "goodtobad") {
                  return b.vote_average - a.vote_average
                } else if (goodToBad === "badtogood") {
                return a.vote_average - b.vote_average}
          })
          .map((movie) => 
          <Movie key={movie.id} movie={movie} />
          )}
      </div>
    </div>
  );
}

export default Form;
