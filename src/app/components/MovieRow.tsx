import { PlayIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { getMovieByGenre } from '../service/MovieService';
import { Movie as MovieType } from '../types/Movie';

interface MovieRowProps {
  sectionTitle: string;
}

interface MovieCardProps {
  movie: MovieType;
}

const MovieCardInfo: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className='
    min-w-[20vw]
    invisible absolute top-0 z-10 w-full scale-0 opacity-0 transition delay-300 duration-200 group-hover:-translate-y-[6vw] group-hover:scale-110 group-hover:opacity-100 sm:visible '>
      <Image
        src={movie.bannerFileURL}
        alt={movie.title}
        width={600}
        height={400}
        className='duration h-[12vw] w-full cursor-pointer rounded-t-md object-cover shadow-xl transition'
      />
      <div className='absolute z-10 w-full rounded-b-md bg-zinc-800 p-2 shadow-md transition lg:p-4 '>
        <div className='flex flex-row items-center gap-3'>
          <div className='flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white transition hover:bg-neutral-300 lg:h-10 lg:w-10'>
            <PlayIcon className='w-4 text-black lg:w-6' />
          </div>
        </div>
        <p className='font-semibol mt-4'>{movie.title} </p>
        <div className='mt-4 flex flex-row items-center gap-2'>
          <p className='text-[10px] text-white lg:text-sm'>
            {movie.duration} Mins
          </p>
        </div>
        <div className='mt-4 flex flex-row items-center gap-2 text-[8px] text-white lg:text-sm'>
          <p>{movie.genres.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

const MovieCardImage: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Image
      src={movie.bannerFileURL}
      alt={movie.title}
      fill={true}
      className='duration h-[12vw] w-full cursor-pointer rounded-md object-cover shadow-xl transition'
    />
  );
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => (
  <div className='group relative bg-zinc-900 min-h-[12vh] rounded md:min-h-[8vw] '>
    <MovieCardImage movie={movie} />
    <MovieCardInfo movie={movie} />
  </div>
);

export const MovieRow: React.FC<MovieRowProps> = async ({ sectionTitle }) => {
  const movies = await getMovieByGenre(sectionTitle);

  return (
    <div className='flex-col space-y-2'>
      <div className='flex'>
        <h2 className='inline-flex items-center text-2xl font-bold my-4'>
          {sectionTitle}
        </h2>
      </div>

      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
