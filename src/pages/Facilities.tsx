import { Layout } from "@/components/layout/Layout";
import { facilitiesConfig } from "@/config/facilitiesConfig";
import { Monitor, FlaskConical, Library, Trophy, Theater, UtensilsCrossed, Home, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import classroomImage from "@/assets/classroom.jpg";
import campusImage from "@/assets/campus-view.jpg";
import libraryImage from "@/assets/library.jpg";
import sportsImage from "@/assets/sports.jpg";
import assemblyImage from "@/assets/assembly.jpg";
import heroCampus from "@/assets/hero-campus.jpg";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  FlaskConical,
  Library,
  Trophy,
  Theater,
  UtensilsCrossed,
  Home,
};

const facilityImages = [heroCampus, classroomImage, campusImage, libraryImage, sportsImage, assemblyImage];

const Facilities = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="py-20 md:py-28 bg-hero-gradient">
        <div className={`container-custom transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
            Campus Life
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Campus Facilities
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            State-of-the-art infrastructure and boarding facilities designed to provide the best learning and living environment.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-12">
            {facilitiesConfig.map((facility, index) => {
              const IconComponent = iconMap[facility.icon];
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={facility.id}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
                >
                  {/* Image */}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-medium group">
                      <img
                        src={facilityImages[index % facilityImages.length]}
                        alt={facility.name}
                        className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="p-3 rounded-xl bg-white/90 backdrop-blur-sm shadow-md">
                          {IconComponent && <IconComponent className="h-6 w-6 text-primary" />}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {facility.name}
                    </h2>
                    <p className="text-muted-foreground mb-6 text-lg">
                      {facility.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {facility.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                          <span className="text-foreground text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Facilities;
