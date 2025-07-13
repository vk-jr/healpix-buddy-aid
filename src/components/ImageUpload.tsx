
import { useState, useRef } from 'react';
import { Upload, Camera, Image as ImageIcon, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
}

export const ImageUpload = ({ onImageUpload }: ImageUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type.startsWith('image/')) {
      onImageUpload(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      onImageUpload(files[0]);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full">
      <div
        className={`relative border-2 sm:border-3 border-dashed rounded-3xl sm:rounded-4xl p-10 sm:p-16 lg:p-20 text-center transition-all duration-700 cursor-pointer group backdrop-blur-sm ${
          isDragging
            ? 'border-pink-400 bg-gradient-to-br from-pink-50/80 via-white/90 to-purple-50/80 scale-105 shadow-2xl transform rotate-1'
            : 'border-blue-300/60 bg-gradient-to-br from-white/80 via-blue-50/40 to-purple-50/60 hover:border-pink-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-white/90 hover:via-pink-50/50 hover:to-purple-50/70'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={openFileDialog}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
        
        {/* Enhanced background effects */}
        <div className="absolute inset-0 rounded-3xl sm:rounded-4xl bg-gradient-to-br from-blue-100/20 via-purple-100/20 to-pink-100/20 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
        
        {/* Floating sparkles */}
        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
        </div>
        <div className="absolute top-6 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ animationDelay: '0.5s' }}>
          <Sparkles className="w-3 h-3 text-pink-400 animate-pulse" />
        </div>
        <div className="absolute bottom-8 left-12 opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ animationDelay: '1s' }}>
          <Sparkles className="w-2 h-2 text-purple-400 animate-pulse" />
        </div>
        
        <div className="relative space-y-8 sm:space-y-10">
          <div className="flex justify-center">
            <div className={`relative ${isDragging ? 'animate-bounce scale-110' : 'group-hover:animate-bounce group-hover:scale-110'} transition-all duration-300`}>
              {/* Main upload icon with enhanced styling */}
              <div className="bg-gradient-to-br from-blue-500 via-purple-500 via-indigo-500 to-pink-500 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 animate-pulse"></div>
                
                <div className="relative">
                  {isDragging ? (
                    <ImageIcon className="w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 text-white animate-pulse drop-shadow-xl" />
                  ) : (
                    <Upload className="w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 text-white drop-shadow-xl" />
                  )}
                </div>
              </div>
              
              {/* Enhanced floating elements */}
              <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-gradient-to-r from-yellow-400 to-orange-500 p-2 sm:p-3 rounded-full animate-ping shadow-xl">
                <Zap className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-white" />
              </div>
              
              {/* Pulse rings */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-4 border-blue-400/30 animate-ping opacity-30"></div>
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-4 border-pink-400/20 animate-ping opacity-20" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            {/* Enhanced heading */}
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-800 mb-3 sm:mb-4 leading-tight">
                {isDragging ? '📸 Drop your photo here!' : '📤 Upload Your Medical Photo'}
              </h3>
              <div className="absolute inset-0 text-2xl sm:text-3xl lg:text-4xl font-black text-gray-300 blur-sm opacity-20 animate-pulse">
                {isDragging ? '📸 Drop your photo here!' : '📤 Upload Your Medical Photo'}
              </div>
            </div>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed px-2 font-medium">
              {isDragging 
                ? 'Release to start the AI analysis...' 
                : 'Drag and drop your image here, or click the button below to browse and get instant medical insights'
              }
            </p>
            
            {/* Enhanced button */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
              <Button 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white rounded-2xl sm:rounded-3xl px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 w-full sm:w-auto relative overflow-hidden"
              >
                {/* Button background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 animate-pulse"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <Camera className="w-5 sm:w-6 h-5 sm:h-6" />
                  Choose Photo
                </div>
              </Button>
            </div>
            
            {/* Enhanced file info badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base text-gray-600 mt-8 sm:mt-10">
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-green-200/50">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-sm"></div>
                <span className="font-semibold">JPG, PNG, GIF</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-blue-200/50">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse shadow-sm"></div>
                <span className="font-semibold">Max 10MB</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-purple-200/50">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse shadow-sm"></div>
                <span className="font-semibold">Instant Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
