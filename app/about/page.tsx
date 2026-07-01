export default function About() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-[#03050a] px-4 py-20 text-center">
      <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.35em] text-walltrust-secondary/80 mb-4">About Walltrust Capital</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">A discreet partner for private banking and global wealth strategy.</h1>
        <p className="text-lg leading-8 text-slate-300">
          Walltrust Capital combines institutional-grade financial expertise with the personalized service expected by families, executives, and global institutions. Our approach is grounded in trust, privacy, and results.
        </p>
      </div>
    </section>
  );
}
