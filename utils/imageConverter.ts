
import { type ConvertedImage } from '../types';

export const convertFileToBase64 = (file: File): Promise<ConvertedImage | null> => {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) {
      resolve(null);
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      const base64 = e.target?.result as string;
      if (!base64) {
        resolve(null);
        return;
      }
      
      const img = new Image();
      img.onload = () => {
        resolve({
          id: `${file.name}-${new Date().getTime()}`,
          name: file.name,
          originalSize: file.size,
          encodedSize: base64.length,
          dimensions: {
            width: img.width,
            height: img.height,
          },
          base64,
          mimeType: file.type,
        });
      };
      img.onerror = () => resolve(null);
      img.src = base64;
    };

    reader.onerror = (error) => {
      console.error("FileReader error:", error);
      reject(error);
    };

    reader.readAsDataURL(file);
  });
};
