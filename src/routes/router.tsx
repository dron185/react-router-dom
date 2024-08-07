import * as React from "react";
import {createBrowserRouter, Navigate, Outlet, RouteObject,} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import {Prices} from "../components/pages/Prices";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Model} from "../components/pages/Model";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {Login} from "../components/pages/Login";

//2. прописываем пути, закрепляем их const, чтобы не ошибиться
export const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
    MODEL: '/:model/:id',
    ERROR: '/error',
    LOGIN: '/login',
} as const;

const publicRoutes: RouteObject[] = [
    {
        path: "/",
        element: <Navigate to={PATH.ADIDAS}/>,
    },
    {
        path: PATH.ADIDAS,
        element: <Adidas/>,
    },
    {
        path: PATH.PUMA,
        element: <Puma/>,
    },
    {
        path: PATH.ABIBAS,
        element: <Abibas/>,
    },
    {
        path: PATH.PRICES,
        element: <Prices/>,
    },
    {
        path: PATH.MODEL,
        element: <Model/>,
    },
    {
        path: PATH.ERROR,
        element: <Error404/>,
    },
    {
        path: PATH.LOGIN,
        element: <Login/>,
    },

]

const privateRoutes: RouteObject[] = [
    {
        path: '/protected',
        element: <ProtectedPage/>
    },
]

export const PrivateRoutes = () => {
    const isAuth = true
    return <> {isAuth ? <Outlet/> : <Navigate to={'/login'}/>} </>
};

// 1. - создаем файл router.tsx, в нем сам router при помощи метода createBrowserRouter:
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Navigate to={PATH.ERROR}/>,
        children: [
            //если мы хотим отрисовать children-ов, мы должны использовать <Outlet/>
            {
                element: <PrivateRoutes/>,
                children: privateRoutes
            },
            ...publicRoutes,
        ]
    }
]);

// <Route path={'/:model/:id'} element={<Model/>}/>