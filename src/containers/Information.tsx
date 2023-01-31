import React, { useContext, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom"

import { SEO } from '../components/SEO'
import { AppContext } from '../context/AppContext'
import '../styles/components/Information.css'
import { Buyer } from '../Types/Buyer'

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext)!
  const [validatedForm, setValidateForm] = useState(false)
  const { cart } = state
  const form = useRef(null)
  const navigate = useNavigate()

  const handleFormValidation = () => {
    if(form.current) {
      const formData = new FormData(form.current)

      const name = formData.get("name")
      const email = formData.get("email")
      const address = formData.get("address")
      const city = formData.get("city")
      const country = formData.get("country")
      const phone = formData.get("phone")

      if(name && email && address && city && country && phone) {
        setValidateForm(true)
      } else {
        setValidateForm(false)
      }
    }
  }

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
      <SEO
        title='Information'
      />
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input onChange={handleFormValidation} type="text" placeholder="Nombre completo" name="name" />
            <input onChange={handleFormValidation} type="email" placeholder="Correo Electrónico" name="email" />
            <input onChange={handleFormValidation} type="text" placeholder="Dirección" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input onChange={handleFormValidation} type="text" placeholder="Ciudad" name="city" />
            <input onChange={handleFormValidation} type="text" placeholder="País" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Código postal" name="cp" />
            <input onChange={handleFormValidation} type="tel" placeholder="Teléfono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">
              Regresar
            </Link>
          </div>
          <div className="Information-next">
            <button 
              type='button' 
              onClick={handleSubmit}
              disabled={!validatedForm}
              className={validatedForm ? "" : "disable"}
            >
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