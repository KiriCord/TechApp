import ReactDOM from "react-dom/client";
import React, { Component } from 'react';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const app = (
    <App />
);

root.render(app);