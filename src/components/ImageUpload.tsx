
import { useState, useRef } from 'react';
import { Upload, Camera, Image as ImageIcon, Zap } from 'lucide-react';
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
        className={`relative border-3 border-dashed rounded-3xl p-16 text-center transition-all duration-500 cursor-pointer group ${
          isDragging
            ? 'border-pink-400 bg-gradient-to-br from-pink-50 via-white to-purple-50 scale-105 shadow-2xl'
            : 'border-blue-300 bg-gradient-to-br from-blue-50/80 via-white to-pink-50/80 hover:border-pink-300 hover:scale-105 hover:shadow-xl'
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
        
        {/* Background decoration */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100/20 to-pink-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative space-y-8">
          <div className="flex justify-center">
            <div className={`relative ${isDragging ? 'animate-bounce' : 'group-hover:animate-bounce'}`}>
              <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8 rounded-2xl shadow-xl">
                {isDragging ? (
                  <ImageIcon className="w-16 h-16 text-white animate-pulse" />
                ) : (
                  <Upload className="w-16 h-16 text-white" />
                )}
              </div>
              <div className="absolute -top-2 -right-2 bg-yellow-400 p-2 rounded-full animate-ping">
                <Zap className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-3">
              {isDragging ? '📸 Drop your photo here!' : '📤 Upload Your Medical Photo'}
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {isDragging 
                ? 'Release to start the analysis...' 
                : 'Drag and drop your image here, or click the button below to browse'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Camera className="w-5 h-5 mr-3" />
                Choose Photo
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>JPG, PNG, GIF</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Max 10MB</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Instant Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
