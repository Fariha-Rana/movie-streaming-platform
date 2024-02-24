"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { TailSpin } from "react-loader-spinner";
import { getFilteredMovies } from "@/utils/movieApi";
import MovieImageList from "@/components/MovieImageList";
import Link from "next/link";
function DisplayFilteredMovies() {
  const [filteredMovies, setFilteredMovies] = useState(null);
  const apiurl = usePathname();

  useEffect(() => {
    let decodedUrl = decodeURIComponent(apiurl);
    decodedUrl = decodedUrl.replace('/filtermovies/', '');

    if (decodedUrl) {
      getFilteredMovies(decodedUrl)
      .then((data) => {
        setFilteredMovies(data);
      })
      .catch((error) => {
        alert(" Error ❌" + " " + error.message);
      });
    }
  }, []);

  if (filteredMovies === null) {
    return <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
    <TailSpin color="#00BFFF" height={80} width={80} />
  </div>;
  }

  return (
    <div>
      <h1 className="text-5xl font-thin text-center m-8"  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Your Filtered Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMovies.length == 0 && <p className="text-red-500 text-center">No item found</p>}
        {filteredMovies?.map((movie) => (
          <div key={movie.id} className="bg-gray-100 p-4 m-4 rounded shadow flex flex-col justify-center items-center">
            {movie.poster_path && (
              <div className="flex justify-center items-center">
                <MovieImageList
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={`Poster for ${movie.title}`}
                />
              </div>
            )}
            <h2 className="text-lg font-bold m-2">{movie.title}</h2>
            <p className="text-sm text-gray-500 m-2">
              <span className="font-bold">Release Date:</span> {movie.release_date}
            </p>
            <p className="text-sm text-gray-700 m-2">
              <span className="font-bold">Popularity:</span> {movie.popularity}
            </p>
            <p className="text-sm m-2">{movie.overview}</p>
          { movie.video ? (
            <Link
              href={movie.video} 
              className="text-blue-500 block underline m-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Video
            </Link>
          ) : (
            <p className="text-sm text-red-400 m-2"> No video found</p>
          )

          }
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayFilteredMovies;
