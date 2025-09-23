// types/index.ts
export interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: number;
  cover: string;
  url: string;
}

export interface Playlist {
  id: number;
  name: string;
  description: string;
  cover: string;
  songs: number[];
}