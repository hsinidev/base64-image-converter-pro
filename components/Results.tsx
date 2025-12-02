import React from 'react';
import { type ConvertedImage } from '../types';
import { ResultItem } from './ResultItem';
import { CheckCircleSolidIcon, DocumentDuplicateIcon } from './Icons';

interface ResultsProps {
  images: ConvertedImage[];
}

export const Results: React.FC<ResultsProps> = ({ images }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between bg-gray-900/70 backdrop-blur-sm p-4 rounded-lg border border-gray-700 shadow-sm">
        <div className="flex items-center space-x-3">
          <DocumentDuplicateIcon className="h-6 w-6 text-blue-400" />
          <h2 className="text-xl font-semibold text-gray-100">Encoding Results</h2>
        </div>
        <div className="flex items-center space-x-2 bg-green-500/20 text-green-300 text-sm font-medium px-3 py-1 rounded-full">
          <CheckCircleSolidIcon className="h-5 w-5" />
          <span>{images.length} file{images.length > 1 ? 's' : ''} converted successfully</span>
        </div>
      </div>
      <div className="space-y-4">
        {images.map((image, index) => (
          <ResultItem key={image.id} image={image} index={index + 1} />
        ))}
      </div>
    </div>
  );
};