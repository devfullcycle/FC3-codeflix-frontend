import { Movie } from '../types/Movie';
import { RequestOptions, apiRequest } from './ApiRequest';

export interface ApiQueryParameters {
  [key: string]: string | number | boolean;
}

export async function searchMovies(
  title: string = '',
  genre: string = '',
  options?: RequestOptions
): Promise<Movie[]> {
  const query: Record<string, string> = {
    title_like: title,
  };

  if (genre) {
    query.genres_like = genre;
  }

  return apiRequest<Movie[]>('movies', query, options);
}

export const getMovieById = async (id: string): Promise<Movie> => {
  return apiRequest(`movies/${encodeURIComponent(id)}`);
};

export const getFeaturedMovies = async (id: string): Promise<Movie> => {
  return apiRequest(`featured/${id}`);
};

export const getMoviesByGenre = async (
  genre: string,
  options?: RequestOptions
): Promise<Movie[]> => {
  return apiRequest(
    'movies',
    { genres_like: encodeURIComponent(genre) },
    options
  );
};
