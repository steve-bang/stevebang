
export interface GoogleAdsBannerProps {
    pId: string | undefined;
}

export default function GoogleAdsBanner({ pId }: GoogleAdsBannerProps) {
    if (pId)
        return (
            <div>
                <ins className="adsbygoogle"
                    style={{ display: "inline-block", width: "728px", height: "90px" }}
                    data-ad-client={pId}
                    data-ad-slot="5558650644"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({ });
                </script>
            </div>
        );
    return (<></>)
}
