import React from 'react'

import { Product as ProductType } from '../Types/Product'

interface Props {
  product: ProductType,
  handleAddToCart: (product: ProductType) => () => void
}

const Product = ({ product, handleAddToCart }: Props) => {
  return (
    <div className="Products-item">
      <img src={product.image} alt={product.title} />
      <div className="Products-item-info">
        <h2>
          {product.title}
          <span>
            $
            {' '}
            {product.price}
          </span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>Comprar</button>
    </div>
  )
}

export { Product }