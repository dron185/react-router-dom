import React from 'react';
import {useParams} from "react-router-dom";
import {adidasArr} from "./Adidas";
import S from './Sneakers.module.css'
import {Error404} from "./Error404";

export const Model = () => {
    const params = useParams()

    const currentModel = adidasArr.find(el => el.id === Number(params.id))

    return (
        <div style={{textAlign: "center"}}>

            {currentModel ?
                <>
                    <h2>{currentModel.model}</h2>
                    <h4>{currentModel.collection}</h4>
                    <h3>{currentModel.collection}</h3>
                    <img
                        src={currentModel.picture}
                        alt={currentModel.model}
                        style={{width: '100%px', height: 'auto'}}
                    />
                </> : <h2>Such model doesn't exist</h2>
            }

            {/*{adidasArr[Number(params.id)] ?*/}
            {/*    <>*/}
            {/*        <h2>{adidasArr[Number(params.id)].model}</h2>*/}
            {/*        <h4>{adidasArr[Number(params.id)].collection}</h4>*/}
            {/*        <h3>{adidasArr[Number(params.id)].collection}</h3>*/}
            {/*        <img*/}
            {/*            src={adidasArr[Number(params.id)].picture}*/}
            {/*            alt={adidasArr[Number(params.id)].model}*/}
            {/*            style={{width: '100%px', height: 'auto'}}*/}
            {/*        />*/}
            {/*    </> : <Error404/>*/}
            {/*}*/}

        </div>
    );
};