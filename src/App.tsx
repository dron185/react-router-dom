import React, {useState} from 'react';
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {S} from "./components/pages/_styles"
import {Model} from "./components/pages/Model";
import { Model1 } from './components/pages/Model1';

export const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PAGEERROR: '/error404',
    MODEL: '/adidas/:id',
    MODEL1: '/puma/:id',
} as const;

function App() {
    return (
        <div>
            <S.Header><h1>HEADER</h1></S.Header>
            <S.Body>
                <S.Nav>
                    <S.NavWrapper><NavLink to={PATH.PAGE1} >Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2} >Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3} >Abibas</NavLink></S.NavWrapper>
                </S.Nav>
                <S.Content>
                    <Routes>
                        <Route path="/" element={<Navigate to={"/adidas"}/>}/>

                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        <Route path={PATH.PAGE3} element={<Abibas/>}/>
                        <Route path={PATH.MODEL} element={<Model/>}/>
                        <Route path={PATH.MODEL1} element={<Model1/>}/>

                        {/*<Route path={PATH.PAGEERROR} element={<Error404/>}/>*/}
                        {/*<Route path="/*" element={<Navigate to={"/error404"}/>}/>*/}

                        <Route path='/*' element={<Error404/>}/>
                        {/*<Route path='/adidas/*' element={<Error404/>}/>*/}
                        // * - значит- все адреса, кроме тех, которые уже перечислили

                    </Routes>
                </S.Content>
            </S.Body>
            <S.Footer>abibas 2023</S.Footer>
        </div>
    );
}

export default App;

