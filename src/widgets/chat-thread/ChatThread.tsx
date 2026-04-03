import { useMemo } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useMessagesQuery } from '@entities/message/queries';

type ChatThreadProps = {
  conversationId: string;
};

export function ChatThread({ conversationId }: ChatThreadProps) {
  const messagesQuery = useMessagesQuery(conversationId);
  const parentRef = useMemo(() => ({ current: document.getElementById('chat-scroll') }), [conversationId]);

  const virtualizer = useVirtualizer({
    count: messagesQuery.data?.length ?? 0,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 64,
    overscan: 5
  });

  if (messagesQuery.isLoading) return <p style={{ padding: 16 }}>Loading messages…</p>;

  return (
    <div id="chat-scroll" style={{ height: 'calc(100dvh - 132px)', overflow: 'auto' }}>
      <div style={{ height: virtualizer.getTotalSize(), position: 'relative' }}>
        {virtualizer.getVirtualItems().map((item) => {
          const message = messagesQuery.data?.[item.index];
          if (!message) return null;
          return (
            <div
              key={message.id}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                transform: `translateY(${item.start}px)`,
                padding: 12
              }}
            >
              {message.bodyPreview ?? '[Encrypted message]'}
            </div>
          );
        })}
      </div>
    </div>
  );
}
