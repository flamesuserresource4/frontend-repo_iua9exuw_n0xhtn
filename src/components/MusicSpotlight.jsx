import { Music2, PlayCircle } from "lucide-react";

const tracks = [
  {
    title: "Progressive Bangers Playlist",
    artist: "Spotify Playlist",
    link: "https://open.spotify.com/playlist/37i9dQZF1DXaUozVeC5K3p",
  },
  {
    title: "Melodic House Gems",
    artist: "Spotify Playlist",
    link: "https://open.spotify.com/playlist/37i9dQZF1DX4dyzvuaRJ0n",
  },
  {
    title: "Festival Energy",
    artist: "Spotify Playlist",
    link: "https://open.spotify.com/playlist/37i9dQZF1DXa8NOEUWPn9W",
  },
];

export default function MusicSpotlight() {
  return (
    <section id="music" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold inline-flex items-center gap-2">
              <Music2 className="w-6 h-6 text-pink-600" /> EDM Spotlight
            </h2>
            <p className="mt-1 text-neutral-600">Fresh playlists for workouts, nights out, and everything in between.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden ring-1 ring-neutral-200 bg-white">
            <iframe
              title="EDM Playlist"
              style={{ border: 0 }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DXaUozVeC5K3p?utm_source=generator"
              width="100%"
              height="380"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>

          <ul className="grid sm:grid-cols-2 gap-4">
            {tracks.map((t) => (
              <li key={t.link} className="rounded-xl ring-1 ring-neutral-200 bg-white p-4 hover:ring-pink-300 transition">
                <a href={t.link} target="_blank" rel="noreferrer" className="flex items-start gap-3">
                  <div className="mt-1">
                    <PlayCircle className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">{t.title}</h3>
                    <p className="text-sm text-neutral-600">{t.artist}</p>
                    <p className="mt-2 text-sm text-pink-600">Listen on Spotify →</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
