import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MovieInfoExtended from "@/pages/movie/[id]/MovieInfoExtended";
import {
    addFavorite,
    removeFavorite,
} from "@/components/utils/FavoriteUtils";
import {
    saveToLocalStorage,
    getFromLocalStorage
} from "@/components/utils/LocalStorageUtils";

export default function Info() {
    const router = useRouter();
    const { id } = router.query;
    const [movie, setMovie] = useState("");
    const [favorites, setFavorites] = useState([]);

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

    useEffect(() => {
        const movieFavourites = getFromLocalStorage();
        setFavorites(movieFavourites);
    }, []);

    useEffect(() => {
        saveToLocalStorage(favorites);
    }, [favorites]);

    const handleAddFavorite = (movie) => {
        const updatedFavorites = addFavorite(favorites, movie);
        setFavorites(updatedFavorites);
    };

    const handleRemoveFavorite = (imdbID) => {
        const updatedFavorites = removeFavorite(favorites, imdbID);
        setFavorites(updatedFavorites);
    };

    return (
        <div className="flex p-16 px-64">
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
