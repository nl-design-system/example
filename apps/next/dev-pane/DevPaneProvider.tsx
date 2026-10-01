'use client';

import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { DevPane } from './DevPane';
import { DevNoteEntry, DevPaneContext } from './DevPaneContext';
import './dev-pane.css';

const STORAGE_KEY = 'example:dev-pane-enabled';

interface DevPaneProviderProps {
  children: ReactNode;
}

export const DevPaneProvider = ({ children }: DevPaneProviderProps) => {
  const [enabled, setEnabled] = useState(false);
  const [order, setOrder] = useState<string[]>([]);
  const [activeId, setActiveId] = useState<null | string>(null);
  const entries = useRef(new Map<string, DevNoteEntry>());

  useEffect(() => {
    setEnabled(window.localStorage.getItem(STORAGE_KEY) === 'true');
  }, []);

  const toggle = useCallback(() => {
    setEnabled((previous) => {
      const next = !previous;
      window.localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  }, []);

  const register = useCallback((id: string, entry: DevNoteEntry) => {
    entries.current.set(id, entry);
    setOrder((previous) => (previous.includes(id) ? previous : [...previous, id]));
  }, []);

  const unregister = useCallback((id: string) => {
    entries.current.delete(id);
    setOrder((previous) => previous.filter((entryId) => entryId !== id));
  }, []);

  const getEntry = useCallback((id: string) => entries.current.get(id), []);

  const value = useMemo(
    () => ({ activeId, enabled, getEntry, order, register, setActiveId, toggle, unregister }),
    [activeId, enabled, getEntry, order, register, toggle, unregister],
  );

  return (
    <DevPaneContext.Provider value={value}>
      {children}
      <DevPane />
    </DevPaneContext.Provider>
  );
};
