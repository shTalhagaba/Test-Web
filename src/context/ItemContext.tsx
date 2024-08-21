"use client"; // Add this line to mark this as a Client Component

import { createContext, useContext, useState, ReactNode } from 'react';

interface Item {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

interface ItemContextType {
  items: Item[];
  setItems: (items: Item[]) => void;
}

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export const ItemProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Item[]>([]);

  return (
    <ItemContext.Provider value={{ items, setItems }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItemContext = () => {
  const context = useContext(ItemContext);
  if (context === undefined) {
    throw new Error('useItemContext must be used within an ItemProvider');
  }
  return context;
};
