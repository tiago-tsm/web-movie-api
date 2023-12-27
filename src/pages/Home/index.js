import { Link } from "react-router-dom";
import { Container, MovieList, Movie } from "./styles";
import { useState, useEffect } from "react";

function Home() {
  const [movies, setMovies] = useState([]);

  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=8be6d2f7024e8b4785b9b9eb4ae8da1b&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <Container>
      <h1>Movies</h1>
      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <Link to={`/details/${movie.id}`}>
                {" "}
                <img
                  src={`${image_path}${movie.poster_path}`}
                  alt={movie.title}
                ></img>
              </Link>

              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MovieList>
    </Container>
  );
}
export default Home;
