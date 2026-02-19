
export interface Module {
  title: string;
  duration: string;
}

export interface Course {
  id: number;
  title: string;
  category: string;
  icon: string;
  desc: string;
  progress: number;
  modules: Module[];
  imageUrl: string;
}

export interface User {
  name: string;
  email: string;
  isLoggedIn: boolean;
}

export type ViewState = 'landing' | 'dashboard' | 'lesson';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
