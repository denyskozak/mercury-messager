import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSuiStack } from '@app/providers/SuiStackProvider';
import { safeLogger } from '@shared/infrastructure/logger/safeLogger';

export function useSendMessageMutation(conversationId: string) {
  const { messaging } = useSuiStack();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (ciphertext: string) =>
      messaging.sendMessage({
        conversationId,
        ciphertext,
        idempotencyKey: crypto.randomUUID()
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['messages', conversationId] });
      await queryClient.invalidateQueries({ queryKey: ['conversations'] });
    },
    onError: (error) => {
      safeLogger.warn('send-message-failed', error);
    }
  });
}
