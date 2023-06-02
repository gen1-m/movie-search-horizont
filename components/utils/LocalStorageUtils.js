export function saveToLocalStorage(favorites) {
    try {
        const favoritesJSON = JSON.stringify(favorites);
        localStorage.setItem("favorites", favoritesJSON);
    } catch (error) {
        console.error("Error saving favorites to local storage:", error);
    }
}


export function getFromLocalStorage() {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
        try {
            return JSON.parse(favorites);
        } catch (error) {
            console.error("Error parsing favorites from local storage:", error);
        }
    }
    return [];
}

