import * as React from "react";
import { render } from "react-dom";
import App from "./App";
import "./index.scss";
import configureStore from "./store";
import { Provider } from "react-redux";

const root = (document.getElementById("root") ||
  document.createElement("div")) as HTMLElement;
const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
