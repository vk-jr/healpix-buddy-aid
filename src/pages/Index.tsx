
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/80 relative overflow-hidden">
      {/* Modern background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-emerald-400/20 via-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-violet-400/10 via-fuchsia-400/10 to-pink-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400/40 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-pink-400/40 rounded-full animate-bounce" style={{ animationDelay: '5s' }}></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-7xl">
        <Header />
        
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Main content area with glass morphism */}
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
          
          {/* Enhanced mascot sidebar */}
          <div className="w-full lg:w-80 xl:w-96 flex justify-center lg:justify-start lg:sticky lg:top-8 order-first lg:order-last">
            <Mascot isLoading={isLoading} hasResponse={!!response || !!error} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
