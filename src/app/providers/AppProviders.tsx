import type { PropsWithChildren } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { BrowserRouter } from 'react-router-dom';
import { queryClient, queryPersister } from '@shared/infrastructure/network/queryClient';
import { SuiStackProvider } from './SuiStackProvider';
import { SessionBootstrap } from './SessionBootstrap';

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: queryPersister, maxAge: 1000 * 60 * 5 }}
    >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <SuiStackProvider>
            <SessionBootstrap>{children}</SessionBootstrap>
          </SuiStackProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </PersistQueryClientProvider>
  );
}
