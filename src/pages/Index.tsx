
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
      setError('Oops! Something went wrong with the analysis. Please try again. 💔');
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 relative overflow-hidden">
      {/* Background decorations - adjusted for mobile */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-24 sm:w-40 h-24 sm:h-40 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-pink-200/30 to-red-200/30 rounded-full blur-xl sm:blur-2xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-lg sm:blur-xl animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-7xl">
        <Header />
        
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Main content area */}
          <div className="flex-1 w-full space-y-6 sm:space-y-8">
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
          
          {/* Mascot sidebar - responsive positioning */}
          <div className="w-full lg:w-80 xl:w-96 flex justify-center lg:justify-start lg:sticky lg:top-8 order-first lg:order-last">
            <Mascot isLoading={isLoading} hasResponse={!!response || !!error} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
