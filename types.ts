
export interface ConvertedImage {
  id: string;
  name: string;
  originalSize: number;
  encodedSize: number;
  dimensions: {
    width: number;
    height: number;
  };
  base64: string;
  mimeType: string;
}
