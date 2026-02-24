import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { navigationConfig } from "@/config/navigationConfig";
import { collegeConfig } from "@/config/collegeConfig";
import { contactConfig } from "@/config/contactConfig";
import logo from "@/assets/logo.jpg";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AdvertisementBanner } from "@/components/sections/AdvertisementBanner";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      {/* Advertisement Banner */}
      <AdvertisementBanner />

      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href={`tel:${contactConfig.phones[0].number}`} className="flex items-center gap-2 hover:text-accent transition-colors group">
              <Phone className="h-4 w-4 group-hover:animate-pulse" />
              {contactConfig.phones[0].number}
            </a>
            <span className="opacity-80">{contactConfig.emails[0].email}</span>
          </div>
          <span className="font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Academic Year: {collegeConfig.academicYear}
          </span>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={cn(
          "sticky top-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/95 backdrop-blur-glass shadow-medium py-2"
            : "bg-white py-0"
        )}
      >
        <div className="container-custom">
          <div className={cn(
            "flex items-center justify-between transition-all duration-300",
            isScrolled ? "h-16" : "h-20"
          )}>
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-3 hover:opacity-90 transition-all duration-300 group">
              <img
                src={logo}
                alt={collegeConfig.name}
                className={cn(
                  "w-auto transition-all duration-300 group-hover:scale-105",
                  isScrolled ? "h-12" : "h-14"
                )}
              />
              <div className="hidden sm:block">
                <h1 className="font-heading font-bold text-lg text-primary leading-tight group-hover:text-primary/90 transition-colors">
                  {collegeConfig.shortName}
                </h1>
                <p className="text-xs text-muted-foreground">{collegeConfig.tagline}</p>
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigationConfig.map((item, index) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 relative overflow-hidden group",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "text-foreground hover:bg-muted hover:text-primary"
                    )
                  }
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10">{item.label}</span>
                </NavLink>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                asChild
                variant="default"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <NavLink to="/admissions">Apply Now</NavLink>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu className={cn(
                  "h-6 w-6 absolute transition-all duration-300",
                  isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                )} />
                <X className={cn(
                  "h-6 w-6 absolute transition-all duration-300",
                  isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                )} />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={cn(
              "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
              isOpen ? "max-h-[600px] opacity-100 pb-4" : "max-h-0 opacity-0"
            )}
          >
            <div className="flex flex-col gap-1 pt-2 border-t border-border">
              {navigationConfig.map((item, index) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "px-4 py-3 rounded-lg font-medium transition-all duration-300",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted hover:translate-x-2"
                    )
                  }
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                    transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  {item.label}
                </NavLink>
              ))}
              <Button
                asChild
                variant="default"
                className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              >
                <NavLink to="/admissions">Apply Now</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};