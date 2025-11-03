import { Instagram, ShoppingBag, Music, PartyPopper } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100 via-white to-white pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-pink-600">
            <PartyPopper className="w-4 h-4" />
            Welcome to my world
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Curating the best in
            <span className="block text-pink-600">women's style, EDM vibes,</span>
            and unforgettable fun.
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-neutral-600">
            Discover chic finds, high-energy playlists, and weekend ideas I genuinely love.
            Everything here is handpicked to elevate your vibe.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#products" className="inline-flex items-center gap-2 rounded-full bg-pink-600 text-white px-5 py-3 text-sm font-medium shadow hover:bg-pink-700 transition">
              <ShoppingBag className="w-4 h-4" />
              Shop Picks
            </a>
            <a href="#music" className="inline-flex items-center gap-2 rounded-full bg-white text-pink-600 ring-1 ring-pink-200 px-5 py-3 text-sm font-medium hover:bg-pink-50 transition">
              <Music className="w-4 h-4" />
              EDM Spotlight
            </a>
            <a href="#activities" className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-700 ring-1 ring-neutral-200 px-5 py-3 text-sm font-medium hover:bg-neutral-50 transition">
              <PartyPopper className="w-4 h-4" />
              Fun Plans
            </a>
          </div>
          <div className="mt-10">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900"
            >
              <Instagram className="w-4 h-4" />
              Follow along on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
