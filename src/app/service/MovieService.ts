import { Movie, Movies } from '../types/movie';
import { RequestOptions, apiRequest } from './ApiRequest';

export const getMovieById = async (id: string): Promise<Movie> => {
  return apiRequest(`movies/${encodeURIComponent(id)}`);
};

export const getFeaturedMovie = async (id: string): Promise<Movie> => {
  return apiRequest(`featured/${id}`);
};

export const getMoviesByGenre = async (
  genre: string,
  options?: RequestOptions
): Promise<Movies> => {
  return apiRequest(`movies`, { genres_like: genre }, options);
};

export const searchMovies = async (
  title: string = '',
  genre: string = '',
  options: RequestOptions = {
    _limit: 100,
  }
): Promise<Movies> => {
  return apiRequest(
    `movies`,
    {
      title_like: title,
      genres_like: genre,
    },
    options
  );
};
