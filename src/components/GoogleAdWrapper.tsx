"use client";

import GoogleAdsBanner from "./GoogleAdsBanner";


export default function GoogleAdWrapper() {
    return (
        <div className="my-12 flex justify-center">
            <GoogleAdsBanner pId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} adSlot='5558650644' />
        </div>
    );
}