import type { PropsWithChildren } from 'react';
import { createContext, useContext, useMemo } from 'react';
import { env } from '@shared/config/env';
import { SuiMessagingAdapter } from '@shared/infrastructure/sui/SuiMessagingAdapter';

type SuiStackContextValue = {
  messaging: SuiMessagingAdapter;
};

const SuiStackContext = createContext<SuiStackContextValue | null>(null);

export function SuiStackProvider({ children }: PropsWithChildren) {
  const value = useMemo(
    () => ({ messaging: new SuiMessagingAdapter(env.suiRpcUrl, env.suiNetwork) }),
    []
  );
  return <SuiStackContext.Provider value={value}>{children}</SuiStackContext.Provider>;
}

export function useSuiStack() {
  const context = useContext(SuiStackContext);
  if (!context) throw new Error('useSuiStack must be used within SuiStackProvider');
  return context;
}
