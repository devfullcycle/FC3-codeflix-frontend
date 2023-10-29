// mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.get('https://codeflix-api.vercel.app/movies', (req, res, ctx) => {
    const url = new URL(req.url.toString());
    const title = url.searchParams.get('title_like');
    const genres = url.searchParams.get('genres_like');

    if (title) {
      return res(
        ctx.json({
          movies: [{ id: '1', title: 'Movie 1', genres: ['Comedy'] }],
        })
      );
    }

    if (genres) {
      return res(
        ctx.json({
          movies: [{ id: '2', title: 'Movie 2', genres: ['Drama'] }],
        })
      );
    }

    return res(
      ctx.json({
        movies: [
          { id: '1', title: 'Movie 1', genres: ['Comedy'] },
          { id: '2', title: 'Movie 2', genres: ['Drama'] },
        ],
      })
    );
  }),

  rest.get('https://codeflix-api.vercel.app/movies/:id', (req, res, ctx) => {
    const { id } = req.params;

    if (id === '1') {
      return res(ctx.json({ id: '1', title: 'Movie 1', genres: ['Comedy'] }));
    }

    return res(ctx.status(404), ctx.json({ message: 'Movie not found' }));
  }),

  rest.get('https://codeflix-api.vercel.app/featured/:id', (req, res, ctx) => {
    const { id } = req.params;

    if (id === '1') {
      return res(ctx.json({ id: '1', title: 'Movie 1', genres: ['Comedy'] }));
    }

    return res(ctx.status(404), ctx.json({ message: 'Movie not found' }));
  }),

  rest.get('https://codeflix-api.vercel.app/fail', (req, res, ctx) => {
    return res(ctx.status(500), ctx.json({ message: 'Internal Server Error' }));
  }),

];
