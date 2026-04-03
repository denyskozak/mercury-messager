import { QueryClient } from '@tanstack/react-query';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30_000,
      gcTime: 1000 * 60 * 10,
      retry: (attempt, error) => {
        if (error instanceof Error && /unauthorized|forbidden/i.test(error.message)) return false;
        return attempt < 3;
      },
      refetchOnWindowFocus: false
    },
    mutations: {
      retry: 1
    }
  }
});

export const queryPersister = createSyncStoragePersister({
  storage: window.localStorage,
  key: 'mercury-query-cache-v1'
});
