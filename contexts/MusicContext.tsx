// contexts/MusicContext.tsx
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Song, Playlist } from '@/types';
import { mockSongs, mockPlaylists } from '@/data/mockData';

interface MusicContextType {
  songs: Song[];
  currentSong: Song | null;
  isPlaying: boolean;
  togglePlay: () => void;
  nextSong: () => void;
  previousSong: () => void;
  playSong: (index: number) => void;
  playlists: Playlist[];
  favorites: number[];
  setFavorites: React.Dispatch<React.SetStateAction<number[]>>;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function useMusic() {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
}

interface MusicProviderProps {
  children: ReactNode;
}

export function MusicProvider({ children }: MusicProviderProps) {
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  // Load mock data
  useEffect(() => {
    setSongs(mockSongs);
    setPlaylists(mockPlaylists);
    setFavorites([1, 3, 5, 8]);
  }, []);

  const currentSong = songs[currentSongIndex] || null;

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  const previousSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  const playSong = (index: number) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  const value: MusicContextType = {
    songs,
    currentSong,
    isPlaying,
    togglePlay,
    nextSong,
    previousSong,
    playSong,
    playlists,
    favorites,
    setFavorites
  };

  return (
    <MusicContext.Provider value={value}>
      {children}
    </MusicContext.Provider>
  );
}