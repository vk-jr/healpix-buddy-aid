
import { CheckCircle, AlertCircle, RotateCcw, Heart, Sparkles, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResponseCardProps {
  response: string | null;
  error: string | null;
  onReset: () => void;
  uploadedImage: File | null;
}

const formatResponse = (response: string | null): string => {
  if (!response) return '';
  
  // Extract content after "ai_response":"
  const aiResponseMatch = response.match(/"ai_response":"([^"]*)"/) || response.match(/"ai_response":\"([^"]*)\"/);
  let content = aiResponseMatch ? aiResponseMatch[1] : response;
  
  // If no match found, try to find just the content after ai_response
  if (!aiResponseMatch && response.includes('ai_response')) {
    const parts = response.split('ai_response');
    if (parts.length > 1) {
      content = parts[1].replace(/^[:"'\s]+/, '').replace(/[}"'\s]+$/, '');
    }
  }
  
  // Replace \\n with actual line breaks
  content = content.replace(/\\n/g, '\n');
  
  return content;
};

const formatTextWithBold = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return <strong key={index} className="font-bold text-gray-800">{part}</strong>;
    }
    return part.split('\n').map((line, lineIndex, array) => (
      <span key={`${index}-${lineIndex}`}>
        {line}
        {lineIndex < array.length - 1 && <br />}
      </span>
    ));
  });
};

export const ResponseCard = ({ response, error, onReset, uploadedImage }: ResponseCardProps) => {
  const formattedResponse = formatResponse(response);
  
  return (
    <div className="space-y-6 sm:space-y-8">
      {uploadedImage && (
        <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-blue-100/30 to-pink-100/30 rounded-full blur-2xl"></div>
          <div className="relative">
            <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-1.5 sm:p-2 rounded-lg sm:rounded-xl">
                <span className="text-white text-base sm:text-lg">📸</span>
              </div>
              Your Medical Photo
            </h4>
            <div className="relative max-w-xs sm:max-w-sm mx-auto">
              <img
                src={URL.createObjectURL(uploadedImage)}
                alt="Uploaded medical photo"
                className="w-full h-auto rounded-xl sm:rounded-2xl shadow-xl border-2 sm:border-4 border-white"
              />
              <div className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 bg-green-400 p-1.5 sm:p-2 rounded-full shadow-lg">
                <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border-2 relative overflow-hidden ${
        error ? 'border-red-200' : 'border-green-200'
      }`}>
        {/* Background decoration */}
        <div className={`absolute inset-0 opacity-5 ${
          error ? 'bg-gradient-to-br from-red-100 to-red-200' : 'bg-gradient-to-br from-green-100 to-blue-200'
        }`}></div>
        
        <div className="relative">
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex justify-center mb-4 sm:mb-6">
              {error ? (
                <div className="relative">
                  <div className="bg-gradient-to-br from-red-500 to-pink-500 p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-xl">
                    <AlertCircle className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
              ) : (
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-xl">
                    <CheckCircle className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1">
                    <Sparkles className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-yellow-400 animate-pulse" />
                  </div>
                </div>
              )}
            </div>
            
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              {error ? (
                <>
                  <span className="text-center">Oops! Something went wrong 😅</span>
                  <Heart className="w-5 sm:w-6 h-5 sm:h-6 text-pink-500" />
                </>
              ) : (
                <>
                  <span className="text-center">Medical AI Analysis Complete! ✨</span>
                  <Heart className="w-5 sm:w-6 h-5 sm:h-6 text-pink-500 animate-pulse" />
                </>
              )}
            </h3>
          </div>
          
          <div className={`p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl mb-6 sm:mb-8 relative ${
            error ? 'bg-gradient-to-br from-red-50 to-pink-50 border border-red-100' : 'bg-gradient-to-br from-green-50 to-blue-50 border border-green-100'
          }`}>
            <div className="text-gray-800 leading-relaxed text-base sm:text-lg">
              {error ? (
                <p className="text-center font-medium">{error}</p>
              ) : (
                <div className="space-y-2 sm:space-y-3">{formatTextWithBold(formattedResponse)}</div>
              )}
            </div>
          </div>
          
          {!error && (
            <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl mb-6 sm:mb-8 border border-blue-100">
              <div className="flex items-start gap-2 sm:gap-3">
                <Shield className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-800 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Important Medical Disclaimer</p>
                  <p className="text-xs sm:text-sm text-blue-700 leading-relaxed">
                    This AI analysis is for informational purposes only and should not replace professional medical advice. 
                    For serious concerns or persistent symptoms, please consult with a qualified healthcare professional.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          <div className="text-center">
            <Button 
              onClick={onReset}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white rounded-xl sm:rounded-2xl px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl w-full sm:w-auto"
            >
              <RotateCcw className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3" />
              Analyze Another Photo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
