import { Product } from "./Product"

export interface AppContextType {
    addToCart: (payload: Product) => void,
    removeFromCart: (payload: Product) => void,
    state: {
        cart: Product[],
        products: Product[]
    }
}