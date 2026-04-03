import { useQuery } from '@tanstack/react-query';
import { useSessionStore } from '@app/store/sessionStore';
import { useSuiStack } from '@app/providers/SuiStackProvider';

export function useConversationsQuery() {
  const { messaging } = useSuiStack();
  const address = useSessionStore((s) => s.walletAddress);

  return useQuery({
    queryKey: ['conversations', address],
    queryFn: async () => {
      if (!address) return [];
      return messaging.listConversations(address);
    },
    enabled: Boolean(address)
  });
}
