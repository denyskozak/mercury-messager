import { AppProviders } from './providers/AppProviders';
import { AppRouter } from './routes/AppRouter';

export function AppBootstrap() {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
}
