
import { CheckCircle, AlertCircle, RotateCcw, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResponseCardProps {
  response: string | null;
  error: string | null;
  onReset: () => void;
  uploadedImage: File | null;
}

export const ResponseCard = ({ response, error, onReset, uploadedImage }: ResponseCardProps) => {
  return (
    <div className="space-y-6">
      {uploadedImage && (
        <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
          <h4 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
            📸 Your Photo
          </h4>
          <div className="relative max-w-sm mx-auto">
            <img
              src={URL.createObjectURL(uploadedImage)}
              alt="Uploaded"
              className="w-full h-auto rounded-2xl shadow-md"
            />
          </div>
        </div>
      )}
      
      <div className={`bg-white rounded-3xl p-8 shadow-lg border ${error ? 'border-red-100' : 'border-green-100'}`}>
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            {error ? (
              <div className="bg-red-100 p-4 rounded-full">
                <AlertCircle className="w-8 h-8 text-red-500" />
              </div>
            ) : (
              <div className="bg-green-100 p-4 rounded-full">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
            )}
          </div>
          
          <h3 className="text-2xl font-semibold text-gray-700 mb-2 flex items-center justify-center gap-2">
            {error ? 'Oopsie! 😅' : 'Here\'s what I found! ✨'}
            <Heart className="w-5 h-5 text-pink-400" />
          </h3>
        </div>
        
        <div className={`p-6 rounded-2xl mb-6 ${error ? 'bg-red-50' : 'bg-green-50'}`}>
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {error || response}
          </p>
        </div>
        
        {!error && (
          <div className="bg-blue-50 p-4 rounded-2xl mb-6">
            <p className="text-sm text-blue-700">
              💡 <strong>Remember:</strong> This is for informational purposes only. 
              For serious concerns, please consult with a healthcare professional.
            </p>
          </div>
        )}
        
        <div className="text-center">
          <Button 
            onClick={onReset}
            className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white rounded-full px-8 py-3 font-semibold transition-all duration-300 hover:scale-105"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Try Another Photo
          </Button>
        </div>
      </div>
    </div>
  );
};
