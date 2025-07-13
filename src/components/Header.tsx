
import { Heart, Stethoscope, Sparkles } from 'lucide-react';

export const Header = () => {
  return (
    <div className="text-center mb-8 sm:mb-12 lg:mb-16 relative">
      {/* Background decoration - responsive */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-4 sm:top-10 left-1/4 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-blue-100/40 to-pink-100/40 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute top-8 sm:top-20 right-1/4 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-pink-100/40 to-purple-100/40 rounded-full blur-xl sm:blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="flex justify-center items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300">
            <Stethoscope className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 text-white" />
          </div>
          <div className="absolute -top-1 -right-1">
            <Sparkles className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-yellow-400 animate-ping" />
          </div>
        </div>
        
        <div className="relative">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
            HealPix
          </h1>
          <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full opacity-60"></div>
        </div>
        
        <div className="relative">
          <Heart className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-pink-500 animate-pulse drop-shadow-lg" />
          <div className="absolute inset-0 w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 bg-pink-200 rounded-full animate-ping opacity-30"></div>
        </div>
      </div>
      
      <div className="space-y-3 sm:space-y-4 max-w-4xl mx-auto px-4">
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-medium mb-3 sm:mb-4">
          Your AI Medical Assistant is here! 🩺✨
        </p>
        
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed px-2 sm:px-4">
          Upload a photo of any wound, skin condition, or health concern and get instant, 
          helpful insights from our advanced AI system
        </p>
        
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500 bg-blue-50 rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-blue-100 mx-auto max-w-fit">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Safe • Private • Instant Analysis</span>
        </div>
      </div>
    </div>
  );
};
