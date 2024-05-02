import React from 'react';
import {useParams} from "react-router-dom";
import {adidasArr, AdidasItem} from "./Adidas";
import {pumaArr, PumaItem} from "./Puma";

type CrossModelsType = {
    [key: string]: (AdidasItem[] | PumaItem[]);
}

const crossModels: CrossModelsType = {
    adidas: adidasArr,
    puma: pumaArr
}

export const Model = () => {
    //const params = useParams()
    const {model, id} = useParams();
    console.log(model, id)

    //todo: It needs to remove hardcode of the array
    // const currentModel = adidasArr.find(el => el.id === Number(id))
    const currentModel = model ? crossModels[model].find(el => el.id === Number(id)) : null

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