import { toastManager } from "@org/toast-service";

export default function App() {
  return (
    <div
      style={
        {
          padding: "1rem",
          border: "2px solid #2c4f7c",
          height: "100%",
          "box-sizing": "border-box", // Solid prefers hyphenated attributes for styles inside objects or strings, or lowercase JS style object properties. Let's use standard literal string style or camelCase.
        } as any
      }
    >
      <h2 style={{ color: "#2c4f7c", "margin-top": 0 } as any}>SolidJS App</h2>
      <p>I am a SolidJS micro-frontend.</p>
      <button
        onClick={() => {
          toastManager.add({
            message: "Hello from the SolidJS App!",
            type: "info",
          });
        }}
        style={
          {
            padding: "10px 20px",
            background: "#2c4f7c",
            border: "none",
            "border-radius": "4px",
            cursor: "pointer",
            "font-weight": "bold",
            color: "white", // adding text color for better contrast
          } as any
        }
      >
        Fire Singleton Toast
      </button>
    </div>
  );
}
