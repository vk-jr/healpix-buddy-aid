
import { Heart, Sparkles, Brain, Stethoscope, Activity } from 'lucide-react';

interface MascotProps {
  isLoading: boolean;
  hasResponse: boolean;
}

export const Mascot = ({ isLoading, hasResponse }: MascotProps) => {
  return (
    <div className="text-center space-y-6">
      <div className={`relative transition-all duration-700 ${isLoading ? 'animate-bounce' : 'hover:scale-110'}`}>
        <div className="relative">
          {/* Main mascot circle */}
          <div className="bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
            
            <div className="relative">
              {isLoading ? (
                <div className="relative">
                  <Brain className="w-20 h-20 text-white animate-pulse" />
                  <div className="absolute -top-2 -right-2">
                    <Activity className="w-8 h-8 text-yellow-300 animate-spin" />
                  </div>
                </div>
              ) : hasResponse ? (
                <div className="relative">
                  <Heart className="w-20 h-20 text-white" />
                  <div className="absolute -top-2 -right-2">
                    <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <Stethoscope className="w-20 h-20 text-white" />
                  <div className="absolute -top-2 -right-2">
                    <div className="w-6 h-6 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                </div>
              )}
              
              {/* Cute eyes */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <div className="w-3 h-3 bg-white rounded-full shadow-lg"></div>
                <div className="w-3 h-3 bg-white rounded-full shadow-lg"></div>
              </div>
              
              {/* Smile */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-3 border-b-3 border-white rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          {hasResponse && (
            <>
              <div className="absolute -top-3 -right-3 animate-ping">
                <Heart className="w-6 h-6 text-pink-400" />
              </div>
              <div className="absolute -bottom-2 -left-2 animate-pulse animation-delay-500">
                <Sparkles className="w-5 h-5 text-yellow-400" />
              </div>
            </>
          )}
          
          {isLoading && (
            <div className="absolute inset-0 rounded-3xl border-4 border-yellow-300 animate-ping opacity-30"></div>
          )}
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-xl border-2 border-blue-100 max-w-64 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-100/50 to-purple-100/50 rounded-full blur-xl"></div>
        
        <div className="relative">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className={`w-3 h-3 rounded-full ${
              isLoading ? 'bg-yellow-400 animate-pulse' : 
              hasResponse ? 'bg-green-400' : 'bg-blue-400 animate-pulse'
            }`}></div>
            <p className="font-bold text-gray-800">
              {isLoading ? 'AI Doctor' : hasResponse ? 'Analysis Complete!' : 'Ready to Help!'}
            </p>
          </div>
          
          <p className="text-sm text-gray-700 leading-relaxed">
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
