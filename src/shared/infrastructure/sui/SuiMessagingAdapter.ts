import type { ConversationSummary, Message } from '@shared/types/domain';

/**
 * Wrapper around Sui Stack Messaging SDK.
 * Keep all SDK DTO parsing and transport specifics here.
 */
export class SuiMessagingAdapter {
  constructor(
    private readonly rpcUrl: string,
    private readonly network: string
  ) {}

  async listConversations(address: string): Promise<ConversationSummary[]> {
    void address;
    void this.rpcUrl;
    void this.network;
    return [];
  }

  async listMessages(conversationId: string): Promise<Message[]> {
    void conversationId;
    return [];
  }

  async sendMessage(input: {
    conversationId: string;
    ciphertext: string;
    attachmentIds?: string[];
    idempotencyKey: string;
  }): Promise<{ messageId: string }> {
    void input;
    return { messageId: crypto.randomUUID() };
  }
}
