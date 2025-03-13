'use client';

import { Language } from '@/models/language';
import { createContext, ReactNode, useContext } from 'react';

export type ILanguageProvider = {
  language: string;
};

export const LanguageContext = createContext<ILanguageProvider>(
  {} as ILanguageProvider
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const language = navigator.language.toLowerCase().startsWith('pt')
    ? Language.PT
    : Language.EN;

  return (
    <LanguageContext.Provider value={{ language }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
