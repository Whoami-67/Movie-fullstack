import "../styles/MovieCard.css";
import MovieDetail from "../pages/MovieDetail";
import { Link } from "react-router-dom";
function MovieCard({ movie }) {
  return (
    <div>
      <div className="card-image-container">
        <Link to={`/movieDetail/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="card-image"
          />
        </Link>

        <div className="rating">
          <div className="diamond"></div>
          <span className="rating-text">{movie.vote_average.toFixed(1)}</span>
        </div>
      </div>
      <p className="card-title">{movie.title}</p>
    </div>
  );
}
export default MovieCard;
