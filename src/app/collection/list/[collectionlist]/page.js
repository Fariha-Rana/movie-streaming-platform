"use client"
import React from 'react';
import MovieImageList from '@/components/MovieImageList';
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { TailSpin } from "react-loader-spinner";
import { getCollectionList } from '@/utils/movieApi';
import Link from 'next/link';

const MovieCollectionResults = () => {
    const [filteredCollection, setFilteredCollection] = useState(null);
    const apiurl = usePathname();
  
    useEffect(() => {
      let decodedUrl = decodeURIComponent(apiurl);
      decodedUrl = decodedUrl.replace('/collection/list/', '');

      if (decodedUrl) {
        getCollectionList(decodedUrl)
        .then((data) => {
          setFilteredCollection(data);
        })
        .catch((error) => {
          alert(" Error ❌" + " " + error.message);
        });
      }
    }, [apiurl]);
  
    if (filteredCollection === null) {
      return <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
      <TailSpin color="#00BFFF" height={80} width={80} />
    </div>;
    }
  return (
    <div className='bg-gray-100 p-4 rounded shadow flex flex-col justify-center items-center'>
     <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {filteredCollection.map((collection) => (
        <div key={collection.id} className="bg-white p-4 rounded flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold m-4 text-center">{collection.name}</h2>
          <div className="m-2 flex justify-center items-center">
          <MovieImageList
            src={`https://image.tmdb.org/t/p/w500/${collection.poster_path}`}
            alt={`${collection.name} Poster`}
            className="w-48 h-auto"
          />
          </div>
         <div className='"m-4 p-4 flex  flex-col justify-center items-center'>
         <p className="text-gray-500 m-2"><span className='font-bold text-lg'>Original Language:</span> {collection.original_language}</p>
          <p className="text-gray-500 m-2"><span className='font-bold text-lg'>Overview:</span> {collection.overview || 'N/A'}</p>
         </div>
          <Link className='text-blue-500 text-lg text-center m-2' href={`/collection/list/id/${collection.id}`}>Get all the movies in this collection</Link>
        </div>
      ))}
      </div>
    </div>
  );
};

export default MovieCollectionResults;


 
