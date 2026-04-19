"use client";

export default function ErrorBanner({
  message,
  onRetry,
  className = "",
}: {
  message: string;
  onRetry?: () => void;
  className?: string;
}) {
  return (
    <div
      role="alert"
      className={`flex items-start gap-3 p-3 rounded-lg border border-danger/30 bg-danger/5 text-sm ${className}`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-danger shrink-0 mt-0.5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      <div className="flex-1 min-w-0">
        <div className="font-medium text-ink">Couldn’t load data</div>
        <div className="text-stone-600 mt-0.5 break-words">{message}</div>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="btn text-xs shrink-0"
          aria-label="Retry"
        >
          Retry
        </button>
      )}
    </div>
  );
}
