import { Course } from "../types";
import { BookOpen, Mic, Briefcase, GraduationCap, Globe, FileText } from "lucide-react";

export const courses: Course[] = [
  {
    id: "1",
    title: "Spoken English",
    description: "Master everyday conversations and build confidence in speaking English fluently in any situation.",
    duration: "3 months",
    features: [
      "Daily conversation practice",
      "Vocabulary building exercises",
      "Pronunciation improvement",
      "Role-playing scenarios",
      "Small batch sizes for personalized attention"
    ],
    icon: "Mic"
  },
  {
    id: "2",
    title: "Business English",
    description: "Learn professional communication skills for workplace success, including emails, presentations, and meetings.",
    duration: "2 months",
    features: [
      "Business vocabulary and phrases",
      "Email writing workshop",
      "Presentation skills",
      "Meeting etiquette and participation",
      "Mock interviews and feedback"
    ],
    icon: "Briefcase"
  },
  {
    id: "3",
    title: "IELTS Preparation",
    description: "Comprehensive preparation for all sections of IELTS exam with proven strategies for scoring high bands.",
    duration: "45 days",
    features: [
      "Section-wise training (Listening, Reading, Writing, Speaking)",
      "Weekly mock tests",
      "Individual feedback sessions",
      "Band-improvement strategies",
      "Study material provided"
    ],
    icon: "GraduationCap"
  },
  {
    id: "4",
    title: "Grammar Masterclass",
    description: "Strengthen your foundation with clear understanding of English grammar rules and their applications.",
    duration: "1 month",
    features: [
      "Tenses mastery",
      "Articles and prepositions",
      "Conditional sentences",
      "Reported speech",
      "Common error correction"
    ],
    icon: "BookOpen"
  },
  {
    id: "5",
    title: "English for Kids",
    description: "Fun and interactive English learning program specially designed for children aged 8-14 years.",
    duration: "4 months",
    features: [
      "Interactive storytelling",
      "Vocabulary games",
      "Basic grammar through activities",
      "Confidence building exercises",
      "Regular progress reports for parents"
    ],
    icon: "Globe"
  },
  {
    id: "6",
    title: "English for Competitive Exams",
    description: "Targeted preparation for English sections in various competitive exams including banking, SSC, and more.",
    duration: "2 months",
    features: [
      "Exam-specific strategies",
      "Speed reading techniques",
      "Error detection practice",
      "Vocabulary for competitive exams",
      "Weekly mock tests"
    ],
    icon: "FileText"
  }
];