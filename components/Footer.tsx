import React from 'react';

interface FooterProps {
  onOpenModal: (modal: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/30 backdrop-blur-lg mt-16 border-t border-white/5">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
             <button onClick={() => onOpenModal('about')} className="hover:text-blue-400 transition-colors">About</button>
             <button onClick={() => onOpenModal('guide')} className="hover:text-blue-400 transition-colors">Guide</button>
             <button onClick={() => onOpenModal('contact')} className="hover:text-blue-400 transition-colors">Contact</button>
             <button onClick={() => onOpenModal('privacy')} className="hover:text-blue-400 transition-colors">Privacy Policy</button>
             <button onClick={() => onOpenModal('terms')} className="hover:text-blue-400 transition-colors">Terms of Service</button>
             <button onClick={() => onOpenModal('dmca')} className="hover:text-blue-400 transition-colors">DMCA</button>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500">
            <p>&copy; {currentYear} Doodax.com. All Rights Reserved.</p>
          </div>

          {/* Powered By Credit */}
          <div className="pt-6 border-t border-white/5 w-full flex justify-center">
            <a 
              href="https://github.com/hsinidev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center space-x-2 text-xs text-gray-500 hover:text-white transition-colors duration-300"
            >
              <span>Powered by</span>
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 group-hover:from-blue-300 group-hover:to-purple-400">
                HSINI MOHAMED
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};