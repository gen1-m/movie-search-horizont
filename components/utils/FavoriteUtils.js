/* --- Utility function to add a movie to favorites --- */
export const addFavorite = (favorites, movie) => {
    return [...favorites, movie];
};

/* --- Utility function to remove a movie from favorites --- */
export const removeFavorite = (favorites, imdbID) => {
    return favorites.filter((movie) => movie.imdbID !== imdbID);
};

/* --- Utility function to get popular movies that are not in favorites --- */
export const getFilteredPopular = (popular, favorites) => {
    return popular.filter((movie) => !favorites.find((fav) => fav.imdbID === movie.imdbID));
};
