import { Bell, ArrowRight, AlertCircle, Star, Calendar, Trophy } from "lucide-react";
import { NavLink } from "react-router-dom";
import { getActiveAnnouncements, Announcement } from "@/config/announcementsConfig";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Badge } from "@/components/ui/badge";

const priorityConfig = {
  High: { icon: AlertCircle, color: "destructive" as const },
  Medium: { icon: Star, color: "default" as const },
  Low: { icon: Calendar, color: "secondary" as const },
};

const categoryIcons: Record<Announcement["category"], typeof Bell> = {
  Admissions: Bell,
  Exams: Calendar,
  Events: Star,
  General: AlertCircle,
  Holiday: Calendar,
  Achievement: Trophy,
};

export const AnnouncementsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const announcements = getActiveAnnouncements().slice(0, 4);

  return (
    <section ref={ref} className="section-padding bg-muted/30 overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 text-destructive font-medium text-sm mb-4">
              <Bell className="h-4 w-4 animate-pulse" />
              Latest Updates
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              News & Announcements
            </h2>
          </div>
          <Button asChild variant="outline" className="group self-start md:self-auto hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            <NavLink to="/events">
              View All
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </Button>
        </div>

        {/* Announcements Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {announcements.map((announcement, index) => {
            const PriorityIcon = priorityConfig[announcement.priority].icon;
            const CategoryIcon = categoryIcons[announcement.category];
            
            return (
              <div
                key={announcement.id}
                className={`group bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium border border-transparent hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge variant={priorityConfig[announcement.priority].color} className="text-xs">
                      {announcement.priority} Priority
                    </Badge>
                    <Badge variant="outline" className="text-xs flex items-center gap-1">
                      <CategoryIcon className="h-3 w-3" />
                      {announcement.category}
                    </Badge>
                  </div>
                  <div className={`p-2 rounded-lg transition-colors duration-300 ${
                    announcement.priority === 'High' 
                      ? 'bg-destructive/10 text-destructive group-hover:bg-destructive group-hover:text-destructive-foreground' 
                      : 'bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground'
                  }`}>
                    <PriorityIcon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {announcement.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {announcement.description}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(announcement.publishDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                  <span className="px-2 py-1 rounded-full bg-muted text-xs">
                    Valid till: {new Date(announcement.expiryDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};