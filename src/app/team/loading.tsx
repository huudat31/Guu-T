export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 py-24 px-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-[300px] bg-gray-800 rounded-xl animate-pulse" />
        ))}
      </div>
    </div>
  );
}
