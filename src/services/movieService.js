import http from "./httpService";
export function getMovies() {
  return http.get("http://localhost:3900/api/movies");
}
export function deleteMovie(movieId) {
  return http.delete("http://localhost:3900/api/movies/" + movieId);
}
