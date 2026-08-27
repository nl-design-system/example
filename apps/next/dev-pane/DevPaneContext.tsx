'use client';

import { ReactNode, createContext, useContext } from 'react';

export interface DevNoteEntry {
  note: ReactNode;
  scrollIntoView: () => void;
  title: string;
}

export interface DevPaneContextValue {
  activeId: null | string;
  enabled: boolean;
  getEntry: (id: string) => DevNoteEntry | undefined;
  order: string[];
  register: (id: string, entry: DevNoteEntry) => void;
  setActiveId: (id: null | string) => void;
  toggle: () => void;
  unregister: (id: string) => void;
}

export const DevPaneContext = createContext<DevPaneContextValue | null>(null);

export const useDevPane = () => {
  const context = useContext(DevPaneContext);

  if (!context) {
    throw new Error('useDevPane must be used within a DevPaneProvider');
  }

  return context;
};
