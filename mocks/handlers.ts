import { config } from '@/app/config';
import { rest } from 'msw';

const { API_URL } = config;

const data = {
  movies: [
    { id: '1', title: 'Movie 1', genres: ['Comedy'] },
    { id: '2', title: 'Movie 2', genres: ['Drama'] },
  ],
};

export const handlers = [
  rest.get(`${API_URL}/movies`, (req, res, ctx) => {
    const url = new URL(req.url.toString());
    const title = url.searchParams.get('title_like');
    const genres = url.searchParams.get('genres_like');

    if (title) {
      return res(ctx.json({ movies: [data.movies[0]] }));
    }

    if (genres) {
      return res(ctx.json({ movies: [data.movies[1]] }));
    }

    return res(ctx.json(data));
  }),

  rest.get(`${API_URL}/movies/:id`, (req, res, ctx) => {
    const { id } = req.params;

    if (id === '1') {
      return res(ctx.json(data.movies[0]));
    }

    return res(ctx.status(404), ctx.json({ message: 'Movie not found' }));
  }),

  rest.get(`${API_URL}/featured/:id`, (req, res, ctx) => {
    const { id } = req.params;

    if (id === '1') {
      return res(ctx.json(data.movies[0]));
    }

    return res(ctx.status(404), ctx.json({ message: 'Movie not found' }));
  }),

  rest.get(`${API_URL}/fail`, (req, res, ctx) => {
    return res(ctx.status(500), ctx.json({ message: 'Internal Server Error' }));
  }),
];
