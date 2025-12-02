import React, { useState } from 'react';
import { type ConvertedImage } from '../types';
import { CodeBlock } from './CodeBlock';
import { ChevronDownIcon, ChevronUpIcon, CodeBracketIcon, ImageIcon, CheckCircleSolidIcon } from './Icons';

interface ResultItemProps {
  image: ConvertedImage;
  index: number;
}

const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export const ResultItem: React.FC<ResultItemProps> = ({ image, index }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<'image' | 'css'>('image');

  const cssBackground = `background-image: url("${image.base64}");`;

  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700 shadow-sm overflow-hidden">
      <div className="p-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center">
           <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
             {index}
           </div>
           <div className="ml-4 overflow-hidden">
             <p className="text-sm font-medium text-gray-100 truncate">{image.name}</p>
             <div className="flex items-center space-x-3 text-xs text-gray-400 mt-1">
               <span>{formatBytes(image.originalSize)}</span>
               <span className="text-gray-600">|</span>
               <span>{formatBytes(image.encodedSize)}</span>
                <span className="text-gray-600">|</span>
               <span>{image.dimensions.width}x{image.dimensions.height}</span>
             </div>
           </div>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <div className="flex items-center space-x-1 text-green-400">
                <CheckCircleSolidIcon className="h-5 w-5" />
                <span className="text-sm font-medium">Ready</span>
            </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center px-4 py-2 border border-gray-600 text-sm font-medium rounded-md text-gray-300 bg-gray-700 hover:bg-gray-600"
          >
            {isOpen ? 'Hide' : 'Show'}
            {isOpen ? <ChevronUpIcon className="ml-2 h-4 w-4" /> : <ChevronDownIcon className="ml-2 h-4 w-4" />}
          </button>
           <div className="hidden sm:flex rounded-md shadow-sm">
             <button
               type="button"
               onClick={() => setActiveTab('image')}
               className={`relative inline-flex items-center px-3 py-2 rounded-l-md border text-sm font-medium focus:z-10 ${
                 activeTab === 'image' ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'
               }`}
             >
                <ImageIcon className="h-4 w-4 mr-2" />
               Image
             </button>
             <button
               type="button"
               onClick={() => setActiveTab('css')}
               className={`relative -ml-px inline-flex items-center px-3 py-2 rounded-r-md border text-sm font-medium focus:z-10 ${
                 activeTab === 'css' ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'
               }`}
             >
                <CodeBracketIcon className="h-4 w-4 mr-2" />
               CSS
             </button>
           </div>
        </div>
      </div>
      {isOpen && (
        <div className="bg-gray-900/80 border-t border-gray-700 p-4 md:p-6 space-y-6">
          <div className="flex justify-center bg-gray-700/50 p-4 rounded-md border border-gray-600 shadow-inner">
             <img src={image.base64} alt="Preview" className="max-w-full max-h-48 object-contain" />
          </div>

          <CodeBlock
            title="For use in <img> elements"
            code={image.base64}
            language="html"
          />

          <CodeBlock
            title="For use as CSS background"
            code={cssBackground}
            language="css"
          />
        </div>
      )}
    </div>
  );
};