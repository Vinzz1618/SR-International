import { NavLink } from "react-router-dom";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { contactConfig } from "@/config/contactConfig";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-accent via-accent to-amber-400 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-accent-foreground/30 rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-accent-foreground/30 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent-foreground/10 rounded-full blur-xl" />
      </div>

      <div className="container-custom relative">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-accent-foreground mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have started their academic journey with us. 
            Admissions are now open for the upcoming academic year.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg group">
              <NavLink to="/contact">
                Apply for Admission
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
              <a href={`tel:${contactConfig.phones[0].number}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-accent-foreground/80">
            <a href={`tel:${contactConfig.phones[0].number}`} className="flex items-center gap-2 hover:text-accent-foreground transition-colors">
              <Phone className="h-5 w-5" />
              {contactConfig.phones[0].number}
            </a>
            <span className="hidden sm:block">•</span>
            <a href={`mailto:${contactConfig.emails[0].email}`} className="flex items-center gap-2 hover:text-accent-foreground transition-colors">
              <Mail className="h-5 w-5" />
              {contactConfig.emails[0].email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
