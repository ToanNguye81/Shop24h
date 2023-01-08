import React from "react"
import Products from "../database_sample/productsDataArr.json"
import { CardInfo } from "./CardInfo"

export const Test = () => {
    return (
        <React.Fragment>
            <h1>Hello World !!!</h1>
            <CardInfo ProductsData={Products}/>
        </React.Fragment>
    )
}