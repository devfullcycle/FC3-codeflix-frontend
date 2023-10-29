import {
  getFeaturedMovies,
  getMoviesByGenre,
  getMovieById,
  searchMovies,
  apiRequest,
} from './MovieService';

describe('MovieService', () => {
  describe('searchMovies', () => {
    it('returns a list of movies when no filter is applied', async () => {
      const response = await searchMovies();
      expect(response).toEqual({
        movies: [
          { genres: ['Comedy'], id: '1', title: 'Movie 1' },
          { genres: ['Drama'], id: '2', title: 'Movie 2' },
        ],
      });
    });

    it('returns movies filtered by title', async () => {
      const response = await searchMovies('Movie 1');
      expect(response).toEqual({
        movies: [{ genres: ['Comedy'], id: '1', title: 'Movie 1' }],
      });
    });

    it('returns movies filtered by genre', async () => {
      const response = await searchMovies('', 'Drama');
      expect(response).toEqual({
        movies: [{ genres: ['Drama'], id: '2', title: 'Movie 2' }],
      });
    });
  });

  describe('getMovieById', () => {
    it('returns a movie by its ID', async () => {
      const response = await getMovieById('1');
      expect(response).toEqual({
        id: '1',
        title: 'Movie 1',
        genres: ['Comedy'],
      });
    });
  });

  it('throws an error when the movie is not found', async () => {
    await expect(getMovieById('nonexistent')).rejects.toThrow(
      'API request failed: Not Found'
    );
  });

  describe('getFeaturedMovies', () => {
    it('returns a featured movie by its ID', async () => {
      const response = await getFeaturedMovies('1');
      expect(response).toEqual({
        id: '1',
        title: 'Movie 1',
        genres: ['Comedy'],
      });
    });
  });

  it('throws an error when the featured movie is not found', async () => {
    await expect(getFeaturedMovies('nonexistent')).rejects.toThrow(
      'API request failed: Not Found'
    );
  });

  describe('getMovieByGenre', () => {
    it('returns movies filtered by a specific genre', async () => {
      const response = await getMoviesByGenre('drama');
      expect(response).toEqual({
        movies: [{ genres: ['Drama'], id: '2', title: 'Movie 2' }],
      });
    });
  });

  it('throws an error when the API request fails', async () => {
    await expect(apiRequest('fail')).rejects.toThrow(
      'API request failed: Internal Server Error'
    );
  });
});
