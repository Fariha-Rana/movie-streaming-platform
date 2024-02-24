"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation'

const MovieCollectionSearch = () => {
  const [searchParams, setSearchParams] = useState({
    query: 'marvel',
    includeAdult: false,
    language: 'en',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSearchParams({
      ...searchParams,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
 
  const router = useRouter()
  const handleSearch = (e) => {
    e.preventDefault();
    const apiParams = `search/collection?query=${searchParams.query}&include_adult=${searchParams.includeAdult}&language=${searchParams.language}&page=1`
    router.push(`/collection/list/${encodeURIComponent(apiParams)}`)
  };

  return (
    <div className="min-h-max flex flex-col items-center justify-center">
    <h1 className="text-2xl font-semibold text-center m-10" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>Get Movies Collection</h1>
    <div className="bg-gray-100 p-8 rounded shadow-lg min-w-64">
      <div className="m-4">
        <label className="block text-sm m-1 text-center font-medium">Enter a keyword:</label>
        <input
          type="text"
          name="query"
          value={searchParams.query}
          onChange={handleInputChange}
          className="w-full p-2 border rounded text-center"
        />
      </div>
      <div className="m-4">
        <label className="block text-sm font-medium m-4 text-center">
          Include Adult:
          <input
            type="checkbox"
            name="includeAdult"
            checked={searchParams.includeAdult}
            onChange={handleInputChange}
            className="ml-2"
          />
        </label>
      </div>
      <div className="m-4 flex flex-col">
        <label className="block text-sm font-medium text-center">Language:</label>
        <select
          id="language"
          name="language"
          value={searchParams.language}
          onChange={handleInputChange}
          className="mt-1 p-2 rounded border border-gray-300 text-center"
        >
          <option value="">Select</option>
          <option value="en-US">English (US)</option>
          <option value="es">Spanish (Spain)</option>
          <option value="fr">French (France)</option>
        </select>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer"
        >
          Get
        </button>
      </div>
    </div>
  </div>
  )  
};

export default MovieCollectionSearch;
