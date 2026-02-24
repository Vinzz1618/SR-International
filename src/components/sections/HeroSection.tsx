import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { collegeConfig } from "@/config/collegeConfig";
import { statsConfig, iconMap } from "@/config/statsConfig";
import heroImage from "@/assets/hero-campus.jpg";
import { Button } from "@/components/ui/button";

interface CounterProps {
  target: number;
  suffix?: string;
  duration: number;
}

const Counter = ({ target, suffix = "", duration }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * target));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
            Admissions Open for {collegeConfig.academicYear}
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
            {collegeConfig.tagline}
          </h1>

          <p className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Welcome to {collegeConfig.name} – Where excellence meets opportunity. 
            Join us in our journey of academic excellence and holistic development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-lg group">
              <NavLink to="/contact">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
              <NavLink to="/about">
                <Play className="mr-2 h-5 w-5" />
                Explore Campus
              </NavLink>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {statsConfig.map((stat) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <div
                key={stat.id}
                className="glass-card p-6 rounded-2xl text-center group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  {IconComponent && <IconComponent className="h-6 w-6 text-primary" />}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary font-heading mb-1">
                  <Counter target={stat.value} suffix={stat.suffix} duration={stat.animationDuration} />
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
