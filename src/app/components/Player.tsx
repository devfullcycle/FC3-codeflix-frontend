import Link from 'next/link';
import { Movie } from '@/app/types/Movie';
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
          <ArrowLeftIcon className='absolute left-8 top-8 z-50 h-8 cursor-pointer text-white media-playing:opacity-0' />
        </Link>
        <MediaProvider className='relative mx-auto flex aspect-video max-w-fit justify-center rounded-md align-middle'></MediaProvider>
      </MediaPlayer>
    </div>
  );
}
