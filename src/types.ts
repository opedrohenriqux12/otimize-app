export interface Scene {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
}

export interface ProblemCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  tag: string;
}

export interface RewardItem {
  id: string;
  title: string;
  points: number;
  category: 'digital' | 'fisico';
  image: string;
  description: string;
}

export interface MecCourse {
  id: string;
  title: string;
  institution: string;
  hours: number;
  points: number;
  progress: number;
  category: string;
}

export interface PodcastTrack {
  id: string;
  title: string;
  duration: string;
  points: number;
  category: string;
  author: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'sophia';
  text: string;
  microSteps?: { text: string; completed: boolean; pts: number }[];
}
