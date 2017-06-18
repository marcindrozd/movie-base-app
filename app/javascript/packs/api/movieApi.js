class MovieApi {
  static getAllMovies() {
    return fetch("/api/v1/movies").then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default MovieApi;
