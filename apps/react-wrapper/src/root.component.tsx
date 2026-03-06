import { useSyncExternalStore } from "react";
import { toastManager } from "@org/toast-service";

const subscribe = (callback: () => void) => {
  toastManager.addEventListener("changed", callback);
  return () => toastManager.removeEventListener("changed", callback);
};

const getSnapshot = () => toastManager.toasts;

export default function Root() {
  // Subscribe to the singleton
  const toasts = useSyncExternalStore(subscribe, getSnapshot);

  return (
    <div style={{ padding: "1rem" }}>
      <h2 style={{ color: "#087ea4", marginTop: 0 }}>React Host (Listener)</h2>
      <p>I am watching the Singleton State.</p>

      <div style={{ marginTop: "10px" }}>
        {toasts.length === 0 && (
          <p style={{ color: "#888" }}>No active toasts...</p>
        )}
        {toasts.map((toast) => (
          <div
            key={toast.id}
            style={{
              background: "#333",
              color: "#fff",
              padding: "10px",
              marginBottom: "5px",
              borderRadius: "4px",
              borderLeft: "4px solid #087ea4",
            }}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </div>
  );
}
