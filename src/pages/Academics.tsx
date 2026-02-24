import { Layout } from "@/components/layout/Layout";
import { academicsConfig } from "@/config/academicsConfig";
import { GraduationCap, BookOpen, Users, CheckCircle, Trophy, Lightbulb, FlaskConical, ClipboardCheck, HeartHandshake, UsersRound } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const iconMap: Record<string, React.ElementType> = {
  kindergarten: Users,
  primary: BookOpen,
  middle: GraduationCap,
  secondary: GraduationCap,
};

const methodologyIcons = [Lightbulb, FlaskConical, ClipboardCheck, HeartHandshake, UsersRound];

const Academics = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: gradesRef, isVisible: gradesVisible } = useScrollReveal();
  const { ref: methodologyRef, isVisible: methodologyVisible } = useScrollReveal();
  const { ref: achievementsRef, isVisible: achievementsVisible } = useScrollReveal();

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="py-20 md:py-28 bg-hero-gradient">
        <div className={`container-custom transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-4 backdrop-blur-sm">
            Academics
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Academic Excellence
          </h1>
          <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
            CBSE curriculum from Kindergarten to Class 10, designed to build strong foundations for higher education and competitive examinations.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <span className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              Board: {academicsConfig.board}
            </span>
            <span className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              Medium: {academicsConfig.medium}
            </span>
          </div>
        </div>
      </section>

      {/* Grades */}
      <section ref={gradesRef} className="section-padding bg-background">
        <div className="container-custom">
          <div className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${gradesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Our Programs
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Academic Programs by Grade
            </h2>
          </div>

          <div className="grid gap-12">
            {academicsConfig.grades.map((grade, index) => {
              const IconComponent = iconMap[grade.id] || GraduationCap;
              return (
                <div
                  key={grade.id}
                  id={grade.id}
                  className={`scroll-mt-24 transition-all duration-700 ${gradesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`grid lg:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Info */}
                    <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-medium transition-all duration-300">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 rounded-xl bg-primary text-primary-foreground">
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <div>
                          <h2 className="font-heading text-2xl font-bold text-foreground">{grade.name}</h2>
                          <p className="text-muted-foreground text-sm">CBSE Curriculum</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{grade.description}</p>
                      
                      {/* Highlights */}
                      <div className="space-y-3">
                        {grade.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-center gap-3 group">
                            <CheckCircle className="h-5 w-5 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Classes */}
                    <div className="space-y-6">
                      <div className="bg-muted/50 rounded-2xl p-6 hover:bg-muted/70 transition-colors duration-300">
                        <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Classes Offered</h3>
                        <div className="flex flex-wrap gap-2">
                          {grade.classes.map((cls) => (
                            <span
                              key={cls}
                              className="px-4 py-2 rounded-lg bg-card border border-border text-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 cursor-default"
                            >
                              {cls}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-primary/5 rounded-2xl p-6 hover:bg-primary/10 transition-colors duration-300">
                        <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Subjects</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {grade.id === "kindergarten" ? (
                            <>
                              <span className="text-muted-foreground text-sm">English</span>
                              <span className="text-muted-foreground text-sm">Mathematics</span>
                              <span className="text-muted-foreground text-sm">Environmental Awareness</span>
                              <span className="text-muted-foreground text-sm">Art & Craft</span>
                            </>
                          ) : (
                            academicsConfig.subjects.core.concat(academicsConfig.subjects.languages.slice(0, 2)).map((subject) => (
                              <span key={subject} className="text-muted-foreground text-sm">{subject}</span>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Teaching Methodology - Modern Redesign */}
      <section ref={methodologyRef} className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${methodologyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Our Approach
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Modern Teaching Methodology
            </h2>
            <p className="text-muted-foreground">
              Innovative approaches that make learning engaging, effective, and enjoyable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicsConfig.teachingMethodology.map((method, index) => {
              const IconComponent = methodologyIcons[index] || Lightbulb;
              return (
                <div
                  key={index}
                  className={`group relative bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-strong hover:-translate-y-2 transition-all duration-300 overflow-hidden ${methodologyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-accent/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section ref={achievementsRef} className="section-padding bg-primary text-primary-foreground pb-24">
        <div className="container-custom">
          <div className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${achievementsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Our Proud Achievements
            </h2>
            <p className="text-primary-foreground/80">
              A track record of excellence that speaks for itself
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicsConfig.achievements.map((achievement, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 ${achievementsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Trophy className="h-8 w-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-2xl font-bold text-accent mb-2">{achievement.year}</p>
                <p className="text-primary-foreground/90 text-sm">{achievement.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
