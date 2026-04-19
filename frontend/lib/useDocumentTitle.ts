"use client";

import { useEffect } from "react";

const SUFFIX = "SalesOS";

export function useDocumentTitle(title: string | null | undefined) {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const prev = document.title;
    document.title = title ? `${title} · ${SUFFIX}` : SUFFIX;
    return () => {
      document.title = prev;
    };
  }, [title]);
}
