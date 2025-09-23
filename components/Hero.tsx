// components/Hero.tsx
export default function Hero() {
  return (
    <div className="relative h-96 bg-gradient-to-r from-green-900 to-gray-900 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Your Sound</h1>
        <p className="text-xl md:text-2xl mb-8">Millions of songs at your fingertips</p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-full transition-colors">
          Start Listening
        </button>
      </div>
    </div>
  );
}