import React from "react"

import "../styles/components/CreditCard.css"

const CreditCard = () => {
    return (
        <section className="credit-card">
            <h3>Utilice esta tarjeta para realizar la simulación de pago</h3>
            <p><strong>Tipo de tarjeta:</strong> Visa</p>
            <p><strong>Número de tarjeta:</strong> 4032031356467380</p>
            <p><strong>Fecha de caducidad:</strong> 11/2026</p>
            <p><strong>CVV:</strong> 110</p>
            <p><strong>Código postal:</strong> 1113</p>
        </section>
    )
}

export { CreditCard }