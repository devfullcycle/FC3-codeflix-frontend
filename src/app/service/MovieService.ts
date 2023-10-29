import { Movie } from '../types/Movie';
import { config } from '@/app/config';

const { API_URL } = config;

interface RequestOptions {
  page?: number;
  _limit?: number;
}

const defaultOptions: RequestOptions = {
  page: 1,
  _limit: 10,
};

interface ApiQueryParameters {
  [key: string]: string | number | boolean;
}

export async function apiRequest<T>(
  endpoint: string,
  query: ApiQueryParameters = {},
  options: RequestOptions = {}
): Promise<T> {
  const mergedOptions: RequestOptions = { ...defaultOptions, ...options };
  const queryString: string = buildQueryString({ ...query, ...mergedOptions });

  try {
    const response = await fetch(`${API_URL}/${endpoint}${queryString}`);
    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    throw error;
  }
}

function buildQueryString(params: ApiQueryParameters): string {
  const query = Object.entries(params)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => [key, encodeURIComponent(String(value))]);

  return `?${new URLSearchParams(Object.fromEntries(query)).toString()}`;
}

export const searchMovies = async (
  title: string = '',
  genre: string = '',
  options?: RequestOptions
): Promise<Movie[]> => {
  const query: Record<string, string> = {
    title_like: encodeURIComponent(title),
  };

  if (genre) {
    query.genres_like = encodeURIComponent(genre);
  }

  return apiRequest('movies', query, options);
};

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
