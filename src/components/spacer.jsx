export function DivSpacer({ className = "" }) {
  return (
    <div className={`bg-blue-100 dark:bg-gray-700 border-t border-black/5 ${className}`} />
  );
}

// use spacer components rather dan creating manually on per section 