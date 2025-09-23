// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import PlayerControls from '@/components/PlayerControls';
import { MusicProvider } from '@/contexts/MusicContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BandBoard - Your Music Companion',
  description: 'Discover and listen to your favorite music',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MusicProvider>
          <div className="app-container">
            <Navbar />
            <main className="main-content">
              {children}
            </main>
            <PlayerControls />
          </div>
        </MusicProvider>
      </body>
    </html>
  );
}