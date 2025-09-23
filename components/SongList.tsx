// components/SongList.tsx
"use client";

import { useMusic } from '@/contexts/MusicContext';
import { FaPlay, FaPause, FaHeart } from 'react-icons/fa';

interface SongListProps {
  songs?: any[];
}

export default function SongList({ songs: propSongs }: SongListProps = {}) {
  const { songs: contextSongs, currentSong, isPlaying, playSong, favorites, setFavorites } = useMusic();
  
  const songs = propSongs || contextSongs;

  const toggleFavorite = (songId: number) => {
    if (favorites.includes(songId)) {
      setFavorites(favorites.filter(id => id !== songId));
    } else {
      setFavorites([...favorites, songId]);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-700 text-gray-400 font-medium text-sm">
        <div className="col-span-1">#</div>
        <div className="col-span-5">Title</div>
        <div className="col-span-3">Album</div>
        <div className="col-span-2">Duration</div>
        <div className="col-span-1"></div>
      </div>
      {songs.map((song, index) => (
        <div 
          key={song.id} 
          className={`grid grid-cols-12 gap-4 p-4 hover:bg-gray-750 transition-colors ${currentSong?.id === song.id ? 'bg-gray-750' : ''}`}
        >
          <div className="col-span-1 flex items-center">
            {currentSong?.id === song.id && isPlaying ? (
              <FaPause 
                className="text-green-500 cursor-pointer" 
                onClick={() => playSong(index)}
              />
            ) : (
              <FaPlay 
                className="text-gray-400 hover:text-white cursor-pointer" 
                onClick={() => playSong(index)}
              />
            )}
          </div>
          <div className="col-span-5 flex items-center gap-3">
            <img 
              src={song.cover} 
              alt={song.title}
              className="w-10 h-10 rounded"
            />
            <div>
              <div className={`font-medium ${currentSong?.id === song.id ? 'text-green-500' : 'text-white'}`}>
                {song.title}
              </div>
              <div className="text-sm text-gray-400">{song.artist}</div>
            </div>
          </div>
          <div className="col-span-3 flex items-center text-gray-400">
            {song.album}
          </div>
          <div className="col-span-2 flex items-center text-gray-400">
            {formatTime(song.duration)}
          </div>
          <div className="col-span-1 flex items-center justify-end">
            <FaHeart 
              className={`cursor-pointer ${favorites.includes(song.id) ? 'text-red-500' : 'text-gray-400'}`}
              onClick={() => toggleFavorite(song.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}