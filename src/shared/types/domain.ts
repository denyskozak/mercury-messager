export type WalletAddress = `0x${string}`;

export type ConversationId = string;

export type MessageStatus = 'pending' | 'sent' | 'failed' | 'received';

export type Message = {
  id: string;
  conversationId: ConversationId;
  sender: WalletAddress;
  bodyCiphertext: string;
  bodyPreview?: string;
  createdAt: string;
  status: MessageStatus;
  attachmentIds: string[];
};

export type ConversationSummary = {
  id: ConversationId;
  title?: string;
  lastMessagePreview?: string;
  updatedAt: string;
  unreadCount: number;
};
