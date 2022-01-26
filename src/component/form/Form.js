import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Form.css";
import Movie from "../../component/movie/Movie";


function Form() {
const [moviesData, setMoviesData] = useState([])

    useEffect(() => {
axios.get(
`https://api.themoviedb.org/3/search/movie?api_key=058ed05a25fdffd8c072453602b6909f&query=ron&language=en-US&page=1&include_adult=false`
).then((res) => setMoviesData(res.data.results));
    }, [])
  return (
    <div className="form">
      <div className="form__container">
        <form>
          <input type="text" placeholder="Search a movie" id="search-movie" />
          <button className="noborder-button" type="submit" Value="Search">
            Search
          </button>
        </form>
      </div>
      <div className="form__sortedby">
        <button className="noborder-right" id="goodtobad">
          Top ↑
        </button>
        <button className="noborder-left" id="badtogood">
          ↓ Down
        </button>
      </div>
      <div className="form__result">
          
          {moviesData.slice(0, 12).map((movie) => 
          <Movie key={movie.id} movie={movie} />
          )}
      </div>
    </div>
  );
}

export default Form;
