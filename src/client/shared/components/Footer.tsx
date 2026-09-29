function LeafIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path
        d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <LeafIcon className="w-4 h-4 text-ps-ada-green" />
            <span className="font-semibold text-ps-inky-blue text-sm">Verdant</span>
          </div>
          <p className="text-xs text-ps-purple-gray text-center">
            Course project for{' '}
            <span className="text-ps-inky-blue font-medium">
              Consuming Web APIs with TypeScript 5
            </span>{' '}
            on Pluralsight
          </p>
        </div>
      </div>
    </footer>
  );
}
