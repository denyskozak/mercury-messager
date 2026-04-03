import { Composer } from '@features/composer/Composer';
import { useSendMessageMutation } from '@entities/message/mutations';

type MessageComposerProps = {
  conversationId: string;
};

export function MessageComposer({ conversationId }: MessageComposerProps) {
  const send = useSendMessageMutation(conversationId);

  return (
    <Composer
      disabled={send.isPending}
      onSend={async (plaintext) => {
        // TODO: swap with actual E2EE encryptor service.
        const ciphertext = btoa(plaintext);
        await send.mutateAsync(ciphertext);
      }}
    />
  );
}
