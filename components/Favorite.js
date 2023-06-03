useEffect(() => {
    const movieFavourites = JSON.parse(
        localStorage.getItem('movie-search-horizont')
    );

    if(movieFavourites) {
        setFavorites(movieFavourites);
    }
}, []);

const saveToLocalStorage = (items) => {
    localStorage.setItem('movie-search-horizont', JSON.stringify(items));
}

const addFavorite = (movie) => {
    const favoriteList = [...favorites, movie];
    setFavorites(favoriteList);
    saveToLocalStorage(favoriteList);
};

const removeFavorite = (imdbID) => {
    const favoriteList = favorites.filter((movie) => movie.imdbID !== imdbID);
    setFavorites(favoriteList);
    saveToLocalStorage(favoriteList);
};

const filteredPopular = popular.filter(
    (movie) => !favorites.find((fav) => fav.imdbID === movie.imdbID)
);