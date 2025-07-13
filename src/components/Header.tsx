
import { Heart, Stethoscope, Sparkles, Activity } from 'lucide-react';

export const Header = () => {
  return (
    <div className="text-center mb-8 sm:mb-12 lg:mb-16 relative">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-4 sm:top-10 left-1/4 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-8 sm:top-20 right-1/4 w-24 sm:w-36 h-24 sm:h-36 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="flex justify-center items-center gap-3 sm:gap-6 mb-6 sm:mb-8">
        {/* Medical icon with enhanced styling */}
        <div className="relative group">
          <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 p-3 sm:p-4 lg:p-5 rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110">
            <Stethoscope className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 animate-pulse">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-1.5 sm:p-2 rounded-full shadow-lg">
              <Sparkles className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-white" />
            </div>
          </div>
          {/* Pulse ring effect */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-4 border-blue-400/30 animate-ping opacity-20"></div>
        </div>
        
        {/* Enhanced brand name */}
        <div className="relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent tracking-tight drop-shadow-sm">
            HealPix
          </h1>
          {/* Animated underline */}
          <div className="absolute -bottom-2 sm:-bottom-3 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-70 animate-pulse"></div>
          {/* Glow effect */}
          <div className="absolute inset-0 text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent blur-sm opacity-30 animate-pulse"></div>
        </div>
        
        {/* Animated heart with enhanced effects */}
        <div className="relative group">
          <Heart className="w-7 sm:w-8 lg:w-10 h-7 sm:h-8 lg:h-10 text-pink-500 animate-pulse drop-shadow-xl" />
          <div className="absolute inset-0 w-7 sm:w-8 lg:w-10 h-7 sm:h-8 lg:h-10 bg-pink-300 rounded-full animate-ping opacity-20"></div>
          <div className="absolute -top-1 -right-1">
            <Activity className="w-3 sm:w-4 h-3 sm:h-4 text-red-400 animate-bounce" />
          </div>
        </div>
      </div>
      
      <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto px-4">
        {/* Enhanced tagline */}
        <div className="relative">
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-bold mb-4 sm:mb-6 leading-tight">
            Your AI Medical Assistant is here! 
            <span className="inline-block ml-2 animate-bounce">🩺✨</span>
          </p>
          <div className="absolute inset-0 text-xl sm:text-2xl lg:text-3xl text-gray-400 font-bold blur-sm opacity-20 animate-pulse">
            Your AI Medical Assistant is here! 🩺✨
          </div>
        </div>
        
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed px-2 sm:px-6 font-medium">
          Upload a photo of any wound, skin condition, or health concern and get instant, 
          helpful insights from our advanced AI system powered by medical expertise
        </p>
        
        {/* Enhanced status badge */}
        <div className="inline-flex items-center gap-3 text-sm sm:text-base text-gray-600 bg-gradient-to-r from-white/80 via-blue-50/80 to-white/80 backdrop-blur-sm rounded-full px-6 sm:px-8 py-3 sm:py-4 border border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg"></div>
            <span className="font-semibold text-gray-700">Safe</span>
          </div>
          <div className="w-1 h-4 bg-gray-300 rounded-full"></div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse shadow-lg"></div>
            <span className="font-semibold text-gray-700">Private</span>
          </div>
          <div className="w-1 h-4 bg-gray-300 rounded-full"></div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse shadow-lg"></div>
            <span className="font-semibold text-gray-700">Instant Analysis</span>
          </div>
        </div>
      </div>
    </div>
  );
};
