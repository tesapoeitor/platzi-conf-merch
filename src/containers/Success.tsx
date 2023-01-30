import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import { AppContext } from '../context/AppContext'
import { useAddress } from "../hooks/useAddress"
import { Map } from "../components/Map"
import '../styles/components/Success.css'

const Success = () => {
  const { state } = useContext(AppContext)!
  const { buyer } = state

  const location = useAddress(buyer[0]?.address, buyer[0]?.city, buyer[0]?.country)

  return (
    <section className="Success">
      {!buyer[0]?.name && <Navigate to="/" />}
      {buyer[0]?.name && (
        <div className="Success-content">
          <h2>{`${buyer[0]?.name}, Gracias por tu compra`}</h2>
          <span>Tu pedido llegara en 3 días a tu dirección:</span>
          <div className="Success-map">
            {(location && <Map position={location} />)}
          </div>
        </div>
      )}
    </section>
  )
}

export { Success }