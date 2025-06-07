import Image from 'next/image';
import React from 'react';

const Buymeacoffee: React.FC = () => {

    const buymeacoffeeLink = process.env.NEXT_PUBLIC_BUYMEACOFFEE_URL || null;

    if (!buymeacoffeeLink) return <></>

    return (
        <div className='mt-4'>
            <a
                target="_blank"
                href={buymeacoffeeLink}
                rel="noopener noreferrer"
                className="inline-flex items-center h-12 px-3 py-1.5 text-white text-base font-cursive bg-orange-500 rounded-md border border-transparent shadow-sm transition-all duration-300 hover:opacity-85 hover:shadow-md"
            >
                <Image
                    src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                    alt="Buy me a coffee"
                    className="w-5 h-5 align-middle"
                    width={20}
                    height={20}
                />
                <span className="ml-2 text-base align-middle">Buy me a coffee</span>
            </a>
        </div>
    );
};

export default Buymeacoffee;
