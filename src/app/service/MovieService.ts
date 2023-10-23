import { Movie } from '../types/Movie';

const API_URL = 'http://localhost:3333/';

const apiRequest = async (endpoint: string): Promise<Movie[]> => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMovies = async (page: number = 1): Promise<Movie[]> => {
  return apiRequest(`movies?_page=${page}`);
};

export const getMoviesByTitle = async (
  title: string,
  page: number = 1
): Promise<Movie[]> => {
  return apiRequest(`movies?title_like=${encodeURIComponent(title)}`);
};

export const getMovieById = async (id: string): Promise<Movie[]> => {
  return apiRequest(`movies/${encodeURIComponent(id)}`);
};

export const getMovieByGenre = async (
  genre: string = '',
  page: number = 6
): Promise<Movie[]> => {
  return apiRequest(
    `movies?genres_like=${encodeURIComponent(genre)}&_limit=${page}`
  );
};
