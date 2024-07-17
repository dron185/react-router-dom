// @flow 
import * as React from 'react';
import {ReactNode, useState} from "react";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {Error404} from "../components/pages/Error404";

type ProtectedRouteProps = {
    //children: React.ReactNode;
    children: ReactNode;
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
    const [isAccess, setIsAccess] = useState(true)
    return (
        <div>
            {isAccess ? <ProtectedPage/> : <Error404/>}
        </div>
    );
};