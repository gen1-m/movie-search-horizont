import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MovieInfoExtended from "@/components/MovieInfoExtended";
import {
    addFavorite,
    removeFavorite,
} from "@/components/utils/FavoriteUtils";
import {
    saveToLocalStorage,
    getFromLocalStorage
} from "@/components/utils/LocalStorageUtils";

/* -------------- Info component -------------- */
export default function Info() {
    const router = useRouter();
    const { id } = router.query;
    const [movie, setMovie] = useState(undefined);
    const [favorites, setFavorites] = useState([]);

    /* --- Fetch movie data from the API based on the ID in the URL query --- */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios(`/api/list-movie/?id=${id}`);
                const value = res.data.movie;
                setMovie(value);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [id]);

    /* --- Load favorite movies from local storage on initial component render --- */
    useEffect(() => {
        const movieFavourites = getFromLocalStorage();
        setFavorites(movieFavourites);
    }, []);

    /* --- Save favorite movies to local storage whenever favorites state changes --- */
    useEffect(() => {
        saveToLocalStorage(favorites);
    }, [favorites]);

    /* --- Add a movie to favorites --- */
    const handleAddFavorite = (movie) => {
        const updatedFavorites = addFavorite(favorites, movie);
        setFavorites(updatedFavorites);
    };

    /* --- Remove a movie from favorites --- */
    const handleRemoveFavorite = (imdbID) => {
        const updatedFavorites = removeFavorite(favorites, imdbID);
        setFavorites(updatedFavorites);
    };

    return (
        <div className="flex p-16 px-64">
            {/* --- Render the MovieInfoExtended component with movie data --- */}
            {movie && (
                <MovieInfoExtended
                    movie={movie}
                    addFavorite={handleAddFavorite}
                    removeFavorite={handleRemoveFavorite}
                    isFavorite={favorites.some((fav) => fav.imdbID === movie.imdbID)}
                />
            )}
        </div>
    );
}
