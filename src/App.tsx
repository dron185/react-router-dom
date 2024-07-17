import React from 'react';
import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Navigate, NavLink, Outlet, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {Model} from "./components/pages/Model";
import {Prices} from "./components/pages/Prices";

export const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PRICES: '/prices',
    PROTECTED_PAGE: '/protected',
    // ERROR: '/page/error',
    // MODEL: '/adidas/model',
} as const;

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink
                        to={PATH.PAGE1}
                        className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}
                    >Adidas</NavLink></div>
                    <div><NavLink
                        to={PATH.PAGE2}
                        className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}
                    >Puma</NavLink></div>
                    <div><NavLink
                        to={PATH.PAGE3}
                        className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}
                    >Abibas</NavLink></div>
                    <div><NavLink
                        to={PATH.PRICES}
                        className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}
                    >Prices for wholesalers</NavLink></div>
                    <div><NavLink
                        to={PATH.PROTECTED_PAGE}
                        className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}
                    >Protected page</NavLink>
                    </div>

                </div>
                <div className={styles.content}>

                    <Outlet/>


                    {/*<Routes>*/}
                    {/*    <Route path="/" element={<Navigate to={"/adidas"}/>}/>*/}

                    {/*    <Route path={PATH.PAGE1} element={<Adidas/>}/>*/}
                    {/*    <Route path={PATH.PAGE2} element={<Puma/>}/>*/}
                    {/*    <Route path={PATH.PAGE3} element={<Abibas/>}/>*/}
                    {/*    <Route path={'/:model/:id'} element={<Model/>}/>*/}
                    {/*    <Route path={PATH.PRICES} element={<Prices/>}/>*/}

                    {/*    <Route path={"/*"} element={<Error404/>}/>*/}
                    {/*    /!*<Route path={"/adidas/*"} element={<Error404/>}/>*!/*/}

                    {/*    /!*<Route path={PATH.ERROR} element={<Error404/>}/>*!/*/}
                    {/*    /!*<Route path={"/*"} element={<Navigate to={PATH.ERROR}/>}/>*!/*/}
                    {/*</Routes>*/}
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;
