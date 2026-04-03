import { create } from 'zustand';
import { secureSessionStorage } from '@shared/infrastructure/storage/secureSessionStorage';

export type SessionState = {
  status: 'unknown' | 'anonymous' | 'authenticated';
  walletAddress?: string;
  passkeyCredentialId?: string;
  restoreSession: () => Promise<void>;
  setAuthenticated: (walletAddress: string, passkeyCredentialId: string) => Promise<void>;
  clearSession: () => Promise<void>;
};

export const useSessionStore = create<SessionState>((set) => ({
  status: 'unknown',
  async restoreSession() {
    const session = await secureSessionStorage.get();
    if (!session) {
      set({ status: 'anonymous', walletAddress: undefined, passkeyCredentialId: undefined });
      return;
    }
    set({ status: 'authenticated', ...session });
  },
  async setAuthenticated(walletAddress, passkeyCredentialId) {
    await secureSessionStorage.set({ walletAddress, passkeyCredentialId });
    set({ status: 'authenticated', walletAddress, passkeyCredentialId });
  },
  async clearSession() {
    await secureSessionStorage.clear();
    set({ status: 'anonymous', walletAddress: undefined, passkeyCredentialId: undefined });
  }
}));
