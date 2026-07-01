interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionTitle({ eyebrow, title, description, centered = true }: SectionTitleProps) {
  return (
    <div className={centered ? "text-center mb-14" : "mb-14"}>
      {eyebrow && (
        <p className="text-walltrust-secondary font-semibold text-xs uppercase tracking-[0.35em] mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-8">
          {description}
        </p>
      )}
    </div>
  );
}
