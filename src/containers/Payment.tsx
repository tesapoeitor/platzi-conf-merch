import React from 'react'
import '../styles/components/Payment.css'

const Payment = () => {
  return (
    <section className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        <div className="Payment-button">
          Botón de pago con PayPal
        </div>
      </div>
      <div />
    </section>
  )
}

export { Payment }