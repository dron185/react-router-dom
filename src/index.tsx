import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, RouterProvider} from "react-router-dom";
import {router} from "./routes/router";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    //3. передаем сюда наш router
    <RouterProvider router={router} />
    /*<BrowserRouter>
        <App/>
    </BrowserRouter>*/
);

/*or HashRouter instead of BrowserRouter - если будем заливать на gh-pages*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();