<script lang="ts">
  import { toastManager } from "@org/toast-service";

  function handleClick() {
    toastManager.add({
      message: "Hello from the Svelte App!",
      type: "info",
    });
  }
</script>

<div
  style="padding: 1rem; border: 2px solid #ff3e00; height: 100%; box-sizing: border-box;"
>
  <h2 style="color: #ff3e00; margin-top: 0;">Svelte App</h2>
  <p>I am a Svelte micro-frontend.</p>
  <button
    on:click={handleClick}
    style="padding: 10px 20px; background: #ff3e00; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; color: white;"
  >
    Fire Singleton Toast
  </button>
</div>
