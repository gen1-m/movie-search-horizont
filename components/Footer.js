import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-purple-950 py-6">
            <div className="container mx-auto">
                <p className="text-gray-500 text-center">&copy; {new Date().getFullYear()} Movie Search Website for Horizont Labs. All rights reserved.
                    <button className="ml-2 rounded bg-purple-300 text-gray-600 py-0.5 px-2">
                        <a href={'https://github.com/UncrownedKing1/movie-search-horizont'}>Github Project</a>
                    </button>
                </p>
            </div>
        </footer>
    );
};

