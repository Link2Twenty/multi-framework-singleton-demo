import { toastManager } from "@org/toast-service";

// 1. Single-spa calls this once when the app is first loaded
export async function bootstrap(props: any) {
  console.log("Vanilla App Bootstrapping");
}

// 2. Single-spa calls this every time the app is shown
export async function mount(props: any) {
  const { domElement } = props;

  domElement.innerHTML = `
    <div style="padding: 1rem; border: 2px solid #d0bf4c; height: 100%; box-sizing: border-box;">
      <h2 style="color: #d0bf4c; margin-top: 0;">Vanilla JS App</h2>
      <p>I am a vanilla JS micro-frontend.</p>
      
      <button id="vanilla-toast-btn" style="
        padding: 10px 20px; 
        background: #d0bf4c;
        border: none; 
        border-radius: 4px; 
        cursor: pointer;
        font-weight: bold;
      ">
        Fire Singleton Toast
      </button>
    </div>
  `;

  // Attach the listener to our singleton service
  document
    .getElementById("vanilla-toast-btn")
    ?.addEventListener("click", () => {
      toastManager.add({
        message: "Hello from the Vanilla JS App!",
        type: "info",
      });
    });
}

// 3. Single-spa calls this when navigating away
export async function unmount(props: any) {
  const { domElement } = props;
  domElement.innerHTML = "";
}
