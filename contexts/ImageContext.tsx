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

  filter: FilterType;
  setFilter: (filter: FilterType) => void;

  edits: ImageEditSettings;
  setEdits: (settings: ImageEditSettings) => void;

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
  const [filter, setFilter] = useState<FilterType>('none');
  const [edits, setEdits] = useState<ImageEditSettings>(defaultEdits);

  const reset = () => {
    setImageUri(null);
    setFilter('none');
    setEdits(defaultEdits);
  };

  return (
    <ImageContext.Provider
      value={{ imageUri, setImageUri, filter, setFilter, edits, setEdits, reset }}
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
