import {Outlet} from "react-router-dom";
import React from "react";

export const Crosses = () => {
    return (
        <div>
            <div>HEADER</div>
            <Outlet/>
            <div>FOOTER</div>
        </div>
    );
};