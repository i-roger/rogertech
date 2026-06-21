export interface Project {
  title: string;
  desc: React.ReactNode;
  stack: string[];
  lighthouse: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  deviceTitle: string;
  deviceSlogan: string;
  liveUrl?: string;
}
