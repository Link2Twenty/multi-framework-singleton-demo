import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import Root from "./trigger.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Root,
  errorBoundary(err) {
    return <div>Error loading React Trigger: {err.message}</div>;
  },
});

// single-spa needs these exports to manage the lifecycle
export const { bootstrap, mount, unmount } = lifecycles;
