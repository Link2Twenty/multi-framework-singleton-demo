import { toastManager } from "@org/toast-service";

export default function App() {
  return (
    <div
      style={{
        padding: "1rem",
        border: "2px solid #8f61e1",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ color: "#8f61e1", marginTop: 0 }}>Preact App</h2>
      <p>I am a preact micro-frontend.</p>

      <button
        onClick={() =>
          toastManager.add({
            message: "Hello from the Preact App!",
            type: "error",
          })
        }
        style={{
          padding: "10px 20px",
          background: "#8f61e1",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Fire Singleton Toast
      </button>
    </div>
  );
}
