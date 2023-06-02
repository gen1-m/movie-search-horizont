import axios from "axios";

export default async function handler(req, res) {
  const { search, id } = req.query;

  /* --------- Search Query Backend ---------- */
  const response = await axios.get(
      `http://www.omdbapi.com/?s=${search || "Popular"}&apikey=155990d6`
  );
  const movies = response.data;
  if (movies.Error === "Movie not found!") {
    res.status(200).json({ movies: [] });
    return;
  }
  if (movies.Error) {
    res.status(500).json({ error: "Internal server error." });
    return;
  }

  /* --------------- Specific Movie Backend -------------- */
  const specResponse = await axios.get(
      `http://www.omdbapi.com/?i=${id || "tt0207201"}&plot=full&apikey=155990d6`
  );
  const movie = specResponse.data;
  if (movie.Error) {
    res.status(500).json({ movie: "" });
    return;
  }
  res.status(200).json({ movies: movies.Search, movie: movie });
}
