# Cross-Framework Singleton Micro Frontends

This is a sample project demonstrating how singletons can be successfully implemented and accessed by different frameworks when using a Micro Frontend (MFE) architecture.

The build is accessible [here](https://link2twenty.github.io/multi-framework-singleton-demo/).

## Overview

In a Micro Frontend application, sharing state or utilities across different standalone applications can be challenging. This project shows how a singleton (in this case, a shared Toast Service) can be instantiated once and utilized seamlessly across multiple MFEs built with different web frameworks.

Currently includes standalone triggers for:

- React
- Vue
- SolidJS
- Svelte
- Preact
- Vanilla JS

## Inspiration and Context

This project draws inspiration from the concepts discussed in the article:
**[React singletons aren't as evil as you think](https://dev.to/link2twenty/react-singletons-arent-as-evil-as-you-think-44m8)**.

While singletons are sometimes considered an anti-pattern in standard monoliths, they offer a very practical and effective way to manage shared global state (like a toast bus, authentication state, or theme configurations) across disjointed micro frontends without passing props down complex DOM hierarchies or coupling frameworks.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser to the local Vite URL (typically `http://localhost:5173`).

## Project Structure

- `apps/`: Contains the various MFE applications built with different frameworks. Each app acts as a standalone micro frontend.
- `libs/shared-utility/`: Contains the shared singletons (e.g., `toast-service.ts`) used universally by all the apps. This operates as our cross-framework module.
- `index.html`: The root HTML application that orchestrates and bootstraps the MFEs using `single-spa`.
