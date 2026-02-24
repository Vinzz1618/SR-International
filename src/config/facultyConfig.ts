export interface Faculty {
  id: string;
  name: string;
  designation: string;
  subjects: string[];
  qualification: string;
  experience: number;
  image: string;
  academicYear: string;
  isActive: boolean;
  department?: string;
}

export const facultyConfig: Faculty[] = [
  {
    id: "FAC001",
    name: "Mrs. Saraswathi Devi",
    designation: "Head of Primary",
    subjects: ["English", "Environmental Studies"],
    qualification: "M.A. English, B.Ed.",
    experience: 18,
    image: "/images/faculty/faculty-1.jpg",
    academicYear: "2025-26",
    isActive: true,
    department: "Primary"
  },
  {
    id: "FAC002",
    name: "Mr. Ramesh Kulkarni",
    designation: "Senior Science Teacher",
    subjects: ["Physics", "Chemistry", "General Science"],
    qualification: "M.Sc. Physics, B.Ed.",
    experience: 15,
    image: "/images/faculty/faculty-2.jpg",
    academicYear: "2025-26",
    isActive: true,
    department: "Secondary"
  },
  {
    id: "FAC003",
    name: "Mrs. Lakshmi Narayana",
    designation: "Mathematics Teacher",
    subjects: ["Mathematics", "Mental Ability"],
    qualification: "M.Sc. Mathematics, B.Ed.",
    experience: 12,
    image: "/images/faculty/faculty-3.jpg",
    academicYear: "2025-26",
    isActive: true,
    department: "Secondary"
  },
  {
    id: "FAC004",
    name: "Mr. Venkatesh Gowda",
    designation: "Social Studies Teacher",
    subjects: ["History", "Geography", "Civics"],
    qualification: "M.A. History, B.Ed.",
    experience: 10,
    image: "/images/faculty/faculty-4.jpg",
    academicYear: "2025-26",
    isActive: true,
    department: "Middle School"
  },
  {
    id: "FAC005",
    name: "Mrs. Pushpa Hegde",
    designation: "Kannada Teacher",
    subjects: ["Kannada", "Sanskrit"],
    qualification: "M.A. Kannada, B.Ed.",
    experience: 14,
    image: "/images/faculty/faculty-5.jpg",
    academicYear: "2025-26",
    isActive: true,
    department: "Languages"
  },
  {
    id: "FAC006",
    name: "Mr. Suresh Kumar",
    designation: "Computer Science Teacher",
    subjects: ["Computer Science", "IT"],
    qualification: "MCA, B.Ed.",
    experience: 8,
    image: "/images/faculty/faculty-6.jpg",
    academicYear: "2025-26",
    isActive: true,
    department: "Technology"
  },
  {
    id: "FAC007",
    name: "Mrs. Anitha Rao",
    designation: "Kindergarten Coordinator",
    subjects: ["Early Childhood Education"],
    qualification: "B.Ed. (Early Childhood), Montessori Diploma",
    experience: 11,
    image: "/images/faculty/faculty-7.jpg",
    academicYear: "2025-26",
    isActive: true,
    department: "Kindergarten"
  },
  {
    id: "FAC008",
    name: "Mr. Basavaraj Patil",
    designation: "Physical Education Teacher",
    subjects: ["Physical Education", "Sports"],
    qualification: "B.P.Ed., M.P.Ed.",
    experience: 9,
    image: "/images/faculty/faculty-8.jpg",
    academicYear: "2025-26",
    isActive: true,
    department: "Sports"
  }
];

export const getActiveFaculty = () => facultyConfig.filter(f => f.isActive);
export const getFacultyByDepartment = (department: string) => 
  facultyConfig.filter(f => f.isActive && f.department === department);
