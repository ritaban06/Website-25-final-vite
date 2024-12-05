import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './App.scss';
import ErrorBoundary from './ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.Fragment>
);
