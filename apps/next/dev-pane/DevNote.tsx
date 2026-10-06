'use client';

import { ReactNode, useEffect, useId, useRef } from 'react';
import { useDevPane } from './DevPaneContext';

interface DevNoteProps {
  children: ReactNode;
  note: ReactNode;
  title: string;
}

export const DevNote = ({ children, note, title }: DevNoteProps) => {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const { enabled, order, register, setActiveId, unregister } = useDevPane();
  const number = order.indexOf(id) + 1;

  useEffect(() => {
    register(id, {
      note,
      scrollIntoView: () => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }),
      title,
    });
    return () => unregister(id);
    // Registered once on mount: title/note are authored as static content, so re-running this
    // on every render would reshuffle the pane's document order for no benefit.
  }, [id]);

  return (
    <div className="example-dev-note" data-dev-note-enabled={enabled ? '' : undefined} ref={ref}>
      {children}
      {enabled && (
        <button
          aria-label={`Show developer note ${number}: ${title}`}
          className="example-dev-note__marker"
          onClick={() => setActiveId(id)}
          type="button"
        >
          {number || ''}
        </button>
      )}
    </div>
  );
};
