import { h, render } from "preact";
import singleSpaPreact from "single-spa-preact";
import App from "./App";

const lifecycles = singleSpaPreact({
  preact: { h, render },
  rootComponent: App,
});

export const { bootstrap, mount, unmount } = lifecycles;
