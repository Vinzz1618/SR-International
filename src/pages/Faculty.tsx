import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { getActiveFaculty, type Faculty as FacultyType } from "@/config/facultyConfig";
import { User, BookOpen, Award, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FacultyPage = () => {
  const [filter, setFilter] = useState<string>("All");
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  
  const faculty = getActiveFaculty();
  const departments = ["All", ...new Set(faculty.map(f => f.department).filter(Boolean))];
  
  const filteredFaculty = filter === "All" 
    ? faculty 
    : faculty.filter(f => f.department === filter);

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="py-20 md:py-28 bg-hero-gradient">
        <div className={`container-custom transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
            Our Team
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Faculty & Staff
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Meet our dedicated team of experienced educators committed to nurturing the next generation of leaders.
          </p>
        </div>
      </section>

      {/* Filter & Faculty Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setFilter(dept as string)}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
                  filter === dept
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Faculty Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFaculty.map((member, index) => (
              <FacultyCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

const FacultyCard = ({ member, index }: { member: FacultyType; index: number }) => {
  return (
    <div
      className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium border border-border transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Avatar */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <User className="h-12 w-12 text-primary" />
        </div>
        {member.department && (
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 text-xs font-medium text-primary">
            {member.department}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="font-heading font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
          {member.name}
        </h3>
        <p className="text-primary text-sm font-medium mb-4">{member.designation}</p>

        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 shrink-0" />
            <span className="line-clamp-1">{member.subjects.join(", ")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 shrink-0" />
            <span>{member.qualification}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 shrink-0" />
            <span>{member.experience} years experience</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyPage;
