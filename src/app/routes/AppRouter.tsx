import { Navigate, Route, Routes } from 'react-router-dom';
import { ConversationsPage } from '@pages/conversations/ConversationsPage';
import { ChatPage } from '@pages/chat/ChatPage';
import { SettingsPage } from '@pages/settings/SettingsPage';
import { OnboardingPage } from '@pages/onboarding/OnboardingPage';
import { PasskeyUnsupportedPage } from '@pages/fallback/PasskeyUnsupportedPage';
import { AppShell } from '@shared/ui/AppShell';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<OnboardingPage />} />
      <Route path="/unsupported-passkey" element={<PasskeyUnsupportedPage />} />
      <Route
        path="/chats"
        element={
          <AppShell>
            <ConversationsPage />
          </AppShell>
        }
      />
      <Route
        path="/chat/:conversationId"
        element={
          <AppShell>
            <ChatPage />
          </AppShell>
        }
      />
      <Route
        path="/settings"
        element={
          <AppShell>
            <SettingsPage />
          </AppShell>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
