export function PasskeyUnsupportedPage() {
  return (
    <section style={{ padding: 20 }}>
      <h1>Passkeys unsupported</h1>
      <p>
        This browser or device does not support WebAuthn passkeys required for privacy-preserving auth.
      </p>
    </section>
  );
}
