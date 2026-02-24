export interface SchoolEvent {
  id: string;
  title: string;
  category: "Academic" | "Cultural" | "Sports" | "Special" | "Competition" | "Holiday";
  date: string;
  endDate?: string;
  time?: string;
  description: string;
  academicYear: string;
  status: "Upcoming" | "Ongoing" | "Completed";
  image?: string;
  venue?: string;
  highlights?: string[];
}

export const eventsConfig: SchoolEvent[] = [
  {
    id: "EVT001",
    title: "Annual Day Celebration 2025",
    category: "Cultural",
    date: "2025-03-15",
    time: "4:00 PM",
    description: "Grand annual day celebration featuring cultural performances, prize distribution, and special guest address. All parents are cordially invited.",
    academicYear: "2024-25",
    status: "Upcoming",
    venue: "School Auditorium",
    highlights: ["Dance Performances", "Drama", "Music", "Prize Distribution", "Chief Guest Address"]
  },
  {
    id: "EVT002",
    title: "Inter-School Sports Championship",
    category: "Sports",
    date: "2025-02-28",
    endDate: "2025-03-02",
    time: "8:00 AM onwards",
    description: "Three-day inter-school sports event featuring athletics, cricket, football, kabaddi, and badminton competitions.",
    academicYear: "2024-25",
    status: "Upcoming",
    venue: "School Sports Ground",
    highlights: ["Athletics", "Cricket", "Football", "Kabaddi", "Badminton"]
  },
  {
    id: "EVT003",
    title: "Parent-Teacher Meeting",
    category: "Academic",
    date: "2025-02-22",
    time: "9:00 AM - 1:00 PM",
    description: "Quarterly meeting for parents to discuss their ward's academic progress and receive progress reports from class teachers.",
    academicYear: "2024-25",
    status: "Upcoming",
    venue: "Respective Classrooms"
  },
  {
    id: "EVT004",
    title: "Science Exhibition",
    category: "Competition",
    date: "2025-01-25",
    time: "10:00 AM - 3:00 PM",
    description: "Annual science exhibition showcasing innovative projects and experiments by students from Classes VI to X.",
    academicYear: "2024-25",
    status: "Completed",
    venue: "School Science Block",
    highlights: ["Working Models", "Research Projects", "Robotics Display", "Innovation Awards"]
  },
  {
    id: "EVT005",
    title: "Republic Day Celebration",
    category: "Special",
    date: "2025-01-26",
    time: "8:00 AM",
    description: "Patriotic celebration with flag hoisting, march past, cultural performances, and speeches honoring our nation.",
    academicYear: "2024-25",
    status: "Completed",
    venue: "School Main Ground"
  },
  {
    id: "EVT006",
    title: "CBSE Board Exams - Class X",
    category: "Academic",
    date: "2025-02-15",
    endDate: "2025-03-30",
    description: "CBSE Board Examinations for Class X students. All students are advised to collect hall tickets from the office.",
    academicYear: "2024-25",
    status: "Upcoming",
    venue: "Examination Hall"
  },
  {
    id: "EVT007",
    title: "Summer Camp 2025",
    category: "Cultural",
    date: "2025-05-15",
    endDate: "2025-06-15",
    time: "9:00 AM - 4:00 PM",
    description: "Exciting summer camp with activities including robotics, arts & crafts, sports, adventure activities, and personality development.",
    academicYear: "2025-26",
    status: "Upcoming",
    venue: "School Campus",
    highlights: ["Robotics", "Arts & Crafts", "Swimming", "Adventure Activities", "Language Classes"]
  },
  {
    id: "EVT008",
    title: "Holi Celebration",
    category: "Holiday",
    date: "2025-03-14",
    description: "Safe and eco-friendly Holi celebration with organic colors, cultural programs, and traditional festivities.",
    academicYear: "2024-25",
    status: "Upcoming",
    venue: "School Grounds"
  },
  {
    id: "EVT009",
    title: "Career Counseling Workshop",
    category: "Academic",
    date: "2025-02-08",
    time: "10:00 AM - 1:00 PM",
    description: "Expert guidance session for Class IX and X students on stream selection, competitive exam preparation, and career planning.",
    academicYear: "2024-25",
    status: "Completed",
    venue: "School Auditorium"
  },
  {
    id: "EVT010",
    title: "Annual Sports Day",
    category: "Sports",
    date: "2025-01-18",
    time: "8:00 AM - 5:00 PM",
    description: "Annual sports day with track and field events, team sports, and fun activities for all students from Nursery to Class X.",
    academicYear: "2024-25",
    status: "Completed",
    venue: "School Sports Ground",
    highlights: ["100m Race", "Relay", "Long Jump", "Shot Put", "Tug of War", "March Past"]
  },
  {
    id: "EVT011",
    title: "Founders Day Celebration",
    category: "Special",
    date: "2025-04-10",
    time: "10:00 AM",
    description: "Celebration of school founding with special programs, alumni meet, and felicitation of achievers.",
    academicYear: "2024-25",
    status: "Upcoming",
    venue: "School Campus"
  },
  {
    id: "EVT012",
    title: "Educational Trip - Hampi",
    category: "Academic",
    date: "2025-03-22",
    endDate: "2025-03-24",
    description: "Heritage and educational trip to Hampi for Classes 6-10. Experience history firsthand at this UNESCO World Heritage Site.",
    academicYear: "2024-25",
    status: "Upcoming"
  }
];

export const getUpcomingEvents = () =>
  eventsConfig.filter(e => e.status === "Upcoming").sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

export const getCompletedEvents = () =>
  eventsConfig.filter(e => e.status === "Completed").sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

export const getEventsByCategory = (category: SchoolEvent["category"]) =>
  eventsConfig.filter(e => e.category === category);
