import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../services/api2";
import LoadingIndicator from "../pages/LoadingIndicator";
import NavBar from "../components/NavBar";
import "../styles/MovieCard.css";
import "../styles/MovieDetail.css";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const Movie = await getMovieDetail(id);
        setMovie(Movie);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadMovie();
  }, []);

  return (
    <>
      <NavBar />
      {loading ? (
        <div className="loading-center">
          <LoadingIndicator />
        </div>
      ) : (
        <div className="movie-detail-container">
          <div className="movie-image-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="card-image-container"
            />
          </div>
          <div className="movie-info-container">
            <h1>{movie.title}</h1>
            <p>{movie.release_date}</p>
            <h2>类型</h2>
            {movie.genres.map((genre) => (
              <span key={genre.id}>{genre.name} </span>
            ))}
            <p>受欢迎度:{movie.popularity.toFixed(1)}</p>
            <p>评分:{movie.vote_average.toFixed(1)}</p>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetail;
