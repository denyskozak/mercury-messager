import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { useSessionStore } from '@app/store/sessionStore';

export function SessionBootstrap({ children }: PropsWithChildren) {
  const restore = useSessionStore((s) => s.restoreSession);

  useEffect(() => {
    void restore();
  }, [restore]);

  return children;
}
