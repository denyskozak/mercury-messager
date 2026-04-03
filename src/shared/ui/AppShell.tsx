import type { PropsWithChildren } from 'react';
import { BottomNav } from '@widgets/bottom-nav/BottomNav';

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div style={{ minHeight: '100dvh', display: 'grid', gridTemplateRows: '1fr auto' }}>
      <main>{children}</main>
      <BottomNav />
    </div>
  );
}
