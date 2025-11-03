import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import MusicSpotlight from "./components/MusicSpotlight";
import ActivitiesGallery from "./components/ActivitiesGallery";
import { Rocket } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2 font-semibold">
            <Rocket className="w-5 h-5 text-pink-600" />
            Vibe by You
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#products" className="hover:text-pink-600">Products</a>
            <a href="#music" className="hover:text-pink-600">EDM</a>
            <a href="#activities" className="hover:text-pink-600">Activities</a>
          </nav>
          <a
            href="#products"
            className="inline-flex sm:hidden items-center gap-2 text-sm text-pink-600"
          >
            Shop
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <ProductShowcase />
        <MusicSpotlight />
        <ActivitiesGallery />
      </main>

      <footer className="border-t border-neutral-200 mt-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 text-sm text-neutral-600">
          <p>
            © {new Date().getFullYear()} Vibe by You — curating women’s products, EDM playlists, and fun plans.
          </p>
        </div>
      </footer>
    </div>
  );
}
