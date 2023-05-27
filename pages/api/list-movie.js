import axios from "axios";

export default async function handler(req, res) {
  const response = await axios(`http://www.omdbapi.com/?s=${req.query.search || "Popular"}&apikey=155990d6`);
  const movies = response.data;
  if (movies.Error === "Movie not found!") {
    res.status(200).json({ movies: [] });
    return;
  }
  if (movies.Error) {
    res.status(500).json({ error: "Internal server error." });
  }
  res.status(200).json({ movies: movies.Search })
  // return { movies.Search };

}

// const res = await fetch(`http://www.omdbapi.com/?s=${searchValue || "Popular"}&apikey=155990d6`);
// const movieList = await res.json();
