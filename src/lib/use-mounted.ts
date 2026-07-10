import { useSyncExternalStore } from "react";

// Server + first client render return false; after hydration, true.
// Satisfies react-hooks/set-state-in-effect (no setState-in-effect).
const subscribe = () => () => {};

/** True only after the component has mounted on the client. */
export function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true, // client snapshot
    () => false // server snapshot
  );
}
