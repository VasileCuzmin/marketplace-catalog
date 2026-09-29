interface LoadingSpinnerProps {
  message?: string;
}

export default function LoadingSpinner({ message = 'Loading...' }: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24">
      <div
        className="w-10 h-10 border-4 border-ps-purple-gray border-t-ps-pink rounded-full animate-spin"
        role="status"
        aria-label={message}
      />
      <p className="text-ps-purple-gray text-sm">{message}</p>
    </div>
  );
}
