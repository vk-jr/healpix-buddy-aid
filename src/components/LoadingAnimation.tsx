
import { Brain, Search, Sparkles, Activity, Zap } from 'lucide-react';

export const LoadingAnimation = () => {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-blue-100 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-purple-100/20 to-pink-100/20 animate-pulse"></div>
      
      <div className="relative text-center space-y-6 sm:space-y-8">
        <div className="flex justify-center space-x-3 sm:space-x-4 lg:space-x-6">
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl shadow-lg animate-bounce">
              <Brain className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 sm:w-4 h-3 sm:h-4 bg-yellow-400 rounded-full animate-ping"></div>
          </div>
          
          <div className="relative animation-delay-200">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl shadow-lg animate-bounce animation-delay-200">
              <Search className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 sm:w-4 h-3 sm:h-4 bg-green-400 rounded-full animate-ping animation-delay-300"></div>
          </div>
          
          <div className="relative animation-delay-400">
            <div className="bg-gradient-to-br from-pink-500 to-red-500 p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl shadow-lg animate-bounce animation-delay-400">
              <Activity className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 sm:w-4 h-3 sm:h-4 bg-blue-400 rounded-full animate-ping animation-delay-500"></div>
          </div>
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <Zap className="w-4 sm:w-5 lg:w-6 h-4 sm:w-5 lg:h-6 text-yellow-500 animate-pulse" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
              AI Analysis in Progress
            </h3>
            <Sparkles className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-pink-500 animate-pulse" />
          </div>
          
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md mx-auto px-4">
            Our advanced medical AI is carefully analyzing your image and preparing personalized insights...
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
            <div className="flex space-x-1">
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-purple-500 rounded-full animate-bounce animation-delay-200"></div>
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-pink-500 rounded-full animate-bounce animation-delay-400"></div>
            </div>
          </div>
          
          <div className="mt-4 sm:mt-6 bg-blue-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-blue-100">
            <p className="text-xs sm:text-sm text-blue-700 flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Analyzing medical patterns and preparing recommendations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
