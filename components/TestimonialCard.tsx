import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
  delay?: number;
}

export default function TestimonialCard({ name, role, content, image, delay = 0 }: TestimonialCardProps) {
  return (
    <div
      className="card-premium p-8 animate-fadeInUp"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="fill-walltrust-secondary text-walltrust-secondary" />
        ))}
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">\"{content}\"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-walltrust-primary to-walltrust-secondary flex items-center justify-center text-white font-bold text-sm">
          {image}
        </div>
        <div>
          <div className="font-semibold text-gray-900 dark:text-white">{name}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">{role}</div>
        </div>
      </div>
    </div>
  );
}
