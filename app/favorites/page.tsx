// app/favorites/page.tsx
"use client";

import { useMusic } from '@/contexts/MusicContext';

export default function Favorites() {
  const { songs, favorites } = useMusic();
  
  const favoriteSongs = songs.filter(song => favorites.includes(song.id));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Favorites</h1>
        {favoriteSongs.length > 0 ? (
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-700 text-gray-400 font-medium text-sm">
              <div className="col-span-1">#</div>
              <div className="col-span-5">Title</div>
              <div className="col-span-3">Album</div>
              <div className="col-span-2">Duration</div>
              <div className="col-span-1"></div>
            </div>
            {favoriteSongs.map((song, index) => (
              <div 
                key={song.id} 
                className="grid grid-cols-12 gap-4 p-4 hover:bg-gray-750 transition-colors"
              >
                <div className="col-span-1 flex items-center text-gray-400">
                  {index + 1}
                </div>
                <div className="col-span-5 flex items-center gap-3">
                  <img 
                    src={song.cover} 
                    alt={song.title}
                    className="w-10 h-10 rounded"
                  />
                  <div>
                    <div className="font-medium text-white">
                      {song.title}
                    </div>
                    <div className="text-sm text-gray-400">{song.artist}</div>
                  </div>
                </div>
                <div className="col-span-3 flex items-center text-gray-400">
                  {song.album}
                </div>
                <div className="col-span-2 flex items-center text-gray-400">
                  {Math.floor(song.duration / 60)}:{(song.duration % 60).toString().padStart(2, '0')}
                </div>
                <div className="col-span-1 flex items-center justify-end text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">You haven't liked any songs yet</div>
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-full transition-colors">
              Discover Songs
            </button>
          </div>
        )}
      </div>
    </div>
  );
}