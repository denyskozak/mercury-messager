import { useSuiPasskey } from 'use-sui-passkey';

export const useAuth = () => {
  return useSuiPasskey({
    rpName: 'MercuryMessager',
    authenticatorAttachment: 'platform'
  });
}