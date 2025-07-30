import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { getPopularMovies } from "../services/api2";
import "../styles/Movie-Grid.css";
import LoadingIndicator from "../pages/LoadingIndicator";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);
  return (
    <>
      <NavBar />
      {loading ? (
        <div className="loading-center">
          <LoadingIndicator />
        </div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
            />
          ))}
        </div>
      )}
    </>
  );
}
export default Home;
