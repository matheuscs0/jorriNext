'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SearchContextProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchResults: any[]; // Substitua "any" pelo tipo correto dos resultados da pesquisa
  setSearchResults: React.Dispatch<React.SetStateAction<any[]>>; // Substitua "any" pelo tipo correto
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]); // Substitua "any" pelo tipo correto

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch deve ser usado dentro de um SearchProvider');
  }
  return context;
};
