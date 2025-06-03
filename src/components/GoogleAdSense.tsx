import Script from "next/script";

export interface GoogleAdSenseProps {
    pId: string;
}

const GoogleAdSense = ({ pId }: GoogleAdSenseProps) => {
    return (
        <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pId}`}
            crossOrigin="anonymous"
        />
    )
}

export default GoogleAdSense