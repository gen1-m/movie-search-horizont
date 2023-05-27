import { useState } from "react";
import axios from "axios";

export default function SearchBar({ updateMovies }) {
    const [searchValue, setSearchValue] = useState("");
    const [result, setResult] = useState([]);
    async function onSubmit(e) {
        e.preventDefault();
        try {
            const res = await axios(`/api/list-movie?search=${searchValue}`);
            const resultData = res.data.movies;
            updateMovies = resultData;
            console.log(resultData);
            setResult(resultData);
        } catch (error) {
            console.error(error);
        }
    }
  return (
      <div className='flex'>
          <input
              className='form-control absolute top-3 right-24 rounded-b-md rounded-t-md px-2 py-0.5'
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              placeholder='Type to search...'
          ></input>
          <button
              className='bg-yellow-400 text-black font-semibold text-base rounded-b-md rounded-t-md px-2 py-0.5 absolute
                        top-3 right-5 hover:bg-amber-600 hover:text-white' onClick={onSubmit}>Search
          </button>
          {result.length > 0 && (
              <div>
                  <p className='text-gray-700'>Results:</p>
                  {result.map((movie, index) => (
                      <p key={index} className='text-gray-700'>
                          {movie.Title}
                          <img src={movie.Poster} alt={"Poster"} />
                      </p>
                  ))}
              </div>
          )}
      </div>
  )
};