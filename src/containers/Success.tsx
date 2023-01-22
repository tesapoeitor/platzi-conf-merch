import React from 'react'
import '../styles/components/Success.css'

const Success = () => {
  return (
    <section className="Success">
      <div className="Success-content">
        <h2>Oscar, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 días a tu dirección:</span>
        <div className="Success-map">
          Google Maps
        </div>
      </div>
    </section>
  )
}

export { Success }