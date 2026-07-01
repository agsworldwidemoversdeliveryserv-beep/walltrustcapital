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
      className="glass-card p-8 animate-fade-in"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-walltrust-secondary/10 text-walltrust-secondary shadow-xl mb-5 transition-all duration-300 group-hover:scale-105">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 leading-7">{description}</p>
    </div>
  );
}
