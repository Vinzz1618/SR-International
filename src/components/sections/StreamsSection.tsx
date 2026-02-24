import { NavLink } from "react-router-dom";
import { ArrowRight, GraduationCap, BookOpen, Users, CheckCircle } from "lucide-react";
import { academicsConfig } from "@/config/academicsConfig";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const iconMap: Record<string, React.ElementType> = {
  kindergarten: Users,
  primary: BookOpen,
  middle: GraduationCap,
  secondary: GraduationCap,
};

export const StreamsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Academic Programs
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education for Every Stage
          </h2>
          <p className="text-muted-foreground">
            From kindergarten to secondary school, we provide comprehensive CBSE education designed to build strong foundations.
          </p>
        </div>

        {/* Grades Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {academicsConfig.grades.map((grade, index) => {
            const IconComponent = iconMap[grade.id] || GraduationCap;
            return (
              <div
                key={grade.id}
                className={`group bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-500 overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Header */}
                <div className="p-6 pb-4 border-b border-border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground">{grade.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2">{grade.description}</p>
                </div>

                {/* Classes */}
                <div className="p-6 pt-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                    Classes
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {grade.classes.slice(0, 3).map((cls) => (
                      <span
                        key={cls}
                        className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                      >
                        {cls}
                      </span>
                    ))}
                    {grade.classes.length > 3 && (
                      <span className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                        +{grade.classes.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 mb-4">
                    {grade.highlights.slice(0, 2).map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-3 w-3 text-accent shrink-0" />
                        <span className="text-xs">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild variant="outline" size="sm" className="w-full group/btn">
                    <NavLink to={`/academics#${grade.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </NavLink>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
