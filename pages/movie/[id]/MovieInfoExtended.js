import Image from "next/image";

export default function MovieInfoExtended(props) {
    const { movie, addFavorite, removeFavorite, isFavorite } = props;
    const handleFavoriteClick = () => {
        if (isFavorite) {
            removeFavorite(movie.imdbID);
        } else {
            addFavorite(movie);
        }
    };

    console.log(movie);
    return(
        <div className="grid grid-cols-2 rounded-lg bg-gray-900">
            <div className="p-16 max-w-xl">
                <img alt={movie.imdbID} src={movie.Poster} width={500} height={500} className="rounded-lg" />
                {!isFavorite ? (
                    <button
                        className="hover:bg-red-700 bg-gray-200 rounded-3xl mx-48 mt-3"
                        onClick={handleFavoriteClick}
                    >
                        <Image
                            src="https://img.icons8.com/?size=512&id=O2cHQAU9zMlE&format=png"
                            alt="like-icon"
                            width={50}
                            height={50}
                        />
                    </button>
                ) : (
                    <button
                        className="bg-red-700 rounded-3xl mx-48 mt-3"
                        onClick={handleFavoriteClick}
                    >
                        <Image
                            src="https://img.icons8.com/?size=512&id=O2cHQAU9zMlE&format=png"
                            alt="like-icon"
                            width={50}
                            height={50}
                        />
                    </button>
                )}
                <div className="grid grid-flow-row text-white text-lg mt-4">
                    <div>
                        <span className="font-bold text-violet-400">Title: </span>  {movie.Title}
                    </div>
                    <div>
                        <span className="font-bold text-violet-400">Released: </span>  {movie.Released}
                    </div>
                    <div>
                        <span className="font-bold text-violet-400">Rated: </span>  "{movie.Rated}"
                    </div>
                    <div>
                        <span className="font-bold text-violet-400">Runtime: </span>  "{movie.Runtime}"
                    </div>
                    <div>
                        <span className="font-bold text-violet-400">Genre: </span>  "{movie.Genre}"
                    </div>
                    <div>
                        <span className="font-bold text-violet-400">Writer: </span>  {movie.Writer}
                    </div>
                    <div>
                        <span className="font-bold text-violet-400">Actors: </span>  {movie.Actors}
                    </div>
                    <div>
                        <span className="font-bold text-violet-400">Awards: </span>  {movie.Awards}
                    </div>
                    <div>
                        <span className="font-bold text-violet-400">Director: </span>  {movie.Director}
                    </div>
                    <div>
                        <span className="font-bold text-violet-400">Country: </span>  {movie.Country}
                    </div>
                    <div>
                        <span className="font-bold text-violet-400">Genre: </span>  {movie.Genre}
                    </div>
                    <div>
                        <span className="font-bold text-violet-400">Language: </span>  {movie.Language}
                    </div>
                    <div>
                        <span className="font-bold text-violet-400">IMDB Rating: </span>
                        <span className="text-amber-400 font-semibold"> {movie.imdbRating}/10.0 </span>
                        <span> with {movie.imdbVotes} votes</span>
                    </div>
                </div>
            </div>
            <div className="p-9 text-left text-xl">
                <h1 className="text-4xl text-center text-yellow-600 mb-3">
                    Plot of <span className="text-amber-800 font-bold"> {movie.Title} </span>
                </h1>
                <p className="text-lg text-white">
                    {movie.Plot}
                </p>
            </div>
        </div>
    );
};