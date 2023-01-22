import React, { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import '../styles/components/Layout.css'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="Main">
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export { Layout }