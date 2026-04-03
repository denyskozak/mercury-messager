import { useState } from 'react';

type ComposerProps = {
  onSend: (plaintext: string) => Promise<void>;
  disabled?: boolean;
};

export function Composer({ onSend, disabled }: ComposerProps) {
  const [value, setValue] = useState('');

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const trimmed = value.trim();
        if (!trimmed) return;
        await onSend(trimmed);
        setValue('');
      }}
      style={{ display: 'flex', gap: 8, padding: 12 }}
    >
      <input
        aria-label="Message"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Message"
        disabled={disabled}
        style={{ flex: 1, minHeight: 44, borderRadius: 999, padding: '0 16px' }}
      />
      <button type="submit" disabled={disabled || value.trim().length === 0}>
        Send
      </button>
    </form>
  );
}
