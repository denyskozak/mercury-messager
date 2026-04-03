import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSessionStore } from '@app/store/sessionStore';

/**
 * Replace internals with use-sui-passkey API calls.
 */
export function usePasskeyAuth() {
  const navigate = useNavigate();
  const setAuthenticated = useSessionStore((s) => s.setAuthenticated);

  const loginWithPasskey = useCallback(async () => {
    if (typeof window.PublicKeyCredential === 'undefined') {
      navigate('/unsupported-passkey');
      return;
    }

    // Example wiring target:
    // const { address, credentialId } = await passkeyClient.login();
    const address = '0x0000000000000000000000000000000000000000';
    const credentialId = crypto.randomUUID();
    await setAuthenticated(address, credentialId);
    navigate('/', { replace: true });
  }, [navigate, setAuthenticated]);

  return { loginWithPasskey };
}
