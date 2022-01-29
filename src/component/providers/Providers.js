import React, { useEffect, useState } from "react";
import "./Providers.css";
import axios from "axios";

function Providers({ movie }) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie.id}/watch/providers?api_key=058ed05a25fdffd8c072453602b6909f&language=fr-FR`
      )
      .then((res) => setProviders(res.data.results.FR.flatrate));
  }, [movie.id]);

  return (
    <div>
      <div className="whatch__provider">
        {providers ? (
          providers
            .slice(0, 2)
            .map((watch) => (
              <img
                className="img_provider"
                src={"https://image.tmdb.org/t/p/w500" + watch.logo_path}
                alt=""
              />
            ))
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Providers;
