import React from "react"
import { ContainerWrapper } from "../elements"
import { Nav, Footer } from "../components"
import App from "../components/App"

export const Container = ({ children }) => {
  return (
    
    <ContainerWrapper>
      <App/>
      <Nav />
      {children}
      
      <Footer />


    </ContainerWrapper>
  )
}
