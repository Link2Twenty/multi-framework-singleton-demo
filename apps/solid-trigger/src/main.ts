import { render } from "solid-js/web";
import { createComponent } from "solid-js";
import App from "./App";

let dispose: () => void;

interface SolidProps {
  domElement: HTMLElement;
  [key: string]: any;
}

export const bootstrap = async () => {};

export const mount = async (props: SolidProps) => {
  dispose = render(
    () => createComponent(App as any, {} as any) as any,
    props.domElement,
  );
};

export const unmount = async () => {
  if (dispose) {
    dispose();
  }
};
