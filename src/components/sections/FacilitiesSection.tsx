import { NavLink } from "react-router-dom";
import { ArrowRight, Monitor, FlaskConical, Library, Trophy, Theater, UtensilsCrossed } from "lucide-react";
import { facilitiesConfig } from "@/config/facilitiesConfig";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import libraryImage from "@/assets/library.jpg";
import labImage from "@/assets/laboratory.jpg";

const iconMap = {
  Monitor,
  FlaskConical,
  Library,
  Trophy,
  Theater,
  UtensilsCrossed,
};

export const FacilitiesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground font-medium text-sm mb-4">
              Campus Facilities
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              World-Class Infrastructure
            </h2>
            <p className="text-muted-foreground mb-8">
              Our campus is equipped with modern facilities designed to enhance learning and foster holistic development.
            </p>

            {/* Facilities Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {facilitiesConfig.slice(0, 6).map((facility, index) => {
                const IconComponent = iconMap[facility.icon as keyof typeof iconMap];
                return (
                  <div
                    key={facility.id}
                    className="group flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors cursor-default"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {IconComponent && <IconComponent className="h-5 w-5" />}
                    </div>
                    <span className="font-medium text-foreground text-sm">{facility.name}</span>
                  </div>
                );
              })}
            </div>

            <Button asChild size="lg" className="group">
              <NavLink to="/facilities">
                View All Facilities
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </Button>
          </div>

          {/* Images */}
          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={libraryImage}
                  alt="Library"
                  className="w-full h-48 object-cover rounded-2xl shadow-soft hover:shadow-medium transition-shadow"
                />
                <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
                  <p className="text-4xl font-bold font-heading mb-1">50+</p>
                  <p className="text-sm text-primary-foreground/80">Classrooms</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="p-6 rounded-2xl gold-gradient text-accent-foreground">
                  <p className="text-4xl font-bold font-heading mb-1">5</p>
                  <p className="text-sm">Modern Labs</p>
                </div>
                <img
                  src={labImage}
                  alt="Laboratory"
                  className="w-full h-48 object-cover rounded-2xl shadow-soft hover:shadow-medium transition-shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
