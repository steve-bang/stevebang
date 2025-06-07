"use client"

import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

const NotFound: NextPage = () => {
  const router = useRouter();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      
      <div className="text-center p-8 max-w-md">
        <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Looks like you've followed a broken link or entered a URL that doesn't exist.
        </p>
        <div className="space-x-4">
          <button 
            onClick={() => router.back()}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Go Back
          </button>
          <Link href="/" className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple- transition-colors">
            Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;