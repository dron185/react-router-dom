import React from 'react';
import {useParams} from "react-router-dom";
import {pumaArr} from "./Puma";

export const Model1 = () => {
    const params = useParams()
    console.log(Number(params.id))
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h2>{pumaArr[Number(params.id)].model}</h2>
            <h4>{pumaArr[Number(params.id)].collection}</h4>
            <h3>{pumaArr[Number(params.id)].price}</h3>
            <img src={pumaArr[Number(params.id)].picture}
                 alt={pumaArr[Number(params.id)].model}/>
        </div>
    );
};