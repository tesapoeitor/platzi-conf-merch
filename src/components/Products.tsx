import React, { useContext } from 'react'
import toastr from "toastr"
import "toastr/build/toastr.min.css"

import { Product } from './Product'
import { Product as ProductType } from '../Types/Product'
import { AppContext } from '../context/AppContext'
import '../styles/components/Products.css'

const Products = () => {
  const { state, addToCart } = useContext(AppContext)!
  const { products } = state

  const handleAddToCart = (product: ProductType) => () => {
    addToCart(product)
    toastr.options.timeOut= 1500 
    toastr.success("Agregado al carrito")
  }

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <Product 
            key={product.id} 
            product={product} 
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  )
}

export { Products }