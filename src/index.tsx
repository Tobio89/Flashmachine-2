import React from "react";
import ReactDOM from "react-dom";

import { QueryClientProvider } from "react-query";

import App from "./components/App/App";

import { queryClient } from "./query";

import "./style/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
