import React, { useState, useCallback, useRef } from 'react';
import { MascotIcon, CheckCircleIcon, PlusCircleIcon, SpinnerIcon } from './Icons';

interface ImageUploaderProps {
  onFilesSelected: (files: FileList) => void;
  status: 'idle' | 'processing' | 'completed';
  onReset: () => void;
  fileCount: number;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onFilesSelected, status, onReset, fileCount }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  }, []);

  const handleDragOut = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFilesSelected(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  }, [onFilesSelected]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onFilesSelected(e.target.files);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const renderContent = () => {
    switch (status) {
      case 'processing':
        return (
          <div className="flex flex-col items-center justify-center text-center h-full">
            <SpinnerIcon className="h-16 w-16 text-blue-400 animate-spin" />
            <p className="mt-4 text-lg font-medium text-gray-200">Converting images...</p>
            <p className="text-gray-400">Please wait a moment.</p>
          </div>
        );
      case 'completed':
        return (
          <div className="flex flex-col items-center justify-center text-center h-full bg-green-900/30 rounded-lg p-8">
            <CheckCircleIcon className="h-16 w-16 text-green-400" />
            <h3 className="mt-4 text-2xl font-semibold text-gray-100">Conversion complete!</h3>
            <p className="mt-1 text-gray-300">{fileCount} {fileCount > 1 ? 'files' : 'file'} converted successfully.</p>
            <button
              onClick={handleButtonClick}
              className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 transition-transform transform hover:scale-105"
            >
              <PlusCircleIcon className="h-5 w-5 mr-2" />
              Convert more images
            </button>
          </div>
        );
      case 'idle':
      default:
        return (
          <div
            className={`relative flex flex-col items-center justify-center text-center h-full p-8 border-2 border-dashed rounded-lg transition-colors ${
              isDragging ? 'border-blue-400 bg-blue-900/30' : 'border-gray-700 bg-gray-800/40'
            }`}
            onDragEnter={handleDragIn}
            onDragLeave={handleDragOut}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <MascotIcon className="h-32 w-32" />
            <h3 className="mt-4 text-2xl font-semibold text-gray-100">Drag & drop your images here</h3>
            <p className="mt-1 text-gray-400">or</p>
            <button
              onClick={handleButtonClick}
              className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500"
            >
              Click to browse
            </button>
            <p className="mt-4 text-sm text-gray-500">Supported formats: JPG, PNG, GIF, WebP, SVG, BMP</p>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        );
    }
  };

  return (
    <div className="bg-black/20 rounded-xl p-4 md:p-8">
      <div className="w-full min-h-[300px] flex items-center justify-center">
        {renderContent()}
      </div>
    </div>
  );
};