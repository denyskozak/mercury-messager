import { useQuery } from '@tanstack/react-query';
import { useSuiStack } from '@app/providers/SuiStackProvider';

export function useMessagesQuery(conversationId: string) {
  const { messaging } = useSuiStack();
  return useQuery({
    queryKey: ['messages', conversationId],
    queryFn: () => messaging.listMessages(conversationId),
    refetchInterval: 5_000
  });
}
