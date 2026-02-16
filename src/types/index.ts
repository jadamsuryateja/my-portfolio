import { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  url: string;
  description: string;
  icon: LucideIcon;
  image?: string; // Add optional image field
  tags?: string[];
}

export interface Service {
  title: string;
  description: string;
}
