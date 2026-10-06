'use client';

import { useEffect, useRef } from 'react';
import { useDevPane } from './DevPaneContext';

export const DevPane = () => {
  const { activeId, enabled, getEntry, order, setActiveId, toggle } = useDevPane();
  const itemRefs = useRef(new Map<string, HTMLLIElement>());

  useEffect(() => {
    if (!activeId) {
      return;
    }
    itemRefs.current.get(activeId)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [activeId]);

  return (
    <>
      <button aria-pressed={enabled} className="example-dev-pane-toggle" onClick={toggle} type="button">
        {enabled ? 'Hide developer notes' : 'Show developer notes'}
      </button>

      {enabled && (
        <aside aria-label="Developer notes" className="example-dev-pane">
          <p className="example-dev-pane__heading">Developer notes on this page</p>
          {order.length === 0 && <p>No notes on this page yet.</p>}
          <ul className="example-dev-pane__list">
            {order.map((id, index) => {
              const entry = getEntry(id);

              if (!entry) {
                return null;
              }

              return (
                <li
                  className="example-dev-pane__item"
                  data-active={activeId === id ? '' : undefined}
                  key={id}
                  ref={(element) => {
                    if (element) {
                      itemRefs.current.set(id, element);
                    } else {
                      itemRefs.current.delete(id);
                    }
                  }}
                >
                  <button
                    className="example-dev-pane__item-button"
                    onClick={() => {
                      setActiveId(id);
                      entry.scrollIntoView();
                    }}
                    type="button"
                  >
                    <span className="example-dev-pane__item-number">{index + 1}</span>
                    {entry.title}
                  </button>
                  <div className="example-dev-pane__item-note">{entry.note}</div>
                </li>
              );
            })}
          </ul>
        </aside>
      )}
    </>
  );
};
