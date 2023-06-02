import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import React, {useState} from "react";
import Image from "next/image";

export default function Navbar() {
    const [movies] = useState([]);
    return (
        <nav className="bg-purple-950 p-4">
            <div className="font-bold font-neue text-neutral-100 mx-auto container
            tracking-widest">
                <Link href="/" className="flex mx-auto">
                    <h1 className="text-base md:text-3xl">Horizont
                        <span className="text-yellow-600">
                            Movies
                        </span>
                    </h1>
                    <div className="relative left-1 bottom-1">
                        <Image alt={"icon"} src={"/movie_icon.png"} width={35} height={35} />
                    </div>
                </Link>
            </div>
            <div>
                <SearchBar updateMovies={movies} />
            </div>
        </nav>
    )
};

