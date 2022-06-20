import Movie from "./Movie";
import { getMovies } from "../../service/API";
import { useState, useEffect } from "react";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((res) => setMovies(res.data));
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="page-title">Selectionnez votre film</div>
      <div className="movie-list">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
