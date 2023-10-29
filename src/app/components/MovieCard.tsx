import { MovieCardInfo } from './MovieCardInfo';
import { MovieCardProps } from './MovieRow';
import { MovieCardImage } from './MovieCardImage';
import Link from 'next/link';

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => (
  <div className='group relative min-h-[12vh] rounded bg-zinc-900 md:min-h-[12vw] '>
    <Link href={`/watch/${movie.id}`}>
      <MovieCardImage
        key={movie.id}
        title={movie.title}
        bannerFileURL={movie.bannerFileURL}
      />
    </Link>
    <MovieCardInfo
      id={movie.id}
      title={movie.title}
      genres={movie.genres}
      rating={movie.rating}
      bannerFileURL={movie.bannerFileURL}
    />
  </div>
);
