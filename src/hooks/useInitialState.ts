import { useState } from "react"

import { AppContextType } from "../Types/AppContextType"
import { Buyer } from "../Types/Buyer"
import { Product } from "../Types/Product"
import InitialState from "../InitialState"

interface State {
    cart: Product[], 
    products: Product[], 
    buyer: Buyer[]
}

const useInitialState = (): AppContextType => {
    const [state, setState] = useState<State>(InitialState)

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

    const addToBuyer = (payload: Buyer) => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }

    return {
        state,
        addToCart,
        removeFromCart,
        addToBuyer
    }
}

export { useInitialState }