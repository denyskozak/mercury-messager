import { usePasskeyAuth } from '@features/auth-passkey/usePasskeyAuth';

export function OnboardingPage() {
  const { loginWithPasskey } = usePasskeyAuth();

  return (
    <section style={{ padding: 20 }}>
      <h1>Mercury</h1>
      <p>Private-by-default, pseudonymous messaging on decentralized rails.</p>
      <button onClick={() => void loginWithPasskey()} style={{ minHeight: 48 }}>
        Continue with Passkey
      </button>
    </section>
  );
}
