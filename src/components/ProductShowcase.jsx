import { Star, ArrowUpRight } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Everyday Luxe Tote",
    desc: "Spacious, chic, and perfect for work-to-weekend.",
    img: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.amazon.com",
    badge: "Editor’s Pick",
  },
  {
    id: 2,
    title: "Silky Slip Dress",
    desc: "Minimal lines, maximum confidence.",
    img: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.asos.com",
    badge: "Trending",
  },
  {
    id: 3,
    title: "Glow Serum",
    desc: "Glassy-skin finish with clean ingredients.",
    img: "https://images.unsplash.com/photo-1616394584738-fc6e612e69a0?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.sephora.com",
    badge: "Skincare Crush",
  },
  {
    id: 4,
    title: "Statement Sneakers",
    desc: "Comfort meets bold street style.",
    img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.nike.com",
    badge: "Most Loved",
  },
];

function ProductCard({ item }) {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-2xl overflow-hidden bg-white ring-1 ring-neutral-200 hover:ring-pink-300 transition shadow-sm hover:shadow-md"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-pink-600 bg-pink-50 px-2 py-1 rounded-full">
            <Star className="w-3 h-3" /> {item.badge}
          </span>
        </div>
        <h3 className="font-semibold text-neutral-900">{item.title}</h3>
        <p className="mt-1 text-sm text-neutral-600">{item.desc}</p>
        <div className="mt-3 inline-flex items-center gap-1 text-pink-600 text-sm font-medium">
          Shop now <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </a>
  );
}

export default function ProductShowcase() {
  return (
    <section id="products" className="py-16 sm:py-20 bg-gradient-to-b from-white to-pink-50/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Women’s Product Picks</h2>
            <p className="mt-1 text-neutral-600">Curated essentials I actually use and love.</p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-pink-600 hover:text-pink-700"
          >
            View all <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} item={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
