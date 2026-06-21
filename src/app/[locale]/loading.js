export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="relative flex flex-col items-center gap-4">
        {/* Анимированное кольцо */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-foreground border-t-transparent shadow-lg" />
      </div>
    </div>
  );
}
