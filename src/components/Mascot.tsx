
import { Heart, Sparkles, Brain } from 'lucide-react';

interface MascotProps {
  isLoading: boolean;
  hasResponse: boolean;
}

export const Mascot = ({ isLoading, hasResponse }: MascotProps) => {
  return (
    <div className="text-center space-y-4">
      <div className={`relative transition-all duration-500 ${isLoading ? 'animate-bounce' : ''}`}>
        <div className="bg-gradient-to-r from-pink-200 to-blue-200 p-8 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
          <div className="relative">
            {isLoading ? (
              <Brain className="w-16 h-16 text-blue-600 animate-pulse" />
            ) : hasResponse ? (
              <Heart className="w-16 h-16 text-pink-500" />
            ) : (
              <Sparkles className="w-16 h-16 text-purple-600" />
            )}
            
            {/* Cute eyes */}
            <div className="absolute -top-2 -left-1 flex space-x-1">
              <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
            </div>
            
            {/* Smile */}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
              <div className="w-4 h-2 border-b-2 border-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Floating hearts */}
        {hasResponse && (
          <div className="absolute -top-2 -right-2 animate-ping">
            <Heart className="w-4 h-4 text-pink-400" />
          </div>
        )}
      </div>
      
      <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 max-w-48">
        <p className="text-sm text-gray-600">
          {isLoading 
            ? "Let me think... 🤔" 
            : hasResponse 
            ? "Hope that helps! 💖" 
            : "Hi! I'm your friendly medical assistant! 👋"
          }
        </p>
      </div>
    </div>
  );
};
