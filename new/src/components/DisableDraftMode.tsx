'use client';

import { useIsPresentationTool } from 'next-sanity/hooks';
import { useTransition } from 'react';
import { disableDraftMode } from '@/app/actions';

export function DisableDraftMode() {
  const [pending, startTransition] = useTransition();
  const isPresentationTool = useIsPresentationTool();

  if (isPresentationTool || isPresentationTool === null) {
    return null;
  }

  const disable = () => startTransition(() => disableDraftMode());

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        zIndex: 50,
      }}
    >
      {pending ? (
        'Disabling draft mode...'
      ) : (
        <button
          type="button"
          onClick={disable}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#333',
            color: '#fff',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            fontSize: '0.875rem',
          }}
        >
          Disable draft mode
        </button>
      )}
    </div>
  );
}
