export interface Advertisement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  bgColor: "primary" | "accent" | "gradient";
  icon?: string;
  isActive: boolean;
  startDate: string;
  endDate: string;
  position: "hero" | "banner" | "popup";
}

export const advertisementsConfig: Advertisement[] = [
  {
    id: "AD001",
    title: "Admissions Open 2025-26",
    subtitle: "Limited Seats Available!",
    description: "Secure your child's future at Smt. Sahana Ravi International School. Early bird discount of 10% on tuition fees for applications received before March 31st.",
    ctaText: "Apply Now",
    ctaLink: "/admissions",
    bgColor: "gradient",
    isActive: true,
    startDate: "2026-01-01",
    endDate: "2026-06-30",
    position: "banner"
  },
  {
    id: "AD002",
    title: "Summer Camp 2026",
    subtitle: "Learn, Play, Explore!",
    description: "Exciting summer camp with robotics, arts, sports, and adventure activities. Open for students aged 5-15 years. Dates: May 15 - June 15.",
    ctaText: "Register Now",
    ctaLink: "/contact",
    bgColor: "accent",
    isActive: true,
    startDate: "2026-01-01",
    endDate: "2026-06-15",
    position: "banner"
  },
  {
    id: "AD003",
    title: "Free Career Counseling",
    subtitle: "For Class IX & X Students",
    description: "Expert guidance on stream selection, competitive exam preparation, and career planning. Every Saturday, 10 AM - 1 PM.",
    ctaText: "Book Session",
    ctaLink: "/contact",
    bgColor: "primary",
    isActive: true,
    startDate: "2026-01-01",
    endDate: "2026-12-31",
    position: "banner"
  }
];

export const getActiveAdvertisements = (position?: Advertisement["position"]) => {
  const today = new Date();
  return advertisementsConfig.filter(ad => {
    const start = new Date(ad.startDate);
    const end = new Date(ad.endDate);
    const isDateValid = today >= start && today <= end;
    const isPositionValid = position ? ad.position === position : true;
    return ad.isActive && isDateValid && isPositionValid;
  });
};
