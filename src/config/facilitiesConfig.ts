export interface Facility {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  image?: string;
}

export const facilitiesConfig: Facility[] = [
  {
    id: "FAC001",
    name: "Residential & Boarding",
    description: "Secure and comfortable hostel facilities with separate wings for boys and girls, supervised by experienced wardens.",
    icon: "Home",
    features: [
      "Separate hostels for boys and girls",
      "24/7 security and supervision",
      "Experienced wardens and caretakers",
      "Nutritious meals - breakfast, lunch, dinner",
      "Recreation and study areas",
      "Regular parent communication"
    ]
  },
  {
    id: "FAC002",
    name: "Smart Classrooms",
    description: "Spacious, well-ventilated classrooms equipped with digital learning tools and modern teaching aids.",
    icon: "Monitor",
    features: [
      "Digital projectors and smart boards",
      "Audio-visual learning aids",
      "Comfortable seating arrangements",
      "Optimal lighting and ventilation",
      "Wi-Fi enabled for digital learning"
    ]
  },
  {
    id: "FAC003",
    name: "Science & Computer Labs",
    description: "Well-equipped laboratories for practical learning in science and technology.",
    icon: "FlaskConical",
    features: [
      "Physics, Chemistry, Biology labs",
      "Modern computer lab with internet",
      "Mathematics activity lab",
      "Safety equipment and protocols",
      "Hands-on experiment facilities"
    ]
  },
  {
    id: "FAC004",
    name: "Library & Resource Center",
    description: "Comprehensive library with graded reading sections and digital resources for all age groups.",
    icon: "Library",
    features: [
      "Age-appropriate book collections",
      "Reference books and encyclopedias",
      "Digital resources and e-books",
      "Quiet reading areas",
      "Newspaper and magazine section"
    ]
  },
  {
    id: "FAC005",
    name: "Sports & Playgrounds",
    description: "Expansive sports facilities for athletics, team sports, and physical fitness activities.",
    icon: "Trophy",
    features: [
      "Large playground for cricket and football",
      "Basketball and volleyball courts",
      "Indoor games facility",
      "Athletics track",
      "Annual sports day events",
      "Professional sports coaching"
    ]
  },
  {
    id: "FAC006",
    name: "Cafeteria & Dining",
    description: "Hygienic cafeteria serving nutritious meals for day scholars and hostel students.",
    icon: "UtensilsCrossed",
    features: [
      "Hygienic food preparation",
      "Balanced nutritious meals",
      "Spacious dining area",
      "Purified drinking water",
      "Vegetarian cuisine"
    ]
  }
];
