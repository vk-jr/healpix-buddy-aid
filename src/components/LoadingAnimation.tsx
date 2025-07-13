
import { Brain, Search, Sparkles, Activity, Zap, Heart } from 'lucide-react';

export const LoadingAnimation = () => {
  return (
    <div className="bg-gradient-to-br from-white/90 via-blue-50/70 to-purple-50/70 backdrop-blur-xl rounded-3xl sm:rounded-4xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-blue-200/50 relative overflow-hidden">
      {/* Enhanced background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-purple-100/30 to-pink-100/30 animate-pulse"></div>
      
      {/* Floating particles */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400/60 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-12 right-8 w-1 h-1 bg-purple-400/60 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-8 left-12 w-1.5 h-1.5 bg-pink-400/60 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
      
      <div className="relative text-center space-y-8 sm:space-y-10">
        {/* Enhanced icon animation */}
        <div className="flex justify-center space-x-4 sm:space-x-6 lg:space-x-8">
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-2xl animate-bounce hover:shadow-3xl transition-all duration-500">
              <Brain className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-white drop-shadow-lg" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 sm:w-5 h-4 sm:h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping shadow-lg"></div>
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-4 border-blue-400/30 animate-ping opacity-30"></div>
          </div>
          
          <div className="relative" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-purple-500 via-purple-600 to-pink-600 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-2xl animate-bounce hover:shadow-3xl transition-all duration-500" style={{ animationDelay: '0.2s' }}>
              <Search className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-white drop-shadow-lg" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 sm:w-5 h-4 sm:h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-ping shadow-lg" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-4 border-purple-400/30 animate-ping opacity-30" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          <div className="relative" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-to-br from-pink-500 via-pink-600 to-red-600 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-2xl animate-bounce hover:shadow-3xl transition-all duration-500" style={{ animationDelay: '0.4s' }}>
              <Activity className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-white drop-shadow-lg" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 sm:w-5 h-4 sm:h-5 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-ping shadow-lg" style={{ animationDelay: '0.8s' }}></div>
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-4 border-pink-400/30 animate-ping opacity-30" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        
        <div className="space-y-4 sm:space-y-6">
          {/* Enhanced title */}
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <Zap className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-yellow-500 animate-pulse drop-shadow-lg" />
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 bg-clip-text text-transparent drop-shadow-sm">
              AI Analysis in Progress
            </h3>
            <Sparkles className="w-5 sm:w-6 lg:w-7 h-5 sm:w-6 lg:h-7 text-pink-500 animate-pulse drop-shadow-lg" />
          </div>
          
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-lg mx-auto px-4 font-medium">
            Our advanced medical AI is carefully analyzing your image and preparing personalized insights with cutting-edge technology...
          </p>
          
          {/* Enhanced loading dots */}
          <div className="flex items-center justify-center gap-6 mt-8 sm:mt-10">
            <div className="flex space-x-2">
              <div className="w-3 sm:w-4 h-3 sm:h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-bounce shadow-lg"></div>
              <div className="w-3 sm:w-4 h-3 sm:h-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 sm:w-4 h-3 sm:h-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
          
          {/* Enhanced status message */}
          <div className="mt-6 sm:mt-8 bg-gradient-to-r from-blue-50/80 via-white/80 to-purple-50/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-blue-200/50 shadow-xl">
            <p className="text-sm sm:text-base text-blue-800 flex items-center justify-center gap-3 font-semibold">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse shadow-sm"></div>
              Analyzing medical patterns and preparing comprehensive recommendations
              <Heart className="w-4 h-4 text-pink-500 animate-pulse" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
