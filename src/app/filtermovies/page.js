"use client"
import { useState } from 'react';;
import { useRouter } from 'next/navigation'
 
function MovieFilterForm() {
    const [filterOptions, setFilterOptions] = useState({
        certification: 'G',
        language: 'en-us',
        genres: 'horror',
    year: '2020',
    adult: "false",
    video: "false",
  });

 const router = useRouter()

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    const { certification, language, genres, year, adult, video } = filterOptions;
    let apiurl = `discover/movie?certification=${certification}&include_adult=${adult}&include_video=${video}&language=${language}&page=1&sort_by=popularity.asc&with_genres=${genres}&year=${year}`;
    router.push(`/filtermovies/${encodeURIComponent(apiurl)}`)
  };
  encodeURI
  const handleInputChange = (e) => {
    let { name, value, type, checked } = e.target;
    checked = toString(checked)
    // alert(typeof checked)
    setFilterOptions({
      ...filterOptions,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <nav className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-semibold text-center m-8" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>Search your favourite movies</h2>
      <form onSubmit={handleFilterSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/3">
            <label htmlFor="certification" className="block text-md font-bold text-gray-600">
              Certification:
            </label>
            <select
              id="certification"
              name="certification"
              value={filterOptions.certification}
              onChange={handleInputChange}
              className="mt-1 p-2 rounded border border-gray-300"
            >
              <option value="">Select</option>
              <option value="G">G</option>
              <option value="PG">PG</option>
              <option value="PG-13">PG-13</option>
              <option value="R">R</option>
            </select>
          </div>
          <div className="w-full md:w-1/3">
            <label htmlFor="language" className="block text-md font-bold text-gray-600 m-2">
              Language:
            </label>
            <select
              id="language"
              name="language"
              value={filterOptions.language}
              onChange={handleInputChange}
              className="mt-1 p-2 rounded border border-gray-300"
            >
              <option value="">Select</option>
              <option value="en-US">English (US)</option>
              <option value="es-ES">Spanish (Spain)</option>
              <option value="fr-FR">French (France)</option>
            </select>
          </div>
          <div className="w-full md:w-1/3">
            <label htmlFor="genres" className="block text-md font-bold text-gray-600 m-2">
              Genres:
            </label>
            <select
              id="genres"
              name="genres"
              value={filterOptions.genres}
              onChange={handleInputChange}
              className="mt-1 p-2 rounded border border-gray-300"
            >
              <option value="">Select</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Horror">Horror</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/3">
            <label htmlFor="year" className="block text-md font-bold text-gray-600 m-2">
              Year:
            </label>
            <input
              type="number"
              id="year"
              name="year"
              value={filterOptions.year}
              onChange={handleInputChange}
              className="mt-1 p-2 rounded border border-gray-300"
            />
          </div>
          <div className="w-full md:w-1/3">
            <label className="block text-md font-bold text-gray-600 mt-10">
              Include Adult:
              <input
                type="checkbox"
                name="adult"
                onChange={handleInputChange}
                className="ml-2"
              />
            </label>
          </div>
          <div className="w-full md:w-1/3">
            <label className="block text-md font-bold text-gray-600 mt-10">
              Include Video:
              <input
                type="checkbox"
                name="video"
                onChange={handleInputChange}
                className="ml-2"
              />
            </label>
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md m-2">
          Apply Filters
        </button>
      </form>
    </nav>
  );
};


export default MovieFilterForm;
