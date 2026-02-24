import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { collegeConfig } from "@/config/collegeConfig";
import { contactConfig } from "@/config/contactConfig";
import { socialLinksConfig } from "@/config/socialLinksConfig";
import { footerLinks } from "@/config/navigationConfig";
import logo from "@/assets/logo.jpg";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* College Info */}
          <div className="lg:col-span-1">
            <NavLink to="/" onClick={scrollToTop} className="flex items-center gap-3 mb-6">
              <img src={logo} alt={collegeConfig.name} className="h-16 w-auto bg-white rounded-lg p-1" />
            </NavLink>
            <h3 className="font-heading font-bold text-xl mb-2">{collegeConfig.name}</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">{collegeConfig.tagline}</p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Established in {collegeConfig.establishmentYear}, affiliated to {collegeConfig.boardAffiliation}.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.href}
                    onClick={scrollToTop}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-accent">Academics</h4>
            <ul className="space-y-3">
              {footerLinks.academics.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.href}
                    onClick={scrollToTop}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  {contactConfig.address.line1}, {contactConfig.address.line2}, {contactConfig.address.city} - {contactConfig.address.pincode}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${contactConfig.phones[0].number}`}
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="h-5 w-5 text-accent shrink-0" />
                  {contactConfig.phones[0].number}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactConfig.emails[0].email}`}
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="h-5 w-5 text-accent shrink-0" />
                  {contactConfig.emails[0].email}
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href={socialLinksConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={socialLinksConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={socialLinksConfig.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-primary-foreground/70 text-sm text-center md:text-left">
              © 2026 {collegeConfig.name}. All rights reserved.
            </p>
            <p className="text-primary-foreground/50 text-[10px] text-center md:text-left uppercase tracking-widest">
              Designed & Developed by <span className="text-accent font-medium">Antigravity AI</span>
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm group"
          >
            Back to top
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
