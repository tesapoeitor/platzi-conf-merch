import React, { useContext } from 'react'

import { Product } from './Product'
import { Product as ProductType } from '../Types/Product'
import { AppContext } from '../context/AppContext'
import '../styles/components/Products.css'

const Products = () => {
  const { state, addToCart } = useContext(AppContext)!
  const { products } = state

  const handleAddToCart = (product: ProductType) => () => {
    addToCart(product)
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