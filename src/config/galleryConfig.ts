import heroCampus from "@/assets/hero-campus.jpg";
import classroom from "@/assets/classroom.jpg";
import schoolBuilding from "@/assets/school-building.jpg";
import campusView from "@/assets/campus-view.jpg";
import assembly from "@/assets/assembly.jpg";
import library from "@/assets/library.jpg";
import sports from "@/assets/sports.jpg";
import culturalEvent from "@/assets/cultural-event.jpg";
import laboratory from "@/assets/laboratory.jpg";

export interface GalleryItem {
  id: string;
  category: "Campus" | "Events" | "Sports" | "Cultural" | "Academics";
  imageUrl: string;
  title: string;
  eventName?: string;
  academicYear: string;
  description?: string;
}

export const galleryConfig: GalleryItem[] = [
  {
    id: "GAL001",
    category: "Campus",
    imageUrl: heroCampus,
    title: "School Main Building",
    academicYear: "2024-25",
    description: "The majestic main building of Smt. Sahana Ravi International School"
  },
  {
    id: "GAL002",
    category: "Academics",
    imageUrl: classroom,
    title: "Smart Classroom",
    academicYear: "2024-25",
    description: "Modern smart classrooms with digital learning facilities"
  },
  {
    id: "GAL003",
    category: "Campus",
    imageUrl: schoolBuilding,
    title: "Academic Block",
    academicYear: "2024-25",
    description: "Our state-of-the-art academic block"
  },
  {
    id: "GAL004",
    category: "Events",
    imageUrl: assembly,
    title: "Morning Assembly",
    academicYear: "2024-25",
    description: "Daily morning assembly with prayers and announcements"
  },
  {
    id: "GAL005",
    category: "Campus",
    imageUrl: campusView,
    title: "School Entrance",
    academicYear: "2024-25",
    description: "The welcoming entrance of our school"
  },
  {
    id: "GAL006",
    category: "Academics",
    imageUrl: library,
    title: "School Library",
    academicYear: "2024-25",
    description: "Well-stocked library with thousands of books"
  },
  {
    id: "GAL007",
    category: "Sports",
    imageUrl: sports,
    title: "Sports Ground",
    academicYear: "2024-25",
    description: "Expansive sports ground for various activities"
  },
  {
    id: "GAL008",
    category: "Cultural",
    imageUrl: culturalEvent,
    title: "Annual Day Performance",
    academicYear: "2024-25",
    description: "Students performing at the Annual Day celebration"
  },
  {
    id: "GAL009",
    category: "Academics",
    imageUrl: laboratory,
    title: "Science Laboratory",
    academicYear: "2024-25",
    description: "Well-equipped science laboratory for practical learning"
  }
];

export const getGalleryByCategory = (category: GalleryItem["category"]) =>
  galleryConfig.filter(item => item.category === category);

export const galleryCategories = ["All", "Campus", "Events", "Sports", "Cultural", "Academics"] as const;
