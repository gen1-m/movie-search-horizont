import React, { useState } from "react";
import Hero from "@/components/Hero"
import PopularMovie from "@/components/PopularMovie";
import SearchBar from "@/components/SearchBar";
import MovieCard from "@/components/MovieCards";

export default function Home() {
  const [movies, setMovies] = useState("");
  return (
    <div>
        <title>Movie Search App</title>
        <Hero />
        {/*<PopularMovie movies={movies.Search} />*/}
        <MovieCard />
    </div>
  )
}