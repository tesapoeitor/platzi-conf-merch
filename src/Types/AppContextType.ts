import { Product } from "./Product"

import { Buyer } from "../Types/Buyer"

export interface AppContextType {
    addToCart: (payload: Product) => void,
    removeFromCart: (payload: Product) => void,
    state: {
        cart: Product[],
        products: Product[]
    },
    addToBuyer: (payload: Buyer) => void
}