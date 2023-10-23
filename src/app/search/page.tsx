import Image from 'next/image';
import Header from '../components/Header';
import { getMoviesByTitle } from '../service/MovieService';

type SearchProps = {
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
};

async function SearchResults({ searchParams }: SearchProps) {
  const movieTitle = searchParams?.title as string;
  const movies = await getMoviesByTitle(movieTitle);

  if (movies.length === 0) {
    return (
      <div>
        <div className='relative bg-gradient-to-b pb-8'>
          <Header />
          <main className='relative mb-48 mt-20 h-screen pl-4 lg:pl-16 '>
            <h1 className='mb-4 text-2xl font-bold'>
              Search results for:{' '}
              <span className='text-red-500'>{movieTitle}</span>
            </h1>
            <p className='text-xl'>No movies found</p>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className='relative bg-gradient-to-b pb-8'>
        <Header />
        <main className='relative mb-48 mt-20 h-screen pl-4 lg:pl-16 '>
          <h1 className='mb-4 text-2xl font-bold'>
            Search results for:{' '}
            <span className='text-red-500'>{movieTitle}</span>
          </h1>

          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            {movies.map((movie, index) => (
              <div
                key={index}
                className='group cursor-pointer p-2 transition-all duration-200 ease-in-out hover:scale-105'
              >
                <Image
                  src={movie.bannerFileURL}
                  alt={movie.title}
                  className='rounded-lg'
                  style={{
                    aspectRatio: '2/1',
                    objectFit: 'cover',
                  }}
                  width={300}
                  height={600}
                />
                <div className='py-2'>
                  <p className='max-w-md truncate'>{movie.title}</p>
                  <div className='flex items-center space-x-2'>
                    <p className='text-xs text-gray-400'>
                      {movie.genres.join(', ')}
                    </p>

                    <p className='text-xs text-gray-400'>
                      {movie.yearLaunched}
                    </p>
                    <p className='text-xs text-gray-400'>{movie.rating}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default SearchResults;
