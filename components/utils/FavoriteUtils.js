export const addFavorite = (favorites, movie) => {
    return [...favorites, movie];
};

export const removeFavorite = (favorites, imdbID) => {
    return favorites.filter((movie) => movie.imdbID !== imdbID);
};

export const getFilteredPopular = (popular, favorites) => {
    return popular.filter((movie) => !favorites.find((fav) => fav.imdbID === movie.imdbID));
};
