
import { Heart, Stethoscope, Sparkles } from 'lucide-react';

export const Header = () => {
  return (
    <div className="text-center mb-16 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-100/40 to-pink-100/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-1/4 w-24 h-24 bg-gradient-to-br from-pink-100/40 to-purple-100/40 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="flex justify-center items-center gap-4 mb-6">
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300">
            <Stethoscope className="w-10 h-10 text-white" />
          </div>
          <div className="absolute -top-1 -right-1">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-ping" />
          </div>
        </div>
        
        <div className="relative">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
            HealPix
          </h1>
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full opacity-60"></div>
        </div>
        
        <div className="relative">
          <Heart className="w-8 h-8 text-pink-500 animate-pulse drop-shadow-lg" />
          <div className="absolute inset-0 w-8 h-8 bg-pink-200 rounded-full animate-ping opacity-30"></div>
        </div>
      </div>
      
      <div className="space-y-4 max-w-3xl mx-auto">
        <p className="text-2xl text-gray-700 font-medium mb-4">
          Your AI Medical Assistant is here! 🩺✨
        </p>
        
        <p className="text-lg text-gray-600 leading-relaxed">
          Upload a photo of any wound, skin condition, or health concern and get instant, 
          helpful insights from our advanced AI system
        </p>
        
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 bg-blue-50 rounded-full px-6 py-3 border border-blue-100">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Safe • Private • Instant Analysis</span>
        </div>
      </div>
    </div>
  );
};
