const API_KEY = "ba736273c9cd98673015fbad73bda7b6";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const allMovies = [];
  for (let page = 1; page <= 5; page++) {
    const response = await fetch(
      `${BASE_URL}/movie/popular?language=zh&page=${page}&api_key=${API_KEY}`
    );
    const data = await response.json();
    allMovies.push(...data.results);
  }
  return allMovies;
};
export const getMovieDetail = async (id) => {
  const response = await fetch(
    `${BASE_URL}/movie/${encodeURIComponent(
      id
    )}?&api_key=${API_KEY}&language=zh`
  );
  const data = await response.json();
  return data;
};
export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=zh&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
