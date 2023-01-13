import React from "react";
import { createRoot } from 'react-dom/client';
import { App } from "./App";
import './index.scss';


const root = (document.getElementById("root") as HTMLElement);
const app = createRoot(root);
app.render(<App  />);  