// app/library/page.tsx
import SongList from '@/components/SongList';

export default function Library() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Library</h1>
        <SongList />
      </div>
    </div>
  );
}