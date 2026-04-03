import { useParams } from 'react-router-dom';
import { ChatThread } from '@widgets/chat-thread/ChatThread';
import { MessageComposer } from '@widgets/message-composer/MessageComposer';

export function ChatPage() {
  const { conversationId } = useParams<{ conversationId: string }>();
  if (!conversationId) return <p style={{ padding: 16 }}>Conversation not found.</p>;

  return (
    <section>
      <ChatThread conversationId={conversationId} />
      <MessageComposer conversationId={conversationId} />
    </section>
  );
}
