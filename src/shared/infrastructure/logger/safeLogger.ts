const redact = (input: unknown): unknown => {
  if (typeof input === 'string' && input.startsWith('0x')) return `${input.slice(0, 6)}…${input.slice(-4)}`;
  return input;
};

export const safeLogger = {
  info(message: string, meta?: unknown) {
    if (import.meta.env.DEV) console.info(message, redact(meta));
  },
  warn(message: string, meta?: unknown) {
    console.warn(message, redact(meta));
  },
  error(message: string, meta?: unknown) {
    console.error(message, redact(meta));
  }
};
