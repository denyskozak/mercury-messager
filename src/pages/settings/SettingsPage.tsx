import { useSessionStore } from '@app/store/sessionStore';

export function SettingsPage() {
  const clearSession = useSessionStore((s) => s.clearSession);

  return (
    <section style={{ padding: 16 }}>
      <h1>Settings</h1>
      <button onClick={() => void clearSession()}>Sign out</button>
    </section>
  );
}
