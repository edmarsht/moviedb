import axios from "axios";
import React, { useEffect } from "react";
import "./Form.css";

function Form() {
    useEffect(() => {
axios.get(
`https://api.themoviedb.org/3/search/movie?api_key=058ed05a25fdffd8c072453602b6909f&query=star&language=en-US&page=1&include_adult=false`
).then((data) => console.log(data));
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
      <div className="form__resultat">Résultat</div>
    </div>
  );
}

export default Form;
