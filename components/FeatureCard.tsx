import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <div
      className="card-premium p-6 animate-fade-in"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="w-12 h-12 bg-gradient-to-br from-walltrust-primary to-walltrust-secondary rounded-lg flex items-center justify-center mb-4 text-white">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
    </div>
  );
}
