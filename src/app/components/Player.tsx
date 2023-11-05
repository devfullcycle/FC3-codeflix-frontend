import Link from 'next/link';
import { Movie } from '@/app/types/movie';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import '@vidstack/react/player/styles/base.css';

type Props = {
  movie: Movie;
};

export default async function Player({ movie }: Props) {
  return (
    <div className='flex h-screen justify-center align-middle'>
      <MediaPlayer
        controls={true}
        title={movie.title}
        src={movie.videoFileURL}
        className='ring-media-focus  aspect-video w-full rounded-md bg-black '
      >
        <Link href='/'>
          <ArrowLeftIcon className='media-playing:opacity-0 invisible absolute left-8 top-8 z-50 h-8 cursor-pointer text-white md:visible' />
        </Link>

        {/* mobile title  */}
        <div className='media-playing:opacity-0 visible absolute left-2 top-8 z-50 transition-opacity duration-500 md:invisible'>
          <div className='flex flex-row items-center gap-4'>
            <Link href='/'>
              <ArrowLeftIcon className='h-6' />
            </Link>
            <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
              {movie.title}
            </h1>
          </div>
        </div>

        <MediaProvider className='relative mx-auto flex aspect-video max-w-fit justify-center rounded-md align-middle'>
          <div className='media-playing:opacity-0 invisible absolute left-8 top-96 z-50 transition-opacity duration-500 md:visible'>
            <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
              {movie.title}
            </h1>
            <p className='text-shadow-md mt-4 max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
              {movie.description}
            </p>
          </div>
        </MediaProvider>
      </MediaPlayer>
    </div>
  );
}
