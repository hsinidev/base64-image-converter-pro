import React from 'react';
import { LogoIcon, TutorialIcon, FaqIcon, DonationIcon, ImprintIcon } from './Icons';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/70 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <LogoIcon className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold tracking-tight text-white">BASE64 <span className="text-gray-400 font-medium">IMAGE</span></span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-blue-400 font-medium text-sm flex items-center space-x-1 transition-colors">
              <span className="text-blue-400 font-bold">Home</span>
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 font-medium text-sm flex items-center space-x-1 transition-colors">
              <TutorialIcon className="h-4 w-4" />
              <span>Tutorial</span>
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 font-medium text-sm flex items-center space-x-1 transition-colors">
              <FaqIcon className="h-4 w-4" />
              <span>FAQ</span>
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 font-medium text-sm flex items-center space-x-1 transition-colors">
              <DonationIcon className="h-4 w-4" />
              <span>Donation</span>
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 font-medium text-sm flex items-center space-x-1 transition-colors">
              <ImprintIcon className="h-4 w-4" />
              <span>Imprint</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};