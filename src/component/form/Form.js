import React from "react";
import "./Form.css";

function Form() {
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
