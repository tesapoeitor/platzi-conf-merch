import React, { useContext, useRef } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom"

import { AppContext } from '../context/AppContext'
import '../styles/components/Information.css'
import { Buyer } from '../Types/Buyer'

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext)!
  const { cart } = state
  const form = useRef(null)
  const navigate = useNavigate()

  const handleSubmit = () => {
    if(form.current) {
      const formData = new FormData(form.current)
      const buyer = {
        "name": formData.get("name"),
        "email": formData.get("email"),
        "address": formData.get("address"),
        "apto": formData.get("apto"),
        "city": formData.get("city"),
        "country": formData.get("country"),
        "state": formData.get("state"),
        "cp": formData.get("cp"),
        "phone": formData.get("phone")
      } as Buyer
      addToBuyer(buyer)
      navigate("/checkout/payment")
    }
  }

  return (
    <section className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input required type="text" placeholder="Nombre completo" name="name" />
            <input required type="email" placeholder="Correo Electrónico" name="email" />
            <input required type="text" placeholder="Dirección" name="address" />
            <input required type="text" placeholder="Apto" name="apto" />
            <input required type="text" placeholder="Ciudad" name="city" />
            <input required type="text" placeholder="País" name="country" />
            <input required type="text" placeholder="Estado" name="state" />
            <input required type="text" placeholder="Código postal" name="cp" />
            <input required type="tel" placeholder="Teléfono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">
              Regresar
            </Link>
          </div>
          <div className="Information-next">
            <button type='button' onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map(item => (
          <div className="Information-item" key={`Information-item-${item.id}`}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export { Information }