import React from 'react'
import { HashRouter, Routes, Route} from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"

import { Home } from "../containers/Home"
import { Checkout } from "../containers/Checkout"
import { Information } from "../containers/Information"
import { Payment } from "../containers/Payment"
import { Success } from "../containers/Success"
import { NotFound } from "../containers/NotFound"
import { Layout } from "../components/Layout" 
import { AppContext } from "../context/AppContext"
import { useInitialState } from "../hooks/useInitialState" 

const App = () => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <HelmetProvider>
        <HashRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/checkout/information" element={<Information />} />
              <Route path="/checkout/payment" element={<Payment />} />
              <Route path="/checkout/success" element={<Success />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Layout>
        </HashRouter>
      </HelmetProvider>
    </AppContext.Provider>
  );
}

export default App
