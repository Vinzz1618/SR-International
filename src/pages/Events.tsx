import { Layout } from "@/components/layout/Layout";
import { eventsConfig, getUpcomingEvents, getCompletedEvents, SchoolEvent } from "@/config/eventsConfig";
import { Calendar, MapPin, Clock, ArrowRight, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import culturalImage from "@/assets/cultural-event.jpg";

const Events = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const upcomingEvents = getUpcomingEvents();
  const completedEvents = getCompletedEvents();

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={culturalImage} alt="Events" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className={`container-custom relative z-10 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
            Events & Activities
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Campus Events
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Stay updated with academic events, cultural programs, sports meets, and more.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="mb-8 bg-muted p-1">
              <TabsTrigger value="upcoming" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300">
                <Sparkles className="h-4 w-4 mr-2" />
                Upcoming ({upcomingEvents.length})
              </TabsTrigger>
              <TabsTrigger value="past" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300">
                Past Events ({completedEvents.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                {upcomingEvents.map((event, index) => (
                  <EventCard key={event.id} event={event} formatDate={formatDate} index={index} />
                ))}
              </div>
              {upcomingEvents.length === 0 && (
                <p className="text-center text-muted-foreground py-12">No upcoming events at the moment.</p>
              )}
            </TabsContent>

            <TabsContent value="past" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                {completedEvents.map((event, index) => (
                  <EventCard key={event.id} event={event} formatDate={formatDate} isPast index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

interface EventCardProps {
  event: SchoolEvent;
  formatDate: (date: string) => string;
  isPast?: boolean;
  index: number;
}

const EventCard = ({ event, formatDate, isPast, index }: EventCardProps) => {
  const categoryColors: Record<string, string> = {
    Academic: "bg-primary/10 text-primary",
    Cultural: "bg-accent/20 text-accent-foreground",
    Sports: "bg-secondary text-secondary-foreground",
    Special: "bg-destructive/10 text-destructive",
    Competition: "bg-primary/10 text-primary",
    Holiday: "bg-muted text-muted-foreground",
  };

  return (
    <div 
      className={`group bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-medium hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 ${isPast ? 'opacity-75' : ''}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <Badge className={categoryColors[event.category] || "bg-muted text-muted-foreground"}>
          {event.category}
        </Badge>
        <Badge variant={isPast ? "secondary" : "default"} className="group-hover:animate-pulse-soft">
          {event.status}
        </Badge>
      </div>

      <h3 className="font-heading font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
        {event.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{event.description}</p>

      {/* Highlights */}
      {event.highlights && event.highlights.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {event.highlights.slice(0, 3).map((highlight, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
              {highlight}
            </span>
          ))}
          {event.highlights.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
              +{event.highlights.length - 3} more
            </span>
          )}
        </div>
      )}

      <div className="space-y-2 text-sm text-muted-foreground pt-4 border-t border-border">
        <div className="flex items-center gap-2 group-hover:text-primary transition-colors">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(event.date)}</span>
          {event.endDate && (
            <span className="flex items-center gap-1">
              <ArrowRight className="h-3 w-3" />
              {formatDate(event.endDate)}
            </span>
          )}
        </div>
        {event.time && (
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{event.time}</span>
          </div>
        )}
        {event.venue && (
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{event.venue}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
