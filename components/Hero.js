import Link from "next/link";

export default function Hero() {
    return (
        <div className="text-center bg-white pb-10">
            <h1 className="text-2xl text-gray-700 uppercase font-bold">
                Hello
            </h1>
            <Link href="/contact">
                <button className="bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4"> 
                    Click me
                </button>
            </Link>
        </div>
    );
};