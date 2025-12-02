import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from './Icons';

export const SeoArticle: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-16 bg-gray-900/30 backdrop-blur-md rounded-xl border border-white/5 overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-white mb-6">Complete Guide to Base64 Image Conversion</h2>
        
        {/* Toggleable Content Container */}
        <div className={`relative transition-all duration-500 ease-in-out ${expanded ? 'max-h-full' : 'max-h-[80px] overflow-hidden'}`}>
          
          <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-8">
            <p className="lead text-xl text-blue-200">
              Welcome to the most comprehensive resource on Base64 image encoding. Whether you are a frontend developer optimizing website performance, an email marketer fighting rigid templates, or a student learning about data serialization, this tool and guide are designed for you.
            </p>

            <nav className="bg-white/5 p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-white mb-4">Table of Contents</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-blue-300">
                 <li><a href="#what-is-base64" className="hover:underline">1. What is Base64 Encoding?</a></li>
                 <li><a href="#how-it-works" className="hover:underline">2. How the Conversion Works</a></li>
                 <li><a href="#benefits" className="hover:underline">3. Key Benefits for Developers</a></li>
                 <li><a href="#use-cases" className="hover:underline">4. Top Use Cases (HTML, CSS, JSON)</a></li>
                 <li><a href="#performance" className="hover:underline">5. Performance Considerations</a></li>
                 <li><a href="#faq" className="hover:underline">6. Frequently Asked Questions</a></li>
              </ul>
            </nav>

            <h3 id="what-is-base64" className="text-2xl font-semibold text-white">1. What is Base64 Encoding?</h3>
            <p>
              Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format by translating it into a radix-64 representation. In simpler terms, it takes your image file (which is binary data composed of 0s and 1s) and translates it into a string of characters (A-Z, a-z, 0-9, +, /) that is safe to be sent over text-based protocols like HTTP or embedded directly into text files like HTML and CSS.
            </p>
            <p>
              When you use our <strong>Base64 Image Converter</strong>, you are essentially creating a textual representation of your image that modern web browsers can interpret and render just like a normal image file.
            </p>

            <h3 id="how-it-works" className="text-2xl font-semibold text-white">2. How the Conversion Works</h3>
            <p>
              The process is purely mathematical. The binary data of the image is divided into 6-bit blocks. Each 6-bit block is then mapped to a character in the Base64 index table. 
            </p>
            <p>
              Crucially, Doodax.com performs this conversion <strong>client-side</strong>. This means your images never leave your device. The conversion logic runs entirely within your browser's memory using the JavaScript <code>FileReader</code> API. This ensures:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Privacy:</strong> No server logs, no data leaks.</li>
                <li><strong>Speed:</strong> Zero upload latency.</li>
                <li><strong>Security:</strong> Full control over your assets.</li>
            </ul>

            <h3 id="benefits" className="text-2xl font-semibold text-white">3. Key Benefits for Developers</h3>
            <p>
              Why should you convert images to Base64? Here are the strategic advantages for web development:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Reduced HTTP Requests:</strong> Every image on a webpage typically requires a request to the server. By embedding images as Base64 data URIs, you eliminate the request handshake, potentially speeding up initial page rendering for critical assets like logos or icons.</li>
                <li><strong>Self-Contained Files:</strong> Base64 is perfect for single-file applications or distributing code snippets where managing relative file paths for images would be cumbersome.</li>
                <li><strong>No Broken Links:</strong> Since the image data is inside the code, you never have to worry about a file being moved or deleted from the server, resulting in a 404 error.</li>
            </ul>

            <h3 id="use-cases" className="text-2xl font-semibold text-white">4. Top Use Cases</h3>
            <p>
              <strong>In HTML:</strong> You can use the string directly in the <code>src</code> attribute of an image tag.
              <br />
              <code className="bg-black/50 p-1 rounded text-sm text-green-400">&lt;img src="data:image/png;base64,iVBORw0KGgo..." /&gt;</code>
            </p>
            <p>
              <strong>In CSS:</strong> Background images can be defined inline, which is excellent for small UI elements.
              <br />
              <code className="bg-black/50 p-1 rounded text-sm text-green-400">.icon &#123; background-image: url('data:image/png;base64,...'); &#125;</code>
            </p>
            <p>
              <strong>In Email Signatures:</strong> Many email clients block external images by default for privacy reasons. Embedding your company logo as Base64 ensures it renders immediately without the recipient needing to click "Download Images".
            </p>

            <h3 id="performance" className="text-2xl font-semibold text-white">5. Performance Considerations</h3>
            <p>
              While Base64 is powerful, it is not a silver bullet. The encoding process typically increases the file size by approximately 33% compared to the original binary file. Therefore, we recommend using this tool primarily for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li>Small icons and logos (under 10KB-50KB).</li>
                <li>Critical rendering path images (LCP candidates).</li>
                <li>Prototyping and development environments.</li>
            </ul>
            <p>
              For large photographic banners, standard serving methods (CDN, WebP format) are usually superior for bandwidth management.
            </p>

            <h3 id="faq" className="text-2xl font-semibold text-white">6. Frequently Asked Questions (FAQ)</h3>
            
            <div className="space-y-4 mt-4">
                <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-300">Is this tool free?</h4>
                    <p className="mt-1 text-sm">Yes, Doodax.com is 100% free to use with no hidden limits.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-300">What formats are supported?</h4>
                    <p className="mt-1 text-sm">We support all major web formats: JPG, PNG, GIF, WebP, SVG, and BMP.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-300">Can I convert multiple images at once?</h4>
                    <p className="mt-1 text-sm">Absolutely. You can drag and drop multiple files, and the tool will process them in parallel.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-300">Does it work offline?</h4>
                    <p className="mt-1 text-sm">Because it is a client-side PWA (Progressive Web App) architecture using modern browser APIs, it can function even with spotty internet once loaded.</p>
                </div>
            </div>

            <p className="text-sm text-gray-500 mt-8 italic">
                Optimized for Google Search, Bing, and Yahoo. Metadata generated for high CTR.
            </p>
          </div>
          
          {/* Gradient Overlay when collapsed */}
          {!expanded && (
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent pointer-events-none"></div>
          )}
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center mt-4">
          <button 
            onClick={() => setExpanded(!expanded)}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/30"
          >
            <span>{expanded ? 'Show Less' : 'Read More'}</span>
            {expanded ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};