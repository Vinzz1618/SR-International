import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, User } from "lucide-react";
import { testimonialsConfig } from "@/config/testimonialsConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, isVisible } = useScrollReveal();

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonialsConfig.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonialsConfig.length) % testimonialsConfig.length);

  return (
    <section ref={ref} className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent font-medium text-sm mb-4">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            What Our Community Says
          </h2>
          <p className="text-primary-foreground/80">
            Hear from our students, parents, and alumni about their experience with us.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-accent/30" />
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-center">
                "{testimonialsConfig[activeIndex].message}"
              </p>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                  <User className="h-8 w-8 text-accent-foreground" />
                </div>
                <h4 className="font-heading font-semibold text-lg">{testimonialsConfig[activeIndex].name}</h4>
                <p className="text-primary-foreground/80 text-sm">
                  {testimonialsConfig[activeIndex].role}
                  {testimonialsConfig[activeIndex].designation && ` • ${testimonialsConfig[activeIndex].designation}`}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {testimonialsConfig.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === activeIndex ? "bg-accent w-8" : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
