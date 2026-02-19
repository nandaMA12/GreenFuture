
import { Course } from './types';

export const COURSES: Course[] = [
  {
    id: 1,
    title: "Mastering Canva untuk Pemula",
    category: "Desain Grafis",
    icon: "fa-palette",
    desc: "Pelajari dasar-dasar desain menggunakan Canva untuk media sosial dalam 7 hari.",
    progress: 75,
    imageUrl: "https://picsum.photos/seed/canva/800/450",
    modules: [
      { title: "Pengenalan Interface Canva", duration: "10:00" },
      { title: "Menggunakan Template", duration: "15:30" },
      { title: "Teknik Dasar Desain", duration: "20:00" }
    ]
  },
  {
    id: 2,
    title: "Digital Marketing 101",
    category: "Marketing",
    icon: "fa-chart-line",
    desc: "Panduan lengkap memulai bisnis online dari nol sampai dapat pelanggan pertama.",
    progress: 30,
    imageUrl: "https://picsum.photos/seed/marketing/800/450",
    modules: [
      { title: "Dasar Digital Marketing", duration: "12:00" },
      { title: "Strategi Content Marketing", duration: "18:00" },
      { title: "SEO untuk Pemula", duration: "25:00" }
    ]
  },
  {
    id: 3,
    title: "HTML & CSS Dasar",
    category: "Pemrograman",
    icon: "fa-code",
    desc: "Bangun website pertamamu dengan kode HTML dan CSS sederhana.",
    progress: 0,
    imageUrl: "https://picsum.photos/seed/coding/800/450",
    modules: [
      { title: "Struktur HTML", duration: "15:00" },
      { title: "Styling dengan CSS", duration: "25:00" },
      { title: "Responsive Layout", duration: "30:00" }
    ]
  },
  {
    id: 4,
    title: "CapCut Pro Tips",
    category: "Video Editing",
    icon: "fa-video",
    desc: "Buat video viral TikTok dan Reels dengan efek kekinian.",
    progress: 100,
    imageUrl: "https://picsum.photos/seed/video/800/450",
    modules: [
      { title: "Pengenalan CapCut", duration: "08:00" },
      { title: "Transisi & Efek", duration: "22:00" },
      { title: "Color Grading Dasar", duration: "14:00" }
    ]
  }
];
