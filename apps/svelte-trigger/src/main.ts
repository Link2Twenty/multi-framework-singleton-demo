import { mount as svelteMount, unmount as svelteUnmount } from "svelte";
import App from "./App.svelte";

let app: any;

export const bootstrap = async () => {};

export const mount = async (props: { domElement: HTMLElement }) => {
  app = svelteMount(App, {
    target: props.domElement,
  });
};

export const unmount = async () => {
  if (app) {
    svelteUnmount(app);
  }
};
