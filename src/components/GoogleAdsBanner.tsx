"use client";

import { useEffect } from "react";

export interface GoogleAdsBannerProps {
  pId?: string;
  adSlot: string;
}

export default function GoogleAdsBanner({ pId, adSlot }: GoogleAdsBannerProps) {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  if (!pId || !adSlot) return null;

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "inline-block", width: "728px", height: "90px" }}
      data-ad-client={pId}
      data-ad-slot={adSlot}
    />
  );
}
