
import { CheckCircle, AlertCircle, RotateCcw, Heart, Sparkles, Shield, Zap } from 'lucide-react';
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
      return <strong key={index} className="font-bold text-gray-900">{part}</strong>;
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
    <div className="space-y-8 sm:space-y-10">
      {uploadedImage && (
        <div className="bg-gradient-to-br from-white/90 via-gray-50/80 to-blue-50/60 backdrop-blur-xl rounded-3xl sm:rounded-4xl p-8 sm:p-10 shadow-2xl border border-gray-200/50 relative overflow-hidden">
          {/* Enhanced background effects */}
          <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-200/20 via-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-20 sm:w-28 h-20 sm:h-28 bg-gradient-to-tr from-emerald-200/15 via-cyan-200/15 to-blue-200/15 rounded-full blur-2xl"></div>
          
          <div className="relative">
            <h4 className="text-xl sm:text-2xl font-black text-gray-800 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
              <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg">
                <span className="text-white text-lg sm:text-xl">📸</span>
              </div>
              Your Medical Photo
              <Sparkles className="w-5 h-5 text-pink-500 animate-pulse" />
            </h4>
            <div className="relative max-w-sm sm:max-w-md mx-auto">
              <img
                src={URL.createObjectURL(uploadedImage)}
                alt="Uploaded medical photo"
                className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl border-4 sm:border-6 border-white/80 backdrop-blur-sm"
              />
              <div className="absolute -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 bg-gradient-to-r from-green-400 to-emerald-500 p-2 sm:p-3 rounded-full shadow-xl">
                <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
              </div>
              {/* Image glow effect */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 blur-xl opacity-50"></div>
            </div>
          </div>
        </div>
      )}
      
      <div className={`bg-gradient-to-br from-white/95 via-gray-50/90 to-blue-50/80 backdrop-blur-xl rounded-3xl sm:rounded-4xl p-8 sm:p-12 lg:p-16 shadow-2xl border-2 relative overflow-hidden ${
        error ? 'border-red-300/50' : 'border-green-300/50'
      }`}>
        {/* Enhanced background decoration */}
        <div className={`absolute inset-0 opacity-10 ${
          error ? 'bg-gradient-to-br from-red-200 via-pink-200 to-red-300' : 'bg-gradient-to-br from-green-200 via-blue-200 to-emerald-300'
        }`}></div>
        
        {/* Floating particles */}
        <div className="absolute top-6 left-6 w-2 h-2 bg-blue-400/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-12 right-8 w-1 h-1 bg-purple-400/40 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 left-12 w-1.5 h-1.5 bg-pink-400/40 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
        
        <div className="relative">
          <div className="text-center mb-8 sm:mb-10">
            <div className="flex justify-center mb-6 sm:mb-8">
              {error ? (
                <div className="relative">
                  <div className="bg-gradient-to-br from-red-500 via-pink-500 to-red-600 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                    <AlertCircle className="w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 text-white drop-shadow-xl" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse shadow-lg"></div>
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-4 border-red-400/30 animate-ping opacity-30"></div>
                </div>
              ) : (
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                    <CheckCircle className="w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 text-white drop-shadow-xl" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Sparkles className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-yellow-400 animate-pulse drop-shadow-lg" />
                  </div>
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-4 border-green-400/30 animate-ping opacity-20"></div>
                </div>
              )}
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-800 mb-4 sm:mb-6 leading-tight flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
              {error ? (
                <>
                  <span className="text-center">Oops! Something went wrong 😅</span>
                  <Heart className="w-6 sm:w-7 h-6 sm:h-7 text-pink-500 animate-pulse" />
                </>
              ) : (
                <>
                  <span className="text-center">Medical AI Analysis Complete! ✨</span>
                  <Heart className="w-6 sm:w-7 h-6 sm:h-7 text-pink-500 animate-pulse" />
                  <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-500 animate-bounce" />
                </>
              )}
            </h3>
          </div>
          
          <div className={`p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl mb-8 sm:mb-10 relative backdrop-blur-sm ${
            error ? 'bg-gradient-to-br from-red-50/80 via-pink-50/80 to-red-50/80 border border-red-200/50' : 'bg-gradient-to-br from-green-50/80 via-blue-50/80 to-emerald-50/80 border border-green-200/50'
          } shadow-xl`}>
            <div className="text-gray-800 leading-relaxed text-lg sm:text-xl font-medium">
              {error ? (
                <p className="text-center font-semibold">{error}</p>
              ) : (
                <div className="space-y-3 sm:space-y-4">{formatTextWithBold(formattedResponse)}</div>
              )}
            </div>
          </div>
          
          {!error && (
            <div className="bg-gradient-to-r from-blue-50/80 via-purple-50/80 to-pink-50/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl mb-8 sm:mb-10 border border-blue-200/50 shadow-xl">
              <div className="flex items-start gap-3 sm:gap-4">
                <Shield className="w-6 sm:w-7 h-6 sm:h-7 text-blue-600 mt-1 flex-shrink-0 drop-shadow-lg" />
                <div>
                  <p className="text-blue-900 font-bold mb-2 sm:mb-3 text-base sm:text-lg">Important Medical Disclaimer</p>
                  <p className="text-sm sm:text-base text-blue-800 leading-relaxed font-medium">
                    This AI analysis is for informational purposes only and should not replace professional medical advice. 
                    For serious concerns or persistent symptoms, please consult with a qualified healthcare professional immediately.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          <div className="text-center">
            <Button 
              onClick={onReset}
              className="bg-gradient-to-r from-blue-600 via-purple-600 via-indigo-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:via-indigo-700 hover:to-pink-700 text-white rounded-2xl sm:rounded-3xl px-10 sm:px-14 lg:px-16 py-4 sm:py-5 text-lg sm:text-xl font-black transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-3xl w-full sm:w-auto relative overflow-hidden"
            >
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 animate-pulse"></div>
              <div className="relative flex items-center justify-center gap-3">
                <RotateCcw className="w-5 sm:w-6 h-5 sm:h-6" />
                Analyze Another Photo
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
