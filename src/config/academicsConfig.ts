export const academicsConfig = {
  academicYear: "2025-26",
  board: "Central Board of Secondary Education (CBSE)",
  medium: "English",
  grades: [
    {
      id: "kindergarten",
      name: "Kindergarten",
      description: "Foundation years focusing on play-based learning and early development.",
      classes: ["Nursery", "LKG", "UKG"],
      highlights: [
        "Activity-based learning",
        "Motor skills development",
        "Language and numeracy foundation",
        "Creative arts and music"
      ]
    },
    {
      id: "primary",
      name: "Primary School",
      description: "Building strong fundamentals in core subjects with focus on conceptual understanding.",
      classes: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"],
      highlights: [
        "CBSE aligned curriculum",
        "English, Hindi, Kannada languages",
        "Mathematics and Environmental Studies",
        "Computer literacy introduction"
      ]
    },
    {
      id: "middle",
      name: "Middle School",
      description: "Comprehensive education with focus on analytical thinking and subject mastery.",
      classes: ["Class 6", "Class 7", "Class 8"],
      highlights: [
        "Science, Mathematics, Social Studies",
        "Language proficiency development",
        "Computer Science fundamentals",
        "Co-curricular integration"
      ]
    },
    {
      id: "secondary",
      name: "Secondary School",
      description: "Board exam preparation with comprehensive subject coverage and career guidance.",
      classes: ["Class 9", "Class 10"],
      highlights: [
        "CBSE Board examination preparation",
        "Science and Mathematics focus",
        "Career counseling sessions",
        "Competitive exam foundation"
      ]
    }
  ],
  subjects: {
    languages: ["English", "Hindi", "Kannada", "Sanskrit"],
    core: ["Mathematics", "Science", "Social Studies"],
    electives: ["Computer Science", "Art & Craft", "Physical Education", "Music"]
  },
  teachingMethodology: [
    {
      title: "Interactive Learning",
      description: "Engaging classroom sessions enhanced with digital tools, multimedia presentations, and smart board technology for immersive learning experiences."
    },
    {
      title: "Experiential Education",
      description: "Hands-on experiments, project-based learning, and real-world application of concepts that make knowledge stick."
    },
    {
      title: "Continuous Assessment",
      description: "Regular evaluations, unit tests, and formative assessments to track progress and identify areas for improvement."
    },
    {
      title: "Personalized Support",
      description: "Dedicated remedial sessions and one-on-one attention for students who need extra guidance to excel."
    },
    {
      title: "Small Class Sizes",
      description: "Optimal teacher-student ratio ensuring every child receives individual attention and personalized mentoring."
    }
  ],
  achievements: [
    { year: "2024", achievement: "100% pass rate in Class X Board Examinations" },
    { year: "2024", achievement: "District level science exhibition winners" },
    { year: "2023", achievement: "State level sports championship qualifiers" },
    { year: "2023", achievement: "Best School Award - Davangere District" }
  ]
};
