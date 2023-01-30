import React, { useContext } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"

import { AppContext } from '../context/AppContext'
import { Product } from '../Types/Product'
import { PaymentDetails } from "../Types/PaymentDetails"
import '../styles/components/Payment.css'

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext)!
  const { cart, buyer} = state
  const navigate = useNavigate()

  const handleSumTotal = () => {
    const reducer = (accumulator: number, product: Product) => accumulator + product.price
    const sum = cart.reduce(reducer, 0)
    return sum
  }

  const amount = String(handleSumTotal())

  const options = {
    "client-id": "AZ7jqR_bVW2uMw__PuCqXbkG1JRF-qN48x2F6JriuPikQX0DGxiVX81Q4tWt_seeiYWl3MTP_g9LbFRp",
    currency: "USD",
    intent: "capture",
  }

  const handlePaymentSuccess = (data: PaymentDetails) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data
      }
      addNewOrder(newOrder);
      navigate('/checkout/success')
    }
  }

  return (
    <section className="Payment">
      {handleSumTotal() <= 0 && <Navigate to={"/"}/>}
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalScriptProvider options={options}>
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={(data, actions) => {
                return actions.order
                  .create({
                    purchase_units: [
                      {
                        amount: {
                          currency_code: "USD",
                          value: amount,
                        },
                      },
                    ],
                  })
                  .then((orderId) => {
                    // Your code here after create the order
                    return orderId;
                  });
              }}
              onApprove={(data, action) => {
                return action.order!.capture()
                .then(details => {
                  handlePaymentSuccess(details as unknown as PaymentDetails)
                })
              }}
            />
          </PayPalScriptProvider>
        </div>
      </div>
      <div />
    </section>
  )
}

export { Payment }