// @flow
import * as React from 'react';
import {ReactNode, useState} from 'react';
import {Navigate} from "react-router-dom";

type ProtectedRouteProps = {
    //children: React.ReactNode;
    children: ReactNode;
};

export const ProtectedRoute = ({children}: ProtectedRouteProps) => {
    //const [isAccess, setIsAccess] = useState(true)

    const isAccess = false
    return <> {isAccess ? children : <Navigate to={'/error'}/>} </>
};