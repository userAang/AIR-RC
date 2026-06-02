"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { injectSpeedInsights } from "@vercel/speed-insights";

export function SpeedInsightsClient() {
  const pathname = usePathname();

  useEffect(() => {
    const controller = injectSpeedInsights({
      debug: process.env.NODE_ENV !== "production",
      route: pathname,
    });

    if (!controller) return;
    controller.setRoute(pathname);
  }, [pathname]);

  return null;
}
