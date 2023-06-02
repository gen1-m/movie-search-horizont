export const saveToLocalStorage = (items) => {
    localStorage.setItem('movie-search-horizont', JSON.stringify(items));
};

export const getFromLocalStorage = () => {
    const movieFavourites = JSON.parse(localStorage.getItem('movie-search-horizont'));
    return movieFavourites || [];
};
