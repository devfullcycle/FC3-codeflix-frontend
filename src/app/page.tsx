import { Banner } from './components/Banner';
import Header from './components/Header';
import { MovieRow } from './components/MovieRow';

export default function Home() {
  return (
    <div className='relative bg-gradient-to-b pb-8'>
      <Header />
      <main className='relative mb-48 h-screen pl-4 lg:pl-16 '>
        <Banner />
        <MovieRow sectionTitle='Popular' />
        <MovieRow sectionTitle='Trending' />
        <MovieRow sectionTitle='Top Rated' />
      </main>
    </div>
  );
}
