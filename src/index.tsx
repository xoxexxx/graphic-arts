import React from "react";
import { createRoot } from 'react-dom/client';
import { App } from "./App";

import { Provider } from "react-redux";
import { store } from "./services/store";
import { BrowserRouter } from "react-router-dom";

import './index.less';

const root = (document.getElementById("root") as HTMLElement);
const app = createRoot(root);
app.render(
    <Provider store={store} >
        <BrowserRouter>
            <App  />
        </BrowserRouter>
    </Provider>
);  