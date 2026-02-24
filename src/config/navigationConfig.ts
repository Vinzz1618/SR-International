export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigationConfig: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Faculty", href: "/faculty" },
  { label: "Facilities", href: "/facilities" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" }
];

export const footerLinks = {
  quickLinks: [
    { label: "Admissions", href: "/admissions" },
    { label: "Academic Calendar", href: "/events" },
    { label: "Photo Gallery", href: "/gallery" },
    { label: "Results", href: "/academics" }
  ],
  academics: [
    { label: "Kindergarten", href: "/academics#kindergarten" },
    { label: "Primary School", href: "/academics#primary" },
    { label: "Middle School", href: "/academics#middle" },
    { label: "Secondary School", href: "/academics#secondary" }
  ],
  resources: [
    { label: "Student Portal", href: "#" },
    { label: "Library", href: "/facilities" },
    { label: "Downloads", href: "#" },
    { label: "FAQ", href: "#" }
  ]
};
