import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronDownIcon,
  PlayIcon,
  PlusIcon,
  SpeakerWaveIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { MovieRating } from '@/app/components/MovieRating';
import { Genre } from '@/app/types/Genre';

type Props = {
  id: string;
  title: string;
  genres: Genre[];
  rating: string;
  bannerFileURL: string;
};

export const MovieCardInfo: React.FC<Props> = ({
  id,
  title,
  genres,
  rating,
  bannerFileURL,
}) => {
  return (
    <div className='invisible absolute top-0 z-10 w-full min-w-[20vw] scale-0 opacity-0 transition delay-300 duration-200 group-hover:-translate-y-[6vw] group-hover:scale-110 group-hover:opacity-100 sm:visible '>
      <Image
        src={bannerFileURL}
        alt={title}
        width={600}
        height={400}
        className='duration h-[12vw] w-full cursor-pointer rounded-t-md object-cover object-top shadow-xl transition'
      />

      <div className='absolute z-10 w-full rounded-b-md bg-zinc-800 p-2 shadow-md transition lg:p-4 '>
        <div className='flex flex-row items-center justify-between gap-2'>
          <div className='flex flex-row items-center gap-2'>
            <div className='flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-transparent transition hover:bg-neutral-300 hover:text-black lg:h-10 lg:w-10'>
              <Link href={`/watch/${id}`}>
                <PlayIcon className='w-4 lg:w-6' />
              </Link>
            </div>
            <div className='flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-transparent transition hover:bg-neutral-300 hover:text-black lg:h-10  lg:w-10'>
              <PlusIcon className='w-4 lg:w-6' />
            </div>
          </div>
          <div className='flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-transparent transition hover:bg-neutral-300 hover:text-black lg:h-10 lg:w-10'>
            <ChevronDownIcon className='w-4 lg:w-6' />
          </div>
        </div>
        <div className='mt-4 text-sm font-bold text-white lg:text-lg'>
          {title}
        </div>
        <div className='mt-4 flex flex-col gap-2 text-sm'>
          <div className='flex flex-row items-center gap-2'>
            <SpeakerWaveIcon className='w-4' /> Double Atmos 5.1 4K
          </div>
          <div className='flex flex-row items-center gap-2'>
            <UserGroupIcon className='w-4' /> <MovieRating rating={rating} />
          </div>
        </div>
        <div className='mt-4 flex flex-row items-center gap-2 text-[8px] text-white lg:text-sm'>
          <p>{genres.join(' ·  ')}</p>
        </div>
      </div>
    </div>
  );
};
