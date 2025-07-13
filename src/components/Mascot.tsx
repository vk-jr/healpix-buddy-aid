
import { Heart, Sparkles, Brain, Stethoscope, Activity, Zap } from 'lucide-react';

interface MascotProps {
  isLoading: boolean;
  hasResponse: boolean;
}

export const Mascot = ({ isLoading, hasResponse }: MascotProps) => {
  return (
    <div className="text-center space-y-6 sm:space-y-8 w-full max-w-xs sm:max-w-sm mx-auto">
      <div className={`relative transition-all duration-1000 ${isLoading ? 'animate-bounce scale-110' : 'hover:scale-110'}`}>
        <div className="relative">
          {/* Enhanced mascot circle */}
          <div className="bg-gradient-to-br from-blue-400 via-purple-500 via-indigo-500 to-pink-500 p-8 sm:p-10 lg:p-12 rounded-3xl sm:rounded-4xl shadow-2xl hover:shadow-3xl transition-all duration-700 relative overflow-hidden">
            {/* Animated background layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative">
              {isLoading ? (
                <div className="relative">
                  <Brain className="w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 text-white drop-shadow-2xl animate-pulse" />
                  <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3">
                    <Activity className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 text-yellow-300 animate-spin drop-shadow-lg" />
                  </div>
                  {/* Extra glow for loading state */}
                  <div className="absolute inset-0 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-white/20 rounded-full blur-xl animate-pulse"></div>
                </div>
              ) : hasResponse ? (
                <div className="relative">
                  <Heart className="w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 text-white drop-shadow-2xl" />
                  <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3">
                    <Sparkles className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 text-yellow-300 animate-pulse drop-shadow-lg" />
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <Stethoscope className="w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 text-white drop-shadow-2xl" />
                  <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3">
                    <div className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-ping shadow-lg"></div>
                  </div>
                </div>
              )}
              
              {/* Enhanced cute eyes */}
              <div className="absolute -top-3 sm:-top-4 lg:-top-5 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
                <div className="w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full shadow-xl border-2 border-gray-200"></div>
                <div className="w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full shadow-xl border-2 border-gray-200"></div>
              </div>
              
              {/* Enhanced smile */}
              <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2">
                <div className="w-6 sm:w-7 lg:w-8 h-3 sm:h-4 border-b-3 sm:border-b-4 border-white rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>
          
          {/* Enhanced floating elements */}
          {hasResponse && (
            <>
              <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 animate-ping">
                <Heart className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-pink-400 drop-shadow-lg" />
              </div>
              <div className="absolute -bottom-2 sm:-bottom-3 -left-2 sm:-left-3 animate-pulse" style={{ animationDelay: '0.5s' }}>
                <Sparkles className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-yellow-400 drop-shadow-lg" />
              </div>
              <div className="absolute top-4 -left-4 animate-pulse" style={{ animationDelay: '1s' }}>
                <Zap className="w-3 sm:w-4 h-3 sm:h-4 text-orange-400 drop-shadow-lg" />
              </div>
            </>
          )}
          
          {isLoading && (
            <>
              <div className="absolute inset-0 rounded-3xl sm:rounded-4xl border-4 border-yellow-400/40 animate-ping opacity-40"></div>
              <div className="absolute inset-0 rounded-3xl sm:rounded-4xl border-4 border-blue-400/30 animate-ping opacity-30" style={{ animationDelay: '0.5s' }}></div>
            </>
          )}
        </div>
      </div>
      
      {/* Enhanced speech bubble */}
      <div className="bg-gradient-to-br from-white/90 via-blue-50/80 to-purple-50/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-blue-200/50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-pink-200/30 via-purple-200/30 to-blue-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-tr from-blue-200/20 via-cyan-200/20 to-purple-200/20 rounded-full blur-xl"></div>
        
        <div className="relative">
          <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
            <div className={`w-3 sm:w-4 h-3 sm:h-4 rounded-full shadow-lg ${
              isLoading ? 'bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse' : 
              hasResponse ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gradient-to-r from-blue-400 to-cyan-500 animate-pulse'
            }`}></div>
            <p className="font-black text-gray-800 text-base sm:text-lg">
              {isLoading ? 'AI Doctor Working' : hasResponse ? 'Analysis Complete!' : 'Ready to Help!'}
            </p>
            {isLoading && <Zap className="w-4 h-4 text-yellow-500 animate-bounce" />}
          </div>
          
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
            {isLoading 
              ? "I'm carefully analyzing your photo using advanced medical AI patterns and cross-referencing with medical databases... 🧠💭✨" 
              : hasResponse 
              ? "I hope my detailed analysis helps you! Feel free to upload another photo anytime for more insights. 💖🩺✨" 
              : "Hi there! I'm your friendly AI medical assistant powered by advanced algorithms. Upload a photo and I'll provide helpful insights instantly! 👋🩺💫"
            }
          </p>
        </div>
      </div>
    </div>
  );
};
