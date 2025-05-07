import React, { createContext, ReactNode, useContext, useState } from 'react';

export type FilterType = 'none' | 'sepia' | 'grayscale';

export interface ImageEditSettings {
  brightness: number;
  contrast: number;
  saturation: number;
}

interface ImageContextType {
  imageUri: string | null;
  setImageUri: (uri: string | null) => void;

  reset: () => void;
}

const defaultEdits: ImageEditSettings = {
  brightness: 1,
  contrast: 1,
  saturation: 1,
};

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider = ({ children }: { children: ReactNode }) => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const reset = () => {
    setImageUri(null);
  };

  return (
    <ImageContext.Provider
      value={{ imageUri, setImageUri, reset }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) throw new Error('useImageContext must be used within ImageProvider');
  return context;
};
