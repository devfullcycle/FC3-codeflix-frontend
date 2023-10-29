import { getMovieById } from '@/app/service/MovieService';
import Player from '../../components/Player';
import Header from '@/app/components/Header';

export default async function Watch({ params }: { params: { id: string } }) {
  const movieId = params?.id as string;
  const movie = await getMovieById(movieId);

  if (!movie) {
  return (
      <div className='flex h-screen justify-center align-middle'>
        <Header />
        <main className='flex flex-1 flex-col items-center justify-center px-20 text-center'>
          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            Sorry, this movie is not available.
          </h1>
        </main>
      </div>
    );
  }

  return <Player movie={movie} />;
}
