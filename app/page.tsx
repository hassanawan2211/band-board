// app/page.tsx
import Hero from '@/components/Hero';
import SongList from '@/components/SongList';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pb-24">
      <Hero />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-2xl font-bold mb-6">Popular Songs</h2>
        <SongList />
      </div>
    </div>
  );
}