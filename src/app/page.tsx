import { Banner } from './components/Banner';
import Header from './components/Header';
import { MovieRow } from './components/MovieRow';
import { getMovies } from './service/MovieService';
import { Genres } from './types/Genre';

async function Home() {
  return (
    <div className='relative bg-gradient-to-b pb-8'>
      <Header />
      <main className='relative pb-20 overflow-y-scroll p-8 scrollbar-hide lg:pl-16 '>
        <Banner />
        <MovieRow sectionTitle={Genres.Action} />
        <MovieRow sectionTitle={Genres.SiFi} />
        <MovieRow sectionTitle={Genres.Adventure} />
      </main>
    </div>
  );
}

export default Home;
