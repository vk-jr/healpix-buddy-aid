
import { Heart, Sparkles, Brain, Stethoscope, Activity } from 'lucide-react';

interface MascotProps {
  isLoading: boolean;
  hasResponse: boolean;
}

export const Mascot = ({ isLoading, hasResponse }: MascotProps) => {
  return (
    <div className="text-center space-y-4 sm:space-y-6 w-full max-w-xs sm:max-w-sm mx-auto">
      <div className={`relative transition-all duration-700 ${isLoading ? 'animate-bounce' : 'hover:scale-110'}`}>
        <div className="relative">
          {/* Main mascot circle - responsive sizing */}
          <div className="bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
            
            <div className="relative">
              {isLoading ? (
                <div className="relative">
                  <Brain className="w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 text-white animate-pulse" />
                  <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2">
                    <Activity className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 text-yellow-300 animate-spin" />
                  </div>
                </div>
              ) : hasResponse ? (
                <div className="relative">
                  <Heart className="w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 text-white" />
                  <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2">
                    <Sparkles className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 text-yellow-300 animate-pulse" />
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <Stethoscope className="w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 text-white" />
                  <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2">
                    <div className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                </div>
              )}
              
              {/* Cute eyes - responsive positioning */}
              <div className="absolute -top-2 sm:-top-3 lg:-top-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white rounded-full shadow-lg"></div>
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white rounded-full shadow-lg"></div>
              </div>
              
              {/* Smile */}
              <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="w-4 sm:w-5 lg:w-6 h-2 sm:h-3 border-b-2 sm:border-b-3 border-white rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Floating elements - responsive sizing */}
          {hasResponse && (
            <>
              <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 animate-ping">
                <Heart className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-pink-400" />
              </div>
              <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2 animate-pulse animation-delay-500">
                <Sparkles className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-yellow-400" />
              </div>
            </>
          )}
          
          {isLoading && (
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-yellow-300 animate-ping opacity-30"></div>
          )}
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border-2 border-blue-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-pink-100/50 to-purple-100/50 rounded-full blur-xl"></div>
        
        <div className="relative">
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
            <div className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full ${
              isLoading ? 'bg-yellow-400 animate-pulse' : 
              hasResponse ? 'bg-green-400' : 'bg-blue-400 animate-pulse'
            }`}></div>
            <p className="font-bold text-gray-800 text-sm sm:text-base">
              {isLoading ? 'AI Doctor' : hasResponse ? 'Analysis Complete!' : 'Ready to Help!'}
            </p>
          </div>
          
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            {isLoading 
              ? "I'm carefully analyzing your photo using advanced medical AI patterns... 🧠💭" 
              : hasResponse 
              ? "I hope my analysis helps! Feel free to upload another photo anytime. 💖✨" 
              : "Hi there! I'm your friendly AI medical assistant. Upload a photo and I'll provide helpful insights! 👋🩺"
            }
          </p>
        </div>
      </div>
    </div>
  );
};
