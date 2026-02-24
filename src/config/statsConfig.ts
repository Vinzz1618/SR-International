import { GraduationCap, Users, Trophy, BookOpen, Home } from "lucide-react";

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  icon: string;
  animationDuration: number;
}

export const statsConfig: Stat[] = [
  {
    id: "STAT001",
    label: "Students Enrolled",
    value: 800,
    suffix: "+",
    icon: "GraduationCap",
    animationDuration: 2000
  },
  {
    id: "STAT002",
    label: "Qualified Teachers",
    value: 45,
    suffix: "+",
    icon: "Users",
    animationDuration: 1500
  },
  {
    id: "STAT003",
    label: "Years of Excellence",
    value: 20,
    suffix: "+",
    icon: "Trophy",
    animationDuration: 1000
  },
  {
    id: "STAT004",
    label: "Boarding Students",
    value: 350,
    suffix: "+",
    icon: "Home",
    animationDuration: 1500
  }
];

export const iconMap = {
  GraduationCap,
  Users,
  Trophy,
  BookOpen,
  Home
};
