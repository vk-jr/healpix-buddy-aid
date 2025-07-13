
import { Heart, Stethoscope } from 'lucide-react';

export const Header = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex justify-center items-center gap-3 mb-4">
        <div className="bg-gradient-to-r from-pink-200 to-blue-200 p-3 rounded-full">
          <Stethoscope className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
          HealPix
        </h1>
        <Heart className="w-6 h-6 text-pink-400 animate-pulse" />
      </div>
      
      <p className="text-xl text-gray-600 mb-2">
        Hey there! Upload a photo and I'll try to help ❤️
      </p>
      
      <p className="text-sm text-gray-500 max-w-2xl mx-auto">
        Your friendly virtual first-aid buddy is here to provide helpful insights about wounds, 
        skin conditions, and more. Remember, this is for informational purposes only!
      </p>
    </div>
  );
};
