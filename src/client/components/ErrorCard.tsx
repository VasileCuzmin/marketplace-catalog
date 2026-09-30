interface ErrorCardProps {
  emoji: string;
  title: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function ErrorCard({
  emoji,
  title,
  message,
  actionLabel,
  onAction,
}: ErrorCardProps) {
  return (
    <div className="flex items-center justify-center px-4 py-24">
      <div className="bg-white rounded-2xl shadow-card p-10 max-w-lg w-full text-center">
        <p className="text-5xl mb-6">{emoji}</p>
        <h1 className="text-xl font-bold text-ps-inky-blue mb-1">
          {title}
        </h1>
        <p className="text-sm text-ps-purple-gray mb-8">{message}</p>
        {actionLabel && onAction && (
          <button onClick={onAction} className="btn-primary">
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
}
