import React from 'react';
import { FileIcon, BoltIcon, ServerIcon, PaperAirplaneIcon, LockClosedIcon, LinkIcon, GlobeAltIcon, PuzzlePieceIcon } from './Icons';

export const InfoSection: React.FC = () => {
  return (
    <div className="mt-16 space-y-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-900/70 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
          <FileIcon className="h-8 w-8 text-blue-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-100">Supported file formats</h3>
          <p className="mt-2 text-gray-300 text-sm">Upload up to 20 images simultaneously (max. 1 MB each) in the most popular web formats: JPG, PNG, GIF, WebP, SVG, or BMP.</p>
          <p className="mt-2 text-gray-300 text-sm">Our converter handles everything from photos and graphics to icons and logos. Simply drag and drop your files or click to browse - the conversion happens instantly in your browser.</p>
        </div>
        <div className="bg-gray-900/70 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
          <BoltIcon className="h-8 w-8 text-blue-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-100">Image optimization option</h3>
          <p className="mt-2 text-gray-300 text-sm">Enable smart compression for your JPEG & PNG images to dramatically reduce file sizes without sacrificing visual quality. Perfect for faster page loads and reduced bandwidth usage.</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-200">Enable optimization</span>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-gray-400 border-4 appearance-none cursor-pointer"/>
                <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-600 cursor-pointer"></label>
            </div>
            <style>{`
                .toggle-checkbox { border-color: transparent; }
                .toggle-checkbox:checked { right: 0; border-color: #60A5FA; }
                .toggle-checkbox:checked + .toggle-label { background-color: #60A5FA; }
            `}</style>
          </div>
        </div>
        <div className="bg-gray-900/70 backdrop-blur-sm p-6 rounded-lg border border-gray-700 flex flex-col items-center justify-center text-center">
            <div className="w-48 h-24 bg-black flex items-center justify-center rounded-md">
                <p className="text-white font-bold">design.dev</p>
            </div>
            <p className="mt-4 text-xs text-gray-400">Copy-paste ready CSS & JavaScript patterns with accessibility baked in.</p>
            <p className="mt-1 text-xs text-gray-500">Ad via Carbon</p>
        </div>
      </div>
      
      <div className="bg-gray-900/70 backdrop-blur-sm p-8 rounded-lg border border-gray-700">
        <h2 className="text-2xl font-bold text-center text-gray-100 mb-8">Why use Base64 Image Encoding?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InfoCard icon={<ServerIcon />} title="Reduce HTTP Requests" text="By embedding images directly into your HTML or CSS as Base64 strings, you eliminate separate HTTP requests for image files. This can significantly improve page load times." />
          <InfoCard icon={<PuzzlePieceIcon />} title="Simplified Deployment" text="Base64 encoded images travel with your code, eliminating the need to manage separate image files and directories. This makes deployment simpler." />
          <InfoCard icon={<PaperAirplaneIcon />} title="Perfect for Email Templates" text="Email clients often block external images by default. Base64 encoded images are embedded in your HTML, ensuring your images display immediately." />
          <InfoCard icon={<LinkIcon />} title="Data URIs Support" text="All modern browsers support data URIs with base64 encoded images. Use them in img src attributes, CSS backgrounds, or even as favicon sources." />
          <InfoCard icon={<GlobeAltIcon />} title="Improved Caching" text="When images are embedded in your CSS or JavaScript files, they benefit from the same caching strategy as your code, leading to more predictable performance." />
          <InfoCard icon={<LockClosedIcon />} title="No External Dependencies" text="Your images remain accessible even if CDN services are down or blocked. Base64 encoding ensures complete self-containment of your web application." />
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
    <div>
        <div className="flex items-center mb-2">
            <div className="text-green-400 mr-3">{icon}</div>
            <h4 className="font-semibold text-gray-100">{title}</h4>
        </div>
        <p className="text-gray-300 text-sm">{text}</p>
    </div>
)
