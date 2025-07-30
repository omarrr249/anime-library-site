import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import AnimeCard from '../components/AnimeCard';
import animes from '../data/animes';

export default function Home() {
  return (
    <>
      <Head>
        <title>مكتبة الأنمي</title>
        <meta name="description" content="موقع عربي شامل لكل الأنميات" />
      </Head>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {animes.map((anime, index) => (
            <AnimeCard key={index} anime={anime} />
          ))}
        </main>
      </div>
    </>
  );
}