// app/playlists/page.tsx
"use client";

import { useMusic } from '@/contexts/MusicContext';
import Link from 'next/link';

export default function Playlists() {
  const { playlists } = useMusic();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Playlists</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {playlists.map(playlist => (
            <Link 
              key={playlist.id} 
              href={`/playlists/${playlist.id}`}
              className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors group"
            >
              <div className="relative">
                <img 
                  src={playlist.cover} 
                  alt={playlist.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-green-500 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium truncate">{playlist.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{playlist.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}