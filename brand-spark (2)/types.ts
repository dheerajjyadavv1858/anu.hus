import { ReactNode } from "react";

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  url: string;
  imageUrl: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  isPrimary: boolean;
}