import React from 'react';

interface LegalModalsProps {
  activeModal: string | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ activeModal, onClose }) => {
  if (!activeModal) return null;

  const renderContent = () => {
    switch (activeModal) {
      case 'contact':
        return (
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Contact Us</h3>
                <p>We value your feedback and inquiries.</p>
                <div className="bg-gray-800 p-4 rounded border border-gray-700">
                    <p className="text-sm text-gray-400">Website:</p>
                    <p className="text-blue-400 font-mono">doodax.com</p>
                    <p className="text-sm text-gray-400 mt-2">Email:</p>
                    <p className="text-blue-400 font-mono">hsini.web@gmail.com</p>
                </div>
                <p className="text-sm text-gray-400">We aim to respond to all inquiries within 24-48 hours.</p>
            </div>
        );
      case 'about':
        return (
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">About Doodax Base64</h3>
                <p>Doodax is a premium, free-to-use developer tool created to simplify the workflow of web designers and engineers worldwide.</p>
                <p>Our mission is to provide fast, secure, and privacy-focused utilities that run entirely in your browser. No server uploads, no data collection, just pure utility.</p>
                <p>Powered by modern web technologies like React 19 and Vite.</p>
            </div>
        );
      case 'guide':
        return (
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">How to Use</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                    <li>Click the upload area or drag and drop your image files.</li>
                    <li>Wait for the instant conversion process to finish.</li>
                    <li>Click the copy button to grab the HTML `&lt;img&gt;` code or the CSS background snippet.</li>
                    <li>Paste directly into your project!</li>
                </ol>
            </div>
        );
      case 'privacy':
        return (
            <div className="space-y-4 text-sm">
                <h3 className="text-2xl font-bold text-white">Privacy Policy</h3>
                <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
                <p>At Doodax.com, privacy is our priority. This tool operates entirely client-side.</p>
                <h4 className="font-bold text-white mt-4">1. Data Collection</h4>
                <p>We do not upload your images to any server. All processing happens within your browser's memory using the FileReader API.</p>
                <h4 className="font-bold text-white mt-4">2. Cookies</h4>
                <p>We may use local storage to save your preferences (like optimization settings), but we do not use tracking cookies for personal identification.</p>
                <h4 className="font-bold text-white mt-4">3. Third-Party Services</h4>
                <p>We may use standard analytics tools (like Google Analytics) to understand general traffic patterns, but this does not include your uploaded content.</p>
            </div>
        );
      case 'terms':
         return (
            <div className="space-y-4 text-sm">
                <h3 className="text-2xl font-bold text-white">Terms of Service</h3>
                <p>By using Doodax.com, you agree to these terms.</p>
                <ul className="list-disc list-inside">
                    <li>You are responsible for the images you convert.</li>
                    <li>Do not use this tool for illegal content.</li>
                    <li>The service is provided "as is" without warranty.</li>
                </ul>
            </div>
         );
       case 'dmca':
         return (
            <div className="space-y-4 text-sm">
                <h3 className="text-2xl font-bold text-white">DMCA / Copyright</h3>
                <p>Since we do not host or store any of your images on our servers, we technically cannot "take down" content that resides only on your computer. However, we respect intellectual property rights.</p>
                <p>If you believe our site is being used to infringe on your rights in a way we can control, please contact <strong>hsini.web@gmail.com</strong>.</p>
            </div>
         );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className="relative bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-800 flex justify-between items-center bg-gray-900/50">
           <div className="flex items-center space-x-2">
               <span className="text-yellow-500 text-xl">⚠️</span>
               <span className="text-xs font-bold text-yellow-500 uppercase tracking-widest border border-yellow-500/50 px-2 py-0.5 rounded">Compliance Notice</span>
           </div>
           <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
           </button>
        </div>

        {/* Disclaimer Banner */}
        <div className="bg-blue-900/20 px-6 py-3 border-b border-blue-500/10">
            <p className="text-xs text-blue-200 text-center">
                This site complies with Google Publisher Policies. User data is processed securely client-side.
            </p>
        </div>

        {/* Content Scroll Area */}
        <div className="p-8 overflow-y-auto text-gray-300 leading-relaxed custom-scrollbar">
            {renderContent()}
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-gray-800 bg-gray-900/50 flex justify-end">
            <button 
                onClick={onClose}
                className="px-6 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
                Close
            </button>
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.3);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.2);
        }
      `}</style>
    </div>
  );
};