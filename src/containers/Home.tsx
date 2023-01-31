import React from 'react'

import { SEO } from "../components/SEO"
import { Products } from "../components/Products"

const Home = () => {
    return (
        <>
        <SEO
            title='Merch | Products'
        />
        <h1>
            <Products/>
        </h1>
        </>
    )
}

export { Home }