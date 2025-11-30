
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface RoadmapItem {
  phase: string;
  timeline: string;
  milestones: string[];
}

export interface SonarAnalysisResult {
  classification: string;
  confidence: number;
  threatLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  description: string;
  recommendedAction: string;
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
}

export interface UseCase {
  id: string;
  title: string;
  icon: any; 
  description: string;
  capabilities: string[];
  image: string;
}

export interface IntegrationStep {
  title: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  sector: 'DEFENSE' | 'COMMERCIAL' | 'INFRASTRUCTURE';
  challenge: string;
  solution: string;
  stats: { label: string; value: string }[];
  image: string;
}
