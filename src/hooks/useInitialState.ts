import { useState } from "react"

import { AppContextType } from "../Types/AppContextType"
import { Product } from "../Types/Product"
import InitialState from "../InitialState"

const useInitialState = (): AppContextType => {
    const [state, setState] = useState<{cart: Product[], products: Product[]}>(InitialState)

    const addToCart = (payload: Product) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    const removeFromCart = (payload: Product) => {
        setState({
            ...state,
            cart: state.cart.filter(item => item.id !== payload.id)
        })
    }

    return {
        state,
        addToCart,
        removeFromCart
    }
}

export { useInitialState }