import { Link } from 'react-router-dom';
import { useConversationsQuery } from '@entities/conversation/queries';

export function ConversationList() {
  const conversations = useConversationsQuery();

  if (conversations.isLoading) return <p style={{ padding: 16 }}>Loading conversations…</p>;
  if (conversations.isError) return <p style={{ padding: 16 }}>Unable to load conversations.</p>;
  if (!conversations.data?.length) return <p style={{ padding: 16 }}>No conversations yet.</p>;

  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      {conversations.data.map((c) => (
        <li key={c.id}>
          <Link to={`/chat/${c.id}`} style={{ display: 'block', padding: 12 }}>
            <strong>{c.title ?? 'Unnamed conversation'}</strong>
            <div>{c.lastMessagePreview ?? 'No messages yet'}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
