import axios from "axios";
require("dotenv");

// const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const apiToken = process.env.NEXT_PUBLIC_API_READ_ACCESS_TOKEN;
const apiUrl = "https://api.themoviedb.org/3/";

const configOptions = function(QueryParam){
  const options = {
    method: 'GET',
    url: `${apiUrl}${QueryParam}`,
    headers: {
    accept: 'application/json',
    Authorization: apiToken
    }
  };
  return options
}

async function makeApiRequest(options){
  try {
    const response = await axios.request(options);
      return response;
    } catch (error) {
      console.error('Error fetching data: ', error);
      throw error;
    }
  }
 
// * exported functions starts here

// Imported by home page
export async function getTrendingMovies() {
  try {
    const options = configOptions("trending/all/day?language=en-US");
    const response = await makeApiRequest(options);
    if (response) return response.data.results;
  } catch (error) {
    console.error('Error in getTrendingMovies: ', error);
    throw error;
  }
}

// Imported by [movieId]
export async function getMovieDetails(movie_id) {
  try {
    const options = configOptions(`movie/${movie_id}?language=en-US`);
    const response = await makeApiRequest(options);
    if (response) return response.data;
  } catch (error) {
    console.error('Error in getMovieDetails: ', error);
    throw error;
  }
}

// Imported by latest movies page
export async function getLatestMovies(page = 1) {
  try {
    const options = configOptions(`movie/now_playing?language=en-US&page=${page}`);
    const response = await makeApiRequest(options);
    if (response) return response.data.results;
  } catch (error) {
    console.error('Error in getLatestMovies: ', error);
    throw error;
  }
}

// Imported by filtermovies[apiurl] page
export async function getFilteredMovies(url_params) {
  try {
    const options = configOptions(url_params);
    const response = await makeApiRequest(options);
    if (response) return response.data.results;
  } catch (error) {
    console.error('Error in getFilteredMovies: ', error);
    throw error;
  }
}

// Imported by collection/list/[collectionlist]
export async function getCollectionList(url_params) {
  try {
    const options = configOptions(url_params);
    const response = await makeApiRequest(options);
    if (response) return response.data.results;
  } catch (error) {
    console.error('Error in getCollectionList: ', error);
    throw error;
  }
}

// Imported by collection/list/[id]
export async function getCollectionById(collection_id) {
  try {
    const options = configOptions(`collection/${collection_id}?language=en-US`);
    const response = await makeApiRequest(options);
    if (response) return response.data;
  } catch (error) {
    console.error('Error in getCollectionById: ', error);
    throw error;
  }
}