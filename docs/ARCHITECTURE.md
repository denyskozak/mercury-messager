# Mercury Messager Architecture

## 1) Architecture summary
- Mobile-first React + TypeScript app with domain-oriented slices and thin page containers.
- Client-only decentralized messaging: Sui Stack Messaging SDK and passkey-based identity.
- Adapter boundary isolates vendor SDKs from product/domain/UI code.

## 2) Key assumptions and constraints
- No custom server, REST API, or centralized DB.
- Pseudonymous default identity and minimal metadata exposure.
- WebAuthn passkeys are required; unsupported devices need fallback UX.

## 3) Recommended stack
- React + TypeScript strict mode + Vite.
- TanStack Query for remote/decentralized state and retry policy.
- Zustand for session/auth and small local app state.

## 4) Architectural principles
- Domain-first folder boundaries.
- Infrastructure adapters for SDK calls and DTO mapping.
- Idempotent send-message commands with client-side generated idempotency keys.

## 5) Folder structure
See `src/` for app/providers, features, entities, widgets, pages, shared/infrastructure.

## 6) Module responsibilities
- `app/`: bootstrap, routes, global providers.
- `shared/infrastructure/`: SDK adapter, storage, logging, query client.
- `entities/`: domain-level query and mutation access.
- `features/`: user actions (passkey auth, composer).
- `widgets/pages/`: assembled UI shells and screens.

## 7) State strategy
- Session/auth state: Zustand persisted locally in hardened storage wrapper.
- Network/decentralized state: TanStack Query with persistence + revalidation.
- Local UI state: component state unless cross-screen usage emerges.

## 8) Core flow expectations
- App init -> provider mount -> session restore -> route gate.
- Passkey login -> obtain address + credential -> persist minimal session.
- Conversation/message queries poll and revalidate on reconnect.
- Send flow uses optimistic pending item + retry-safe idempotency keys.

## 9) Routing and navigation
- Chat-first shell with bottom navigation.
- Routes: onboarding, conversations, chat detail, settings, passkey unsupported.

## 10) Mobile-first shell
- Safe area CSS, touch target sizing, keyboard-aware composer.
- Virtualized thread list for long conversations.

## 11) Security and privacy
- Do not log plaintext payloads or full wallet addresses.
- Persist only minimal session tuple (address + credential reference).
- Encrypt message body and attachments client-side before transport.

## 12) Error and resilience
- Skeleton/empty/error states across all list/detail views.
- Graceful degraded mode for RPC/sdk outages.
- Reconnect polling and explicit retry actions.

## 13) Testing
- Unit: domain mappers and crypto helpers.
- Component: conversation list, composer, onboarding flows.
- Integration: send/receive flows with mocked adapter.
- E2E: passkey capability gate and primary chat journeys.

## 14) DX/tooling
- ESLint + Prettier + strict TypeScript + path aliases.
- Environment-driven config via `.env` and typed accessors.

## 15) Implementation roadmap
1. Wire passkey adapter and capability detection.
2. Integrate real Sui messaging SDK adapter + DTO mapping.
3. Add client-side encryption service for text + attachments.
4. Add optimistic updates and background sync workers.
5. Harden offline caches and E2E coverage.

## 16) Critical starter modules
- `SuiMessagingAdapter` (SDK isolation).
- `sessionStore` + `SessionBootstrap` (restore/rehydrate).
- `queries/mutations` for conversations and messages.
- `ChatThread` virtualization + `Composer` interaction loop.

## 17) Anti-patterns
- Binding UI directly to SDK DTOs.
- Storing plaintext message content persistently.
- Global state for ephemeral UI concerns.
- Deep provider nesting without clear cross-cutting value.
