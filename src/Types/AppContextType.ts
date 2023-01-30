import { Product } from "./Product"
import { PaymentDetails } from "./PaymentDetails"
import { Buyer } from "../Types/Buyer"

export interface AppContextType {
    addToCart: (payload: Product) => void,
    removeFromCart: (payload: Product) => void,
    state: {
        cart: Product[],
        products: Product[],
        buyer: Buyer[],
        order: any[]
    },
    addToBuyer: (payload: Buyer) => void,
    addNewOrder: (payload: AddNewOrderProps) => void
}

interface AddNewOrderProps {
    buyer: Buyer[],
    products: Product[],
    payment: PaymentDetails
}