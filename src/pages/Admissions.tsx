import { Layout } from "@/components/layout/Layout";
import { collegeConfig } from "@/config/collegeConfig";
import { contactConfig } from "@/config/contactConfig";
import { CheckCircle, FileText, Calendar, Phone, ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { NavLink } from "react-router-dom";

const Admissions = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: classesRef, isVisible: classesVisible } = useScrollReveal();
  const { ref: processRef, isVisible: processVisible } = useScrollReveal();
  const { ref: docsRef, isVisible: docsVisible } = useScrollReveal();
  const { ref: whyRef, isVisible: whyVisible } = useScrollReveal();

  const admissionSteps = [
    {
      step: 1,
      title: "Submit Enquiry",
      description: "Fill the online enquiry form or download the application from our website."
    },
    {
      step: 2,
      title: "Document Submission",
      description: "Submit birth certificate, previous TC, photographs, and proof of residence."
    },
    {
      step: 3,
      title: "Assessment & Interaction",
      description: "Entrance assessment for applicable grades and parent-student interaction."
    },
    {
      step: 4,
      title: "Complete Enrollment",
      description: "Pay admission fee and complete hostel/transport registration forms."
    }
  ];

  const classesOffered = [
    { level: "Pre-Primary", classes: ["Nursery", "LKG", "UKG"] },
    { level: "Primary", classes: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"] },
    { level: "Middle School", classes: ["Class 6", "Class 7", "Class 8"] },
    { level: "Secondary", classes: ["Class 9", "Class 10"] }
  ];

  const requiredDocuments = [
    "Birth Certificate (original and photocopy)",
    "Transfer Certificate from previous school",
    "Report card / Mark sheet of previous class",
    "4 Passport size photographs",
    "Aadhar Card of student and parent",
    "Proof of residence (utility bill / rental agreement)",
    "Medical fitness certificate"
  ];

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="py-20 md:py-28 bg-hero-gradient">
        <div className={`container-custom transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-4 backdrop-blur-sm">
            Admissions {collegeConfig.academicYear}
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Begin Your Journey With Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-6 leading-relaxed">
            Join {collegeConfig.name} and give your child the gift of quality education, strong values, and holistic development.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-200">
              <Phone className="mr-2 h-5 w-5" />
              Call: {contactConfig.phones[1]?.number}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:scale-105 transition-all duration-200">
              <Download className="mr-2 h-5 w-5" />
              Download Prospectus
            </Button>
          </div>
        </div>
      </section>

      {/* Classes Offered */}
      <section ref={classesRef} className="section-padding bg-background">
        <div className="container-custom">
          <div className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${classesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Classes Available
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Now Accepting Applications
            </h2>
            <p className="text-muted-foreground">
              We welcome applications for all classes from Nursery to Class 10. Limited seats available—apply early!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classesOffered.map((level, index) => (
              <div 
                key={level.level} 
                className={`bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-medium hover:-translate-y-1 transition-all duration-300 ${classesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4">{level.level}</h3>
                <div className="flex flex-wrap gap-2">
                  {level.classes.map((cls) => (
                    <span key={cls} className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                      {cls}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section ref={processRef} className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              How to Apply
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple 4-Step Admission Process
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((item, index) => (
              <div 
                key={item.step} 
                className={`relative transition-all duration-500 ${processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="group bg-card rounded-2xl p-6 shadow-soft border border-border h-full hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
                {item.step < 4 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary h-6 w-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section ref={docsRef} className="section-padding bg-background">
        <div className="container-custom">
          <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${docsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Checklist
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Documents Required
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Please ensure you have the following documents ready before applying for admission to ensure a smooth process.
              </p>
              <div className="space-y-3">
                {requiredDocuments.map((doc, index) => (
                  <div 
                    key={doc} 
                    className="flex items-center gap-3 group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-foreground">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="h-6 w-6 text-accent" />
                <h3 className="font-heading font-semibold text-xl text-foreground">
                  Contact Admissions Office
                </h3>
              </div>
              <div className="space-y-5">
                <div className="flex items-start gap-4 group">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    {contactConfig.phones.map((phone) => (
                      <p key={phone.number} className="text-muted-foreground text-sm">{phone.label}: {phone.number}</p>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <MapPin className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground text-sm">
                      {contactConfig.address.line1}, {contactConfig.address.line2}<br />
                      {contactConfig.address.city}, {contactConfig.address.state} - {contactConfig.address.pincode}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Calendar className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Office Hours</p>
                    <p className="text-muted-foreground text-sm">Mon-Fri: {contactConfig.officeHours.weekdays}</p>
                    <p className="text-muted-foreground text-sm">Saturday: {contactConfig.officeHours.saturday}</p>
                  </div>
                </div>
              </div>
              <Button asChild className="w-full mt-6 hover:scale-[1.02] transition-transform">
                <NavLink to="/contact">
                  Enquire Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyRef} className="section-padding bg-primary text-primary-foreground pb-24">
        <div className="container-custom">
          <div className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Why Choose {collegeConfig.shortName}?
            </h2>
            <p className="text-primary-foreground/80">
              Discover what makes our school the ideal choice for your child's education
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "CBSE Curriculum", desc: "Nationally recognized board with a comprehensive and future-ready syllabus" },
              { title: "Expert Faculty", desc: "Qualified and passionate teachers dedicated to student success" },
              { title: "Boarding Facility", desc: "Safe, comfortable residential accommodation with 24/7 supervision" },
              { title: "Holistic Growth", desc: "Balanced focus on academics, sports, arts, and character development" }
            ].map((item, index) => (
              <div 
                key={item.title} 
                className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="h-8 w-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-primary-foreground/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admissions;
