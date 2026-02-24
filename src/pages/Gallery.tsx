import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { galleryConfig, galleryCategories } from "@/config/galleryConfig";
import { X, ZoomIn } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import campusImage from "@/assets/hero-campus.jpg";
import classroomImage from "@/assets/classroom.jpg";
import labImage from "@/assets/laboratory.jpg";
import libraryImage from "@/assets/library.jpg";
import culturalImage from "@/assets/cultural-event.jpg";
import sportsImage from "@/assets/sports.jpg";

// Map config to actual images
const imageMap: Record<string, string> = {
  "Campus": campusImage,
  "Classroom": classroomImage,
  "Labs": labImage,
  "Events": libraryImage,
  "Cultural": culturalImage,
  "Sports": sportsImage,
};

const Gallery = () => {
  const [filter, setFilter] = useState<typeof galleryCategories[number]>("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();

  // Create gallery items with actual images
  const galleryItems = [
    { id: "1", category: "Campus", title: "Main College Building", image: campusImage },
    { id: "2", category: "Classroom", title: "Smart Classroom", image: classroomImage },
    { id: "3", category: "Labs", title: "Chemistry Laboratory", image: labImage },
    { id: "4", category: "Cultural", title: "Annual Day Celebration", image: culturalImage },
    { id: "5", category: "Sports", title: "Sports Meet", image: sportsImage },
    { id: "6", category: "Campus", title: "Library", image: libraryImage },
  ];

  const filteredItems = filter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="py-20 md:py-28 bg-hero-gradient">
        <div className={`container-custom transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
            Photo Gallery
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Campus Gallery
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Explore our campus, facilities, events, and student life through photos.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
                  filter === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all cursor-pointer"
                onClick={() => setLightboxImage(item.image)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white font-semibold">{item.title}</h3>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            onClick={() => setLightboxImage(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
