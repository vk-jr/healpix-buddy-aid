
import { useState } from 'react';
import { Header } from '@/components/Header';
import { ImageUpload } from '@/components/ImageUpload';
import { LoadingAnimation } from '@/components/LoadingAnimation';
import { ResponseCard } from '@/components/ResponseCard';
import { Mascot } from '@/components/Mascot';

const Index = () => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = async (file: File) => {
    setUploadedImage(file);
    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const formData = new FormData();
      formData.append('image', file);

      const result = await fetch('https://razyeryt.app.n8n.cloud/webhook-test/medical-image', {
        method: 'POST',
        body: formData,
      });

      if (!result.ok) {
        throw new Error('Failed to analyze image');
      }

      const data = await result.text();
      setResponse(data);
    } catch (err) {
      setError('Oops! Something went wrong. Please try again. 💔');
      console.error('Upload error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setUploadedImage(null);
    setIsLoading(false);
    setResponse(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header />
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1 space-y-6">
            {!uploadedImage && !isLoading && !response && !error && (
              <ImageUpload onImageUpload={handleImageUpload} />
            )}
            
            {isLoading && <LoadingAnimation />}
            
            {(response || error) && (
              <ResponseCard 
                response={response} 
                error={error} 
                onReset={handleReset}
                uploadedImage={uploadedImage}
              />
            )}
          </div>
          
          <div className="lg:w-64 flex justify-center lg:justify-start">
            <Mascot isLoading={isLoading} hasResponse={!!response || !!error} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
