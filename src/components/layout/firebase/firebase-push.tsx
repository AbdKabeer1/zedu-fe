"use client";

import { useEffect, useState } from "react";
import {
  listenForForegroundMessages,
  setupWebPush,
} from "~/lib/firebase/messaging";

type PushState = {
  token: string | null;
  error: string | null;
  copied: boolean;
};

export default function FirebasePush() {
  const [state, setState] = useState<PushState>({
    token: null,
    error: null,
    copied: false,
  });

  useEffect(() => {
    let unsubscribe = () => {};
    let active = true;

    const start = async () => {
      const result = await setupWebPush();
      if (!active) return;

      setState((current) => ({
        ...current,
        token: result.token,
        error: result.error,
      }));

      if (result.messaging) {
        unsubscribe = listenForForegroundMessages(result.messaging);
      }
    };

    start().catch((error: unknown) => {
      if (!active) return;
      const message =
        error instanceof Error
          ? error.message
          : "Failed to start Firebase push";
      setState((current) => ({ ...current, error: message }));
    });

    return () => {
      active = false;
      unsubscribe();
    };
  }, []);

  const copyToken = async () => {
    if (!state.token) return;
    await navigator.clipboard.writeText(state.token);
    setState((current) => ({ ...current, copied: true }));
  };

  return (
    <div className="fixed bottom-4 left-4 z-[10000] w-[320px] rounded-md border border-[#E6EAEF] bg-white p-3 text-sm shadow-lg">
      <p className="font-medium text-[#111827]">Firebase web push</p>
      {state.error ? (
        <p className="mt-1 text-[#B42318]">{state.error}</p>
      ) : state.token ? (
        <p className="mt-1 text-[#067647]">
          This browser is registered for Zedu notifications.
        </p>
      ) : (
        <p className="mt-1 text-[#667085]">
          Requesting permission and token...
        </p>
      )}
      {state.token ? (
        <button
          type="button"
          onClick={copyToken}
          className="mt-2 rounded bg-[#7141F8] px-3 py-1.5 text-white"
        >
          {state.copied ? "Copied" : "Copy token"}
        </button>
      ) : null}
    </div>
  );
}
