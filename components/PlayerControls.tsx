// components/PlayerControls.tsx
"use client";

import { useState, useEffect } from 'react';
import { 
  FaPlay, 
  FaPause, 
  FaStepForward, 
  FaStepBackward, 
  FaVolumeUp, 
  FaRandom,
  FaRedo
} from 'react-icons/fa';
import { useMusic } from '@/contexts/MusicContext';

export default function PlayerControls() {
  const { currentSong, isPlaying, togglePlay, nextSong, previousSong } = useMusic();
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(80);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && currentSong) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= currentSong.duration) {
            nextSong();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSong, nextSong]);

  if (!currentSong) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progress = (currentTime / currentSong.duration) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg border-t border-gray-700">
      <div className="max-w-6xl mx-auto">
        {/* Progress bar */}
        <div className="w-full bg-gray-600 h-1 rounded-full mb-4 cursor-pointer">
          <div 
            className="bg-green-500 h-1 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="flex items-center justify-between">
          {/* Song info */}
          <div className="flex items-center gap-4 w-1/4">
            <img 
              src={currentSong.cover} 
              alt={currentSong.title}
              className="w-12 h-12 rounded-md object-cover"
            />
            <div className="overflow-hidden">
              <h4 className="font-medium truncate">{currentSong.title}</h4>
              <p className="text-gray-400 text-sm truncate">{currentSong.artist}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center w-2/4">
            <div className="flex items-center gap-6">
              <button className="text-gray-400 hover:text-white transition-colors">
                <FaRandom size={16} />
              </button>
              <button 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={previousSong}
              >
                <FaStepBackward size={20} />
              </button>
              <button 
                className="bg-green-500 hover:bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                onClick={togglePlay}
              >
                {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} className="ml-1" />}
              </button>
              <button 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={nextSong}
              >
                <FaStepForward size={20} />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <FaRedo size={16} />
              </button>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
              <span>{formatTime(currentTime)}</span>
              <span>/</span>
              <span>{formatTime(currentSong.duration)}</span>
            </div>
          </div>

          {/* Volume control */}
          <div className="flex items-center gap-3 w-1/4 justify-end">
            <FaVolumeUp className="text-gray-400" />
            <div className="w-24 bg-gray-600 h-1 rounded-full cursor-pointer">
              <div 
                className="bg-green-500 h-1 rounded-full transition-all"
                style={{ width: `${volume}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}