import React, { useContext } from 'react'
import { Link } from "react-router-dom"

import { SEO } from "../components/SEO"
import { AppContext } from '../context/AppContext'
import { Product } from '../Types/Product'
import '../styles/components/Checkout.css'

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext)!
  const { cart } = state

  const handleRemove = (product: Product) => () => {
    removeFromCart(product)
  }

  const handleSumTotal = () => {
    const reducer = (accumulator: number, product: Product) => accumulator + product.price
    const sum = cart.reduce(reducer, 0)
    return sum
  }

  return (
    <div className="Checkout">
      <SEO
        title='CheckOut'
      />
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>Sin pedidos...😢</h3>}
        {cart.length > 0 && cart.map((product, index) => (
          <div className="Checkout-item" key={product.id + index}>
            <div className="Checkout-element">
              <h4>{product.title}</h4>
              <span>$ {product.price}</span>
            </div>
            <button type="button" onClick={handleRemove(product)}>
              <i className="fas fa-trash-alt" title="Eliminar" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export { Checkout }