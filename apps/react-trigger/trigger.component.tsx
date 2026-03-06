import { toastManager } from "@org/toast-service";

export default function Root() {
  return (
    <div
      style={{
        padding: "1rem",
        border: "2px solid #087ea4",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ color: "#087ea4", marginTop: 0 }}>React App</h2>
      <p>I am a react micro-frontend.</p>

      <button
        onClick={() =>
          toastManager.add({
            message: "Hello from the React JS App!",
            type: "success",
          })
        }
        style={{
          padding: "10px 20px",
          background: "#087ea4",
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
