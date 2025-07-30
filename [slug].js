import { useRouter } from 'next/router';
import animes from '@/data/animes';
import Sidebar from '@/components/Sidebar';

export default function AnimePage() {
  const router = useRouter();
  const { slug } = router.query;
  const anime = animes.find((a) => a.slug === slug);

  if (!anime) return <div className="text-center mt-10">أنمي غير موجود</div>;

  return (
    <div className="flex flex-row-reverse min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-4xl font-bold text-right mb-2">{anime.title}</h1>
        <img src={anime.cover} alt={anime.title} className="w-full max-w-md mb-4" />
        <p className="text-right mb-4">{anime.description}</p>

        <h2 className="text-2xl font-bold text-right mb-2">الشخصيات</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {anime.characters.map((char) => (
            <div key={char.name} className="text-right">
              <img src={char.image} alt={char.name} className="rounded-lg w-full" />
              <p className="font-bold">{char.name}</p>
              <p>{char.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-right mb-2">معرض الصور</h2>
        <div className="grid grid-cols-3 gap-2">
          {anime.gallery.map((img, idx) => (
            <img key={idx} src={img} className="rounded-lg" />
          ))}
        </div>
      </main>
    </div>
  );
}