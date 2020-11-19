import styled from "styled-components"

export const CardWrapper = styled.div`
  margin: 2rem 1rem;
  width: 33%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 3px solid green; */
  background-color:#FFF6F3;


  @media screen and (max-width:1041px){
  margin: 2rem 0rem;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction:column;
  align-items: center;
  /* border: 3px solid ; */
  background-color:#FFF6F3;
  }
`