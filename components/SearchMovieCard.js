import Link from "next/link";

export default function SearchMovieCard(props) {
    const { movie } = props;
    return (
        <div>
            <div className="image-container p-6 bg-amber-200 max-w-xs mx-auto max-h-full rounded-lg cursor-pointer">
                <img alt={'movie'} src={movie.Poster} className="mx-auto rounded" width={150} height={150} />
            </div>
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
};