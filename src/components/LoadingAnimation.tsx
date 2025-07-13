
import { Brain, Search, Sparkles } from 'lucide-react';

export const LoadingAnimation = () => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg border border-blue-100">
      <div className="text-center space-y-6">
        <div className="flex justify-center space-x-4">
          <div className="bg-blue-100 p-4 rounded-full animate-pulse">
            <Brain className="w-8 h-8 text-blue-600 animate-bounce" />
          </div>
          <div className="bg-pink-100 p-4 rounded-full animate-pulse animation-delay-200">
            <Search className="w-8 h-8 text-pink-600 animate-bounce animation-delay-200" />
          </div>
          <div className="bg-purple-100 p-4 rounded-full animate-pulse animation-delay-400">
            <Sparkles className="w-8 h-8 text-purple-600 animate-bounce animation-delay-400" />
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">
            Analyzing your photo... 🧠🔍
          </h3>
          <p className="text-gray-500">
            Give me a moment to take a closer look and provide helpful insights!
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      </div>
    </div>
  );
};
