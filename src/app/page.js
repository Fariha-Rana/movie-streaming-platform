"use client";
import Link from "next/link";

import { useState, useEffect } from "react";
import {TailSpin} from 'react-loader-spinner';

import { getTrendingMovies } from "@/utils/movieApi";
import MovieImageList from "@/components/MovieImageList";

export default function TrendingMovies() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        alert(" Error ❌" + " " + error.message);
      } 
    }

    fetchData();
  }, []);

  return (
    <div>
   <h1 className="text-5xl font-thin text-center m-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Trending Movies</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.id} className="bg-grey p-4 rounded shadow flex flex-col justify-center items-center"> 
            <div className="flex justify-center items-center"> 
              <MovieImageList
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <h2 className="text-xl font-semibold text-center m-2">{movie.title}</h2>
            <Link href={`${movie.id}`} className="text-blue-500 text-lg text-center m-2">See details</Link> 
          </div>
        ))
      ) : (
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <TailSpin color="#00BFFF" height={80} width={80} />
          </div>
      )}
    </div>
  </div>  
  );
}
