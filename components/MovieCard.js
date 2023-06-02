import Link from "next/link";
import Image from "next/image";

/* -------------- MovieCard component -------------- */
export default function MovieCard(props) {
    const { movie, addFavorite, removeFavorite, isFavorite } = props;

    /* Handle favorite click event */
    const handleFavoriteClick = () => {
        if (isFavorite) {
            removeFavorite(movie.imdbID);
        } else {
            addFavorite(movie);
        }
    };

    return (
        <div>
            <div className="image-container p-6 bg-amber-200 max-w-xs mx-auto max-h-full rounded-lg cursor-pointer">
                <img
                    alt="movie"
                    src={movie.Poster}
                    className="mx-auto rounded"
                    width={200}
                    height={200}
                />
                <button
                    className="hover:bg-red-700 rounded-3xl mx-28 mt-3"
                    onClick={handleFavoriteClick}
                >
                    {/* Like icon */}
                    <Image
                        src="https://img.icons8.com/?size=512&id=O2cHQAU9zMlE&format=png"
                        alt="like-icon"
                        width={35}
                        height={35}
                    />
                </button>
            </div>

            {/* Navigate to the movie details page */}
            <Link href={`/movie/${movie.imdbID}`}>
                <div className="image-container p-2 mt-6 bg-amber-900 max-w-xs mx-auto max-h-full rounded-lg cursor-pointer">
                    <div className="text-center text-gray-300">
                        <div className="text-lg font-semibold p-2">{movie.Title}</div>
                        <div className="text-sm">{movie.Year}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
