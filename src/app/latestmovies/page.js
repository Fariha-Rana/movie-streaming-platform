// latest movies
"use client";
import React, { useState, useEffect } from "react";
import { getLatestMovies } from "@/utils/movieApi";
import MovieImageList from "@/components/MovieImageList";
import { TailSpin } from "react-loader-spinner";

const LatestMovies = () => {
  const [latestMovies, setlatestMovies] = useState([]);

  useEffect(() => {
    getLatestMovies()
      .then((response) => {
        setlatestMovies([...latestMovies, ...response]);
      })
      .catch((error) => {
        alert(" Error ❌" + " " + error.message);
      });
  }, [latestMovies]);

  return (
    <div>
      <h1
        className="text-5xl font-thin text-center m-6"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        Latest Releases{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {latestMovies && latestMovies.length > 0 ? (
          latestMovies.map((movie, i) => (
            <div
              className="bg-gray-100 p-4 rounded shadow flex flex-col justify-center items-center"
              key={i}
            >
              <div className="flex justify-center items-center">
                <MovieImageList
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
              <h2 className="text-xl font-semibold text-center m-2">
                {movie.title}
              </h2>
              <p className="text-gray-600 text-sm m-2">{movie.release_date}</p>
              <p className="text-gray-700 m-2">{movie.overview}</p>
              <div className="flex items-center m-2">
                <span className="text-yellow-500 font-semibold">
                  {movie.vote_average.toFixed(1)}
                </span>
                <span className="text-sm text-gray-600 ml-1">/10</span>
              </div>
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
};

export default LatestMovies;
