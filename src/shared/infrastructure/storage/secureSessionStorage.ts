type PersistedSession = {
  walletAddress: string;
  passkeyCredentialId: string;
};

const key = 'mercury-session-v1';

export const secureSessionStorage = {
  async get(): Promise<PersistedSession | null> {
    const raw = window.localStorage.getItem(key);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as PersistedSession;
    } catch {
      window.localStorage.removeItem(key);
      return null;
    }
  },
  async set(session: PersistedSession) {
    window.localStorage.setItem(key, JSON.stringify(session));
  },
  async clear() {
    window.localStorage.removeItem(key);
  }
};
