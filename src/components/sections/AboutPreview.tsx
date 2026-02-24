import { NavLink } from "react-router-dom";
import { ArrowRight, Award, Target } from "lucide-react";
import { collegeConfig } from "@/config/collegeConfig";
import classroomImage from "@/assets/classroom.jpg";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const AboutPreview = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={classroomImage}
                alt="Classroom"
                className="w-full h-[400px] object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center shrink-0">
                    <span className="text-2xl font-bold text-accent-foreground">{collegeConfig.establishmentYear.toString().slice(-2)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Established in {collegeConfig.establishmentYear}</p>
                    <p className="text-sm text-muted-foreground">{new Date().getFullYear() - collegeConfig.establishmentYear}+ Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-6 -right-6 w-full h-full rounded-2xl bg-primary/10" />
          </div>

          {/* Content */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              About Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Legacy of Academic Excellence
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {collegeConfig.history}
            </p>

            {/* Vision & Mission Cards */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="p-2 rounded-lg bg-primary text-primary-foreground shrink-0">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Our Vision</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{collegeConfig.vision}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="p-2 rounded-lg bg-accent text-accent-foreground shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Our Mission</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{collegeConfig.mission[0]}</p>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="group">
              <NavLink to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
