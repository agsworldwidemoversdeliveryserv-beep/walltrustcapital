interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionTitle({ eyebrow, title, description, centered = true }: SectionTitleProps) {
  return (
    <div className={centered ? "text-center mb-12" : "mb-12"}>
      {eyebrow && (
        <p className="text-walltrust-primary font-semibold text-sm uppercase tracking-wider mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
