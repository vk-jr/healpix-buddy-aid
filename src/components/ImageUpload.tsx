
import { useState, useRef } from 'react';
import { Upload, Camera, Image as ImageIcon } from 'lucide-react';
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
        className={`relative border-3 border-dashed rounded-3xl p-12 text-center transition-all duration-300 cursor-pointer hover:scale-105 ${
          isDragging
            ? 'border-pink-400 bg-pink-50 scale-105'
            : 'border-blue-300 bg-blue-50/50 hover:border-pink-300 hover:bg-pink-50/50'
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
        
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-blue-200 to-pink-200 p-6 rounded-full animate-bounce">
              {isDragging ? (
                <ImageIcon className="w-12 h-12 text-pink-600" />
              ) : (
                <Upload className="w-12 h-12 text-blue-600" />
              )}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              {isDragging ? 'Drop your photo here! 📸' : 'Upload Your Photo'}
            </h3>
            <p className="text-gray-500 mb-6">
              Drag and drop your image here, or click to browse
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                className="bg-white hover:bg-blue-50 border-blue-200 text-blue-600 rounded-full px-6 py-3"
              >
                <Camera className="w-4 h-4 mr-2" />
                Choose File
              </Button>
            </div>
          </div>
          
          <p className="text-xs text-gray-400">
            Supported formats: JPG, PNG, GIF (Max 10MB)
          </p>
        </div>
      </div>
    </div>
  );
};
