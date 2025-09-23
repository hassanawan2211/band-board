// app/playlists/[id]/page.tsx
"use client";

import { useMusic } from '@/contexts/MusicContext';
import { useParams } from 'next/navigation';
import SongList from '@/components/SongList';

export default function PlaylistDetail() {
  const params = useParams();
  const { playlists, songs } = useMusic();
  
  const playlistId = parseInt(params.id as string);
  const playlist = playlists.find(p => p.id === playlistId);
  
  if (!playlist) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pb-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Playlist not found</h1>
          <p className="text-gray-400">The playlist you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }
  
  const playlistSongs = songs.filter(song => playlist.songs.includes(song.id));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
          <img 
            src={playlist.cover} 
            alt={playlist.name}
            className="w-full md:w-64 h-64 object-cover rounded-lg"
          />
          <div className="flex-1">
            <div className="text-sm text-gray-400 mb-2">Playlist</div>
            <h1 className="text-4xl font-bold mb-4">{playlist.name}</h1>
            <p className="text-gray-400 mb-6">{playlist.description}</p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>BandBoard</span>
              <span>•</span>
              <span>{playlistSongs.length} songs</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <button className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <SongList songs={playlistSongs} />
        </div>
      </div>
    </div>
  );
}