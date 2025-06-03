
import Script from "next/script";

export interface GoogleAdsBannerProps {
    pId?: string;
    adSlot: string;
}

export default function GoogleAdsBanner({ pId, adSlot }: GoogleAdsBannerProps) {


    if (!pId || !adSlot) return null;

    return (
        <div className="py-4">
            <ins
                className="adsbygoogle"
                style={{ display: "inline-block", width: "728px", height: "90px" }}
                data-ad-client={pId}
                data-ad-slot={adSlot}
            />
            <Script id={`adsense-${adSlot}`} strategy="afterInteractive">
                {`(adsbygoogle = window.adsbygoogle || []).push({});`}
            </Script>
        </div>
    );
}
