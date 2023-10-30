"use client"
import { usePathname} from 'next/navigation';
import { useEffect, useState } from "react";
import { getCollectionById } from "@/utils/movieApi";
import MovieImageList from "@/components/MovieImageList";
import {TailSpin} from 'react-loader-spinner';

export default function CollectionDetailsById() {
  const [movieListCollection, setMovieListCollection] = useState(null);
  let movieId = usePathname()

  useEffect(() => {
    if (movieId) {
        let _movieId = movieId.replace('/collection/list/id/', '')
        getCollectionById(_movieId).
        then((data) => {
        setMovieListCollection(data)
      })
        .catch((error) => {
          alert(" Error ❌" + " " + error.message);
        });
    }
  }, [movieId]);

  if (!movieListCollection) {
    return  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
    <TailSpin color="#00BFFF" height={80} width={80} />
  </div>
  }

  const { name, overview,parts } = movieListCollection;

  return (
<div className='bg-gray-100 p-4 rounded shadow flex flex-col justify-center items-center'>
    <h1 className="text-3xl font-bold m-4 text-center">{name}</h1>
    <p className="text-gray-600 text-lg mb-8 text-center">{overview || 'No overview available'}</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {parts.map((part) => (
            <div key={part.id} className="bg-white p-4 rounded flex flex-col justify-center items-center">
              <div className="m-2 flex justify-center items-center">
                <MovieImageList
                  src={`https://image.tmdb.org/t/p/w300${part.poster_path}`}
                  alt={part.title}
                />
              </div>
              <h3 className="text-lg font-semibold m-2 items-center">{part.title}</h3>
              <p className="text-gray-600 mt-2"><span className='font-bold'>Popularity</span> {part.popularity}</p>
              <p className="text-gray-600 mt-2">{part.overview || 'No overview available'}</p>
            </div>
          ))}
        </div>
      </div>
  )  
};

