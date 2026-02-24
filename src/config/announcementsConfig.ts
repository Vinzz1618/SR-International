export interface Announcement {
  id: string;
  title: string;
  description: string;
  publishDate: string;
  expiryDate: string;
  academicYear: string;
  priority: "High" | "Medium" | "Low";
  category: "Admissions" | "Exams" | "Events" | "General" | "Holiday" | "Achievement";
}

export const announcementsConfig: Announcement[] = [
  {
    id: "ANN001",
    title: "🎓 Admissions Open for 2025-26",
    description: "Applications are now being accepted for Nursery to Class X for the academic year 2025-26. Limited seats available for both day scholars and residential students. Early bird discount available till March 31st!",
    publishDate: "2026-01-01",
    expiryDate: "2026-06-30",
    academicYear: "2025-26",
    priority: "High",
    category: "Admissions"
  },
  {
    id: "ANN002",
    title: "🏆 Annual Day Celebration - March 15, 2026",
    description: "All parents and guardians are cordially invited to attend our Annual Day celebration. The event will feature cultural performances, prize distribution, and special recognitions. Program starts at 4:00 PM in the school auditorium.",
    publishDate: "2026-02-01",
    expiryDate: "2026-03-16",
    academicYear: "2025-26",
    priority: "High",
    category: "Events"
  },
  {
    id: "ANN003",
    title: "📝 Class X Board Exam Schedule Released",
    description: "CBSE Class X board examination schedule for March 2026 has been released. Students can collect their hall tickets from the administrative office. Parents are requested to ensure students have all required documents.",
    publishDate: "2026-01-15",
    expiryDate: "2026-03-31",
    academicYear: "2025-26",
    priority: "High",
    category: "Exams"
  },
  {
    id: "ANN004",
    title: "🏫 Campus Visit - Book Your Slot",
    description: "Interested parents can book a campus visit on Saturdays between 10 AM - 1 PM. Experience our infrastructure, meet faculty members, and learn about our curriculum. Prior appointment required - call +91 89700 88784.",
    publishDate: "2026-01-01",
    expiryDate: "2026-12-31",
    academicYear: "2025-26",
    priority: "Medium",
    category: "Admissions"
  },
  {
    id: "ANN005",
    title: "🌴 Summer Vacation Notice",
    description: "Summer vacation for students will be from April 15 to June 1, 2026. Hostel students may stay back with prior written permission from parents. Summer camp registrations are now open!",
    publishDate: "2026-03-15",
    expiryDate: "2026-06-01",
    academicYear: "2025-26",
    priority: "Medium",
    category: "Holiday"
  },
  {
    id: "ANN006",
    title: "🏅 State-Level Science Exhibition Winners",
    description: "Congratulations to our students Aditya Kumar (Class IX) and Priya Sharma (Class VIII) for winning first place at the State-Level Science Exhibition with their innovative solar water purification project!",
    publishDate: "2026-01-20",
    expiryDate: "2026-04-30",
    academicYear: "2025-26",
    priority: "Medium",
    category: "Achievement"
  },
  {
    id: "ANN007",
    title: "📚 Parent-Teacher Meeting - February 22",
    description: "The quarterly Parent-Teacher Meeting is scheduled for February 22, 2026. Parents are requested to attend between 9 AM - 1 PM to discuss their ward's academic progress and collect progress reports.",
    publishDate: "2026-02-01",
    expiryDate: "2026-02-23",
    academicYear: "2025-26",
    priority: "High",
    category: "General"
  },
  {
    id: "ANN008",
    title: "🎾 Inter-School Sports Championship",
    description: "Our school is hosting the Inter-School Sports Championship from February 28 to March 2. Events include athletics, cricket, football, and badminton. Parents are welcome to attend and cheer for our students!",
    publishDate: "2026-02-10",
    expiryDate: "2026-03-03",
    academicYear: "2025-26",
    priority: "Medium",
    category: "Events"
  }
];

export const getActiveAnnouncements = () => {
  const today = new Date();
  return announcementsConfig.filter(a => {
    const expiry = new Date(a.expiryDate);
    return expiry >= today;
  }).sort((a, b) => {
    const priorityOrder = { High: 0, Medium: 1, Low: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
};

export const getAnnouncementsByPriority = (priority: Announcement["priority"]) =>
  getActiveAnnouncements().filter(a => a.priority === priority);

export const getAnnouncementsByCategory = (category: Announcement["category"]) =>
  getActiveAnnouncements().filter(a => a.category === category);
