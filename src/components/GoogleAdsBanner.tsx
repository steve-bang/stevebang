"use client";

import { useEffect } from "react";

export interface GoogleAdsBannerProps {
    pId?: string;
    adSlot: string;
    adFormat: string;
    fullWidthResponsive: boolean;
}

export default function GoogleAdsBanner({ pId, adSlot, adFormat, fullWidthResponsive }: GoogleAdsBannerProps) {


    useEffect(() => {
        try {
            ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
                {}
            );
        } catch (error: any) {
            console.log(error.message);
        }
    }, []);

    if (!pId || !adSlot) return null;

    return (
        <div className="py-4">
            <ins
                className="adsbygoogle"
                style={{ display: "inline-block", width: "728px", height: "90px" }}
                data-ad-client={pId}
                data-ad-slot={adSlot}
                data-ad-format={adFormat}
                data-full-width-responsive={fullWidthResponsive.toString()}
            />
        </div>
    );
}
