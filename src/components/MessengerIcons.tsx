interface IconProps {
  className?: string;
}

export function TelegramIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.054 5.56-5.022c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.66-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
    </svg>
  );
}

export function MaxIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <rect width="24" height="24" rx="6" fill="currentColor" opacity="0.12" />
      <path
        d="M5.5 17V7h2.3l3.2 6.1L14.2 7h2.3v10h-2.1v-6.4l-2.8 5.2h-.9L7.9 10.6V17H5.5z"
        fill="currentColor"
      />
    </svg>
  );
}
