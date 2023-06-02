import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import SearchMovieCard from "@/components/SearchMovieCard";
import {
    addFavorite,
    removeFavorite
} from "@/components/utils/FavoriteUtils";
import {
    saveToLocalStorage,
    getFromLocalStorage
} from "@/components/utils/LocalStorageUtils";

export default function SearchBar({ updateMovies }) {
    const [searchValue, setSearchValue] = useState("");
    const [result, setResult] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    async function onSubmit(e) {
        e.preventDefault();
        try {
            const res = await axios(`/api/list-movie?search=${searchValue}`);
            const value = res.data.movies;
            updateMovies = value;
            setResult(value);
            setIsOverlayOpen(true);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        const movieFavourites = getFromLocalStorage();
        setFavorites(movieFavourites);
    }, []);

    const updateFavorites = (newFavorites) => {
        setFavorites(newFavorites);
        saveToLocalStorage(newFavorites);
    };

    const handleAddFavorite = (movie) => {
        const updatedFavorites = addFavorite(favorites, movie);
        updateFavorites(updatedFavorites);
    };

    const handleRemoveFavorite = (imdbID) => {
        const updatedFavorites = removeFavorite(favorites, imdbID);
        updateFavorites(updatedFavorites);
    };

    const closeOverlay = () => {
        setIsOverlayOpen(false);
    };

    return (
        <div className="flex">
            <input
                className="form-control absolute top-5 right-24 rounded-b-md rounded-t-md px-2 py-0.5"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Type the movie title..."
            ></input>
            <button
                className="bg-yellow-400 text-black font-semibold text-base rounded-b-md rounded-t-md px-2 py-0.5 absolute top-5 right-5 hover:bg-amber-600 hover:text-white"
                onClick={onSubmit}
            >
                Search
            </button>
            {isOverlayOpen && (
                <div className="overlay">
                    <button className="bg-blend-overlay rounded-lg p-7" onClick={closeOverlay} >
                        <Image className="bg-white hover:bg-amber-600 rounded-lg" src={"https://img.icons8.com/?size=512&id=Hkynd8dUqzkE&format=png"} alt="button" width={50} height={50}/>
                    </button>
                    <div className="overlay-content grid grid-cols-1 sm:grid-cols-5 gap-x-6 gap-y-3 p-32">
                        {result.map((movie) => (
                            <div key={movie.imdbID} className="bg-blend-overlay">
                                <SearchMovieCard
                                    movie={movie}
                                    key={movie.imdbID}
                                    addFavorite={handleAddFavorite}
                                    removeFavorite={handleRemoveFavorite}
                                    isFavorite
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
