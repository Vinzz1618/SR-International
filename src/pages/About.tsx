import { Layout } from "@/components/layout/Layout";
import { collegeConfig } from "@/config/collegeConfig";
import { Target, Award, BookOpen, Users, Star, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import campusImage from "@/assets/hero-campus.jpg";
import classroomImage from "@/assets/classroom.jpg";

const About = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: missionRef, isVisible: missionVisible } = useScrollReveal();
  const { ref: principalRef, isVisible: principalVisible } = useScrollReveal();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal();

  return (
    <Layout>
      {/* Hero Banner */}
      <section ref={heroRef} className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={campusImage} alt="Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className={`container-custom relative z-10 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-4 backdrop-blur-sm">
            About Us
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Our Story of Excellence
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            {collegeConfig.history}
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section ref={missionRef} className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              What We Stand For
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Vision & Mission
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision */}
            <div className={`transition-all duration-700 ${missionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-primary text-primary-foreground rounded-2xl p-8 h-full hover:shadow-strong transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-accent text-accent-foreground">
                    <Target className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-primary-foreground/90 leading-relaxed text-lg">
                  {collegeConfig.vision}
                </p>
              </div>
            </div>

            {/* Mission - Compact and balanced */}
            <div className={`transition-all duration-700 delay-150 ${missionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-card border border-border rounded-2xl p-8 h-full shadow-soft hover:shadow-medium transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 rounded-xl bg-primary text-primary-foreground">
                    <Award className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <ul className="space-y-3">
                  {collegeConfig.mission.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <Star className="h-4 w-4 text-accent shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section ref={principalRef} className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className={`grid lg:grid-cols-5 gap-12 items-center transition-all duration-700 ${principalVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="lg:col-span-2">
              <div className="relative">
                <img
                  src={classroomImage}
                  alt="Principal"
                  className="w-full h-80 object-cover rounded-2xl shadow-medium"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="h-10 w-10 text-accent-foreground" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                From the Principal's Desk
              </span>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
                {collegeConfig.principalMessage.name}
              </h2>
              <p className="text-muted-foreground text-sm mb-6">{collegeConfig.principalMessage.designation}</p>
              <blockquote className="relative">
                <span className="absolute -top-4 -left-2 text-6xl text-primary/20 font-serif">"</span>
                <p className="text-muted-foreground leading-relaxed text-lg pl-6 italic">
                  {collegeConfig.principalMessage.message}
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="section-padding bg-background pb-24">
        <div className="container-custom">
          <div className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Our Foundation
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Values We Uphold
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do at {collegeConfig.shortName}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "Academic Excellence", description: "Pursuing the highest standards in education with continuous improvement and innovation" },
              { icon: Users, title: "Inclusivity & Respect", description: "Creating a welcoming environment where every student feels valued and supported" },
              { icon: Award, title: "Integrity & Character", description: "Upholding honesty, ethics, and transparency in all our actions and decisions" },
            ].map((value, index) => (
              <div 
                key={index} 
                className={`text-center p-8 rounded-2xl bg-card border border-border hover:shadow-medium hover:-translate-y-2 transition-all duration-300 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
