import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "@/components/MovieCard";
import {
    addFavorite,
    removeFavorite,
    getFilteredPopular
} from "@/components/utils/FavoriteUtils";
import {
    saveToLocalStorage,
    getFromLocalStorage
} from "@/components/utils/LocalStorageUtils";


/* -------------- Popular Movies component -------------- */
export default function PopularMovies() {
    const [popular, setPopular] = useState([]);
    const [favorites, setFavorites] = useState([]);

    /* ------- useEffect hook for getting data from the api ------ */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios(`/api/list-movie?search=Popular`);
                const pop = res.data.movies;
                setPopular(pop);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    /* ---------- useEffect hook to retrieve favorites from local storage ----------- */
    useEffect(() => {
        const movieFavourites = getFromLocalStorage();
        setFavorites(movieFavourites);
    }, []);

    /* -------- Function to update favorites and save to local storage -------- */
    const updateFavorites = (newFavorites) => {
        setFavorites(newFavorites);
        saveToLocalStorage(newFavorites);
    };

    /* ---------- Event handler for adding a movie to favorites --------- */
    const handleAddFavorite = (movie) => {
        const updatedFavorites = addFavorite(favorites, movie);
        updateFavorites(updatedFavorites);
    };

    /* ---------- Event handler for removing a movie from favorites --------- */
    const handleRemoveFavorite = (imdbID) => {
        const updatedFavorites = removeFavorite(favorites, imdbID);
        updateFavorites(updatedFavorites);
    };

    /* ---------- Filter the popular movies based on the current favorites list --------- */
    const filteredPopular = getFilteredPopular(popular, favorites);

    return (
        <div className="bg-gray-900 py-7">
            <h1 className="p-3 mb-4 text-4xl text-yellow-600 text-center font-semibold">Popular</h1>
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-5 gap-x-3 px-5">
                {filteredPopular.map((movie) => (
                    <MovieCard
                        movie={movie}
                        key={movie.imdbID}
                        addFavorite={handleAddFavorite}
                        removeFavorite={handleRemoveFavorite}
                    />
                ))}
            </div>
            {favorites.length > 0 && (
                <div className="row d-flex align-items-center mt-4 mb-4">
                    <h1 className="p-3 mb-4 text-4xl text-yellow-600 text-center font-semibold">
                        Favorites
                    </h1>
                </div>
            )}
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-5 gap-x-3 px-5">
                {favorites.map((movie) => (
                    <MovieCard
                        movie={movie}
                        key={movie.imdbID}
                        addFavorite={handleAddFavorite}
                        removeFavorite={handleRemoveFavorite}
                        isFavorite
                    />
                ))}
            </div>
        </div>
    );
};
