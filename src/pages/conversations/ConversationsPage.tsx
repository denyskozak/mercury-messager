import { ConversationList } from '@widgets/conversation-list/ConversationList';

export function ConversationsPage() {
  return (
    <section>
      <header style={{ padding: 16 }}>
        <h1 style={{ margin: 0 }}>Chats</h1>
      </header>
      <ConversationList />
    </section>
  );
}
