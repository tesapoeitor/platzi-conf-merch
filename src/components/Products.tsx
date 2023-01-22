import React from 'react'
import { Product } from './Product'
import { Product as ProductType } from '../Types/Product'
import '../styles/components/Products.css'

interface Props {
  products: ProductType[]
}

const Products = ({ products }: Props) => {
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export { Products }