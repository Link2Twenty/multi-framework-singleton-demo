<template>
  <div
    style="
      padding: 1rem;
      border: 2px solid #41b883;
      height: 100%;
      box-sizing: border-box;
    "
  >
    <h2 style="color: #41b883; margin-top: 0">Vue App</h2>
    <p>I am a vue micro-frontend.</p>
    <button
      @click="fireToast"
      style="
        padding: 10px 20px;
        background: #41b883;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
      "
    >
      Fire Singleton Toast
    </button>
  </div>
</template>

<script>
import { toastManager } from "@org/toast-service";

export default {
  name: "App",
  methods: {
    fireToast() {
      toastManager.add({
        message: "Hello from the Vue App!",
        type: "success",
      });
    },
  },
};
</script>
