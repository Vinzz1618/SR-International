export interface Testimonial {
  id: string;
  name: string;
  role: "Student" | "Parent" | "Alumni";
  message: string;
  image?: string;
  academicYear: string;
  designation?: string;
}

export const testimonialsConfig: Testimonial[] = [
  {
    id: "TEST001",
    name: "Kavitha Murthy",
    role: "Parent",
    message: "SSRIS has been a blessing for our son. The boarding facility is excellent and the teachers are like family. We've seen tremendous improvement in his academics and confidence. The school truly lives up to its values.",
    academicYear: "2024-25"
  },
  {
    id: "TEST002",
    name: "Rahul Gowda",
    role: "Alumni",
    message: "My years at SSRIS shaped who I am today. The discipline, values, and quality education I received prepared me well for competitive exams. I'm now pursuing engineering and I credit my foundation to this wonderful institution.",
    academicYear: "2022-23",
    designation: "Engineering Student"
  },
  {
    id: "TEST003",
    name: "Priya Shetty",
    role: "Student",
    message: "I love studying at SSRIS! The teachers explain everything so clearly and the hostel life is fun. I've made so many friends and learned to be independent. The sports and cultural activities are the best part!",
    academicYear: "2024-25",
    designation: "Class 9 Student"
  },
  {
    id: "TEST004",
    name: "Manjunath Patil",
    role: "Parent",
    message: "Our students consistently perform well in board examinations and extracurriculars. The strong focus on character building, leadership and community service makes SSRIS stand out from other schools.",
    academicYear: "2024-25"
  },
  {
    id: "TEST005",
    name: "Deepika Rao",
    role: "Alumni",
    message: "SSRIS gave me the foundation for success. The teachers' dedication and the school's emphasis on both academics and values prepared me for life beyond school. I'm grateful for every moment spent there.",
    academicYear: "2021-22",
    designation: "Medical Student"
  }
];
