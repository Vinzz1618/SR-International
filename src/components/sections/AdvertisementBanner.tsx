import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { X, Megaphone, ArrowRight, Sparkles } from "lucide-react";
import { getActiveAdvertisements, Advertisement } from "@/config/advertisementsConfig";
import { Button } from "@/components/ui/button";

export const AdvertisementBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  
  const activeAds = getActiveAdvertisements("banner");

  useEffect(() => {
    if (activeAds.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeAds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeAds.length, isPaused]);

  if (!isVisible || activeAds.length === 0) return null;

  const currentAd = activeAds[currentIndex];

  const getBgClass = () => {
    switch (currentAd.bgColor) {
      case "gradient":
        return "bg-gradient-to-r from-primary via-primary/90 to-accent";
      case "accent":
        return "bg-accent";
      case "primary":
      default:
        return "bg-primary";
    }
  };

  const getTextClass = () => {
    switch (currentAd.bgColor) {
      case "accent":
        return "text-accent-foreground";
      default:
        return "text-primary-foreground";
    }
  };

  return (
    <div 
      className={`${getBgClass()} ${getTextClass()} py-3 px-4 relative overflow-hidden`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float" />
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
        <Sparkles className="absolute top-2 right-20 h-4 w-4 opacity-50 animate-pulse-soft" />
        <Sparkles className="absolute bottom-2 left-32 h-3 w-3 opacity-40 animate-pulse-soft" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="container-custom relative">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white/20 animate-pulse-soft">
              <Megaphone className="h-5 w-5" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-sm md:text-base truncate">
                  {currentAd.title}
                </span>
                {currentAd.subtitle && (
                  <span className="hidden md:inline-block px-2 py-0.5 rounded-full bg-white/20 text-xs font-medium">
                    {currentAd.subtitle}
                  </span>
                )}
              </div>
              <p className="text-xs md:text-sm opacity-90 truncate hidden sm:block">
                {currentAd.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button 
              asChild 
              size="sm" 
              variant="secondary"
              className="bg-white/20 hover:bg-white/30 border-0 text-current font-semibold group"
            >
              <NavLink to={currentAd.ctaLink}>
                {currentAd.ctaText}
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </Button>
            
            <button
              onClick={() => setIsVisible(false)}
              className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Close banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Progress indicators for multiple ads */}
        {activeAds.length > 1 && (
          <div className="flex justify-center gap-1.5 mt-2">
            {activeAds.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-6 bg-white" 
                    : "w-1.5 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to advertisement ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};