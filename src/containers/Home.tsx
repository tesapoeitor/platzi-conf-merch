import React from 'react'

import { Products } from "../components/Products"
import InitialState from "../InitialState"

const Home = () => {
    return (
        <h1>
            <Products products={InitialState.products}/>
        </h1>
    )
}

export { Home }