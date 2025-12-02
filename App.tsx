import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ImageUploader } from './components/ImageUploader';
import { Results } from './components/Results';
import { InfoSection } from './components/InfoSection';
import { Footer } from './components/Footer';
import { SeoArticle } from './components/SeoArticle';
import { LegalModals } from './components/LegalModals';
import { type ConvertedImage } from './types';
import { convertFileToBase64 } from './utils/imageConverter';

type AppStatus = 'idle' | 'processing' | 'completed';

function App() {
  const [convertedImages, setConvertedImages] = useState<ConvertedImage[]>([]);
  const [status, setStatus] = useState<AppStatus>('idle');
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleFiles = useCallback(async (files: FileList) => {
    if (files.length === 0) return;
    setStatus('processing');
    const imagePromises = Array.from(files).map(convertFileToBase64);
    const newImages = await Promise.all(imagePromises);
    setConvertedImages(prev => [...newImages.filter(img => img !== null) as ConvertedImage[], ...prev]);
    setStatus('completed');
  }, []);

  const handleReset = () => {
    setStatus('idle');
  };

  const openModal = (modalName: string) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen text-gray-200 font-sans selection:bg-blue-500 selection:text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8 md:py-16 max-w-5xl">
        <div className="flex flex-col gap-12">
          {/* Hero Section */}
          <Hero />
          
          {/* Main Converter Tool */}
          <div className="bg-gray-900/40 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 p-1">
            <ImageUploader onFilesSelected={handleFiles} status={status} onReset={handleReset} fileCount={convertedImages.length} />
          </div>

          {/* Results Section */}
          {convertedImages.length > 0 && (
             <Results images={convertedImages} />
          )}

          {/* Info & Features */}
          <InfoSection />

          {/* Long Form SEO Content */}
          <SeoArticle />
        </div>
      </main>

      <Footer onOpenModal={openModal} />
      
      <LegalModals activeModal={activeModal} onClose={closeModal} />
    </div>
  );
}

export default App;