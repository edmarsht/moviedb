import React, { useEffect, useState } from "react";
import "./Userlist.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Movie from "../../component/movie/Movie";


function Userlist() {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];
      for (let i = 0; i < moviesId.length; i++) {

        axios
          .get(
            `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=058ed05a25fdffd8c072453602b6909f&language=fr-FR&external_source=imdb_id`
          )
          .then((res) => setListData((listData) => [...listData, res.data ]));
      }
  }, []);

  return (
    <div className="userlist section__padding">
      <h2>Coup de coeur</h2>
      <div className="form__result">
        {listData.length > 0 ? listData.map((movie) => (<Movie key={movie.id} movie={movie} />)) : <div className="emptylist"><h3>Votre liste est vide.</h3></div>}
      </div>
    </div>
  );
}

export default Userlist;
