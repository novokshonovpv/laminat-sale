"use client";

import { useEffect } from "react";

export function LegacyProductRedirect({ routes }: { routes: Record<string, string> }) {
  useEffect(() => {
    const model = new URLSearchParams(window.location.search).get("model");
    if (model && routes[model]) window.location.replace(routes[model]);
  }, [routes]);

  return null;
}
