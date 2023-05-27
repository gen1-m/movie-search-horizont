import MovieCard from "@/components/MovieCards";

export default function PopularMovie({ movies }) {


    return (
        <div className={"bg-gray-900 rounded-b-2xl rounded-t-2xl container m-auto py-2 mt-8 mb-5"}>
            <h1 className={"text-white text-2xl"}>
                What's Popular?
            </h1>
        </div>
    )
};
