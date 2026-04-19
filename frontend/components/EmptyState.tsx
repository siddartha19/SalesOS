"use client";

import Link from "next/link";
import type { ReactNode } from "react";

export default function EmptyState({
  icon,
  title,
  description,
  action,
  className = "",
}: {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: { label: string; href?: string; onClick?: () => void };
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center py-10 px-6 ${className}`}
    >
      {icon && (
        <div
          aria-hidden="true"
          className="w-12 h-12 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mb-3"
        >
          {icon}
        </div>
      )}
      <div className="font-medium text-ink">{title}</div>
      {description && (
        <p className="text-sm text-stone-500 mt-1 max-w-sm">{description}</p>
      )}
      {action &&
        (action.href ? (
          <Link href={action.href} className="btn btn-primary text-sm mt-4">
            {action.label}
          </Link>
        ) : (
          <button onClick={action.onClick} className="btn btn-primary text-sm mt-4">
            {action.label}
          </button>
        ))}
    </div>
  );
}
