"use client"
import { usePathname} from 'next/navigation';
import { useEffect, useState } from "react";
import { getMovieDetails } from "@/utils/movieApi";
import MovieImageList from "@/components/MovieImageList";
import Link from "next/link";
import {TailSpin} from 'react-loader-spinner';

export default function Page() {
  const [movie, setMovie] = useState(null);
  const movieId = usePathname()

  useEffect(() => {
    if (movieId) {
      getMovieDetails(movieId)
      .then((data) => {
       setMovie(data);
      })
    .catch((error) => {
      alert(" Error ❌" + " " + error.message);
    });
    }
  }, [movieId]);

  if (!movie || !movieId){
    return <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
    <TailSpin color="#00BFFF" height={80} width={80} />
  </div>
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="bg-gray-50 p-4 rounded shadow-lg mx-auto w-full max-w-3xl">
      {movie && (
        <div className='flex flex-col justify-center items-center'>
        <h1 className="text-3xl font-bold text-center mb-4">{movie.title}</h1>
        <div className="mx-auto mb-2"> 
          <MovieImageList src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
        </div>
        <div className="text-center"> 
          <h4 className="font-bold">Overview: </h4>
          <p className="m-2">{movie.overview}</p>
        </div>
        <p className="m-2"><span className="font-bold">Genres:</span> {movie.genres.map((genre) => genre.name).join(", ")}</p>
        <p className="m-2"><span className="font-bold">Release Date:</span> {movie.release_date}</p>
        <p className="m-2"><span className="font-bold">Runtime:</span> {movie.runtime} minutes</p>
        <p className="m-2"><span className="font-bold">IMDb Rating:</span> {movie.vote_average}</p>
        <p className="m-2">
          <span className="font-bold">Watch Now:</span>{" "}
            <Link className="text-blue-500 text-lg text-center m-2" href={movie.homepage} target="_blank" rel="noopener noreferrer">
              Visit Website
            </Link>
          </p>
        </div>
      )}
    </div>
  </div>  
  );
      }