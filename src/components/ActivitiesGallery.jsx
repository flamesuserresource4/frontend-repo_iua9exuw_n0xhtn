import { MapPin, CalendarHeart } from "lucide-react";

const activities = [
  {
    title: "Sunset Rooftop Hang",
    desc: "Dress cute, bring friends, chase the golden hour.",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1400&auto=format&fit=crop",
    location: "City Views",
  },
  {
    title: "Neon Roller Night",
    desc: "Retro skates, neon lights, and feel-good beats.",
    img: "https://images.unsplash.com/photo-1520974642035-8fdf7e8a016a?q=80&w=1400&auto=format&fit=crop",
    location: "Indoor Rink",
  },
  {
    title: "Beach Pilates + Picnic",
    desc: "Core burn followed by coastal bites and laughs.",
    img: "https://images.unsplash.com/photo-1516651029879-0f0d48f8b9ad?q=80&w=1400&auto=format&fit=crop",
    location: "Shoreline",
  },
  {
    title: "House Party Mix-Off",
    desc: "Friends-only DJ battle. Winner picks the after-hours spot.",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1400&auto=format&fit=crop",
    location: "Loft Studio",
  },
];

function ActivityCard({ item }) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white ring-1 ring-neutral-200 hover:ring-pink-300 transition shadow-sm">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-xs text-neutral-600">
          <MapPin className="w-4 h-4 text-pink-600" /> {item.location}
        </div>
        <h3 className="mt-1 font-semibold text-neutral-900">{item.title}</h3>
        <p className="mt-1 text-sm text-neutral-600">{item.desc}</p>
      </div>
    </div>
  );
}

export default function ActivitiesGallery() {
  return (
    <section id="activities" className="py-16 sm:py-20 bg-gradient-to-b from-pink-50/50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold inline-flex items-center gap-2">
              <CalendarHeart className="w-6 h-6 text-pink-600" /> Fun Activities
            </h2>
            <p className="mt-1 text-neutral-600">Weekend inspo you can actually do.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((a) => (
            <ActivityCard key={a.title} item={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
