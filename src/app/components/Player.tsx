import '@vidstack/react/player/styles/base.css';
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { getMovieById } from '../service/MovieService';
import { Movie } from '../types/Movie';

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
          <ArrowLeftIcon className='absolute left-8 top-8 z-50 h-8 cursor-pointer text-white media-playing:opacity-0' />
        </Link>
        <MediaProvider className='relative mx-auto flex aspect-video max-w-fit justify-center rounded-md align-middle'>
          <div className='absolute left-8 top-96 z-50 transition-opacity duration-500 media-playing:opacity-0'>
            <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
              {movie.title}
            </h1>
            <p className='mt-4 text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
              {movie.description}
            </p>
          </div>
        </MediaProvider>
      </MediaPlayer>
    </div>
  );
}
