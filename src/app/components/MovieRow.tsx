import { Movie as MovieType } from '@/app/types/Movie';
import { MovieCard } from '@/app/components/MovieCard';
import { getMoviesByGenre } from '@/app/service/MovieService';

interface MovieRowProps {
  sectionTitle: string;
}

export interface MovieCardProps {
  movie: MovieType;
}
export const MovieRow: React.FC<MovieRowProps> = async ({ sectionTitle }) => {
  const movies = await getMoviesByGenre(sectionTitle, {
    _limit: 8,
  });
  return (
    <div className='flex-col space-y-2'>
      <div className='flex'>
        <h2 className='my-4 inline-flex items-center text-2xl font-bold'>
          {sectionTitle}
        </h2>
      </div>

      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
