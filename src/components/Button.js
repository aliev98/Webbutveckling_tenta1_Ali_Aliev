import React from "react"
import { ButtonWrapper } from "../elements"

export const Button = ({ children, href }) => {
  // Note the link, dont forget to add "/" + before href in the ButtonWrapper
  return <ButtonWrapper to={"/" + href}>{children}</ButtonWrapper>
}