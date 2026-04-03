const read = (key: string, fallback?: string): string => {
  const value = import.meta.env[key];
  if (typeof value === 'string' && value.length > 0) return value;
  if (fallback) return fallback;
  throw new Error(`Missing required env var: ${key}`);
};

export const env = {
  suiNetwork: read('VITE_SUI_NETWORK', 'testnet'),
  suiRpcUrl: read('VITE_SUI_RPC_URL', 'https://fullnode.testnet.sui.io'),
  messagingEnv: read('VITE_MESSAGING_ENV', 'production')
} as const;
