import axios from "axios";
import {useEffect, useState} from "react";

// FINALLY IT"S DONEEEE
// need to make it mor prettier in the actual webpage
export default function MovieCard() {
    const [value, setValue] = useState("")
    const [popular, setPopular] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios(`/api/list-movie?search=Batman`);
                const pop = res.data.movies;
                setPopular(pop);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData()
    }, []);

    return (
        <div className={"container"}>
        {popular.length > 0 && (
            <div className="image-container d-flex justify-content-start m-3">
                {popular.map((movie, index) => (
                    <p key={index}>
                        <img src={movie.Poster} alt={"movie"} />
                    </p>
                ))}
            </div>
        )}
        </div>
    )
};