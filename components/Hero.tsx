import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="text-center bg-gradient-to-br from-indigo-800 via-purple-800 to-blue-900 text-white rounded-xl shadow-2xl shadow-purple-500/10 p-8 md:p-12">
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Convert your images to base64</h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-indigo-200">
        Transform your images into base64-encoded strings instantly. Perfect for HTML, CSS, and email templates.
      </p>
    </div>
  );
};