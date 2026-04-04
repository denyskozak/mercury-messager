import { useSuiPasskey } from 'use-sui-passkey';
import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@features/auth/useAuth';

export function OnboardingPage() {
  const { keypair, create } = useAuth();
  const navigate = useNavigate();
console.log('keypair', keypair);
  useLayoutEffect(() => {
    if (keypair) navigate('/chats');
  }, [keypair]);
  return (
    <section style={{ padding: 20 }}>
      <h1>Mercury Message</h1>
      <p>True Secure Messager</p>
      <button onClick={() => void create()} style={{ minHeight: 48 }}>
        Continue with Passkey
      </button>
    </section>
  );
}
