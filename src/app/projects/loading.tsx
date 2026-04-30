export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero skeleton */}
      <div className="h-screen bg-gray-900 animate-pulse" />

      {/* Stats skeleton */}
      <section className="py-24 px-6 md:px-20 bg-[#0b0f10]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-32 bg-gray-800 rounded-xl animate-pulse" />
          ))}
        </div>
      </section>

      {/* Grid skeleton */}
      <section className="py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="glass-card aspect-[4/5] bg-gray-800 rounded-xl animate-pulse" />
          ))}
        </div>
      </section>
    </div>
  );
}
