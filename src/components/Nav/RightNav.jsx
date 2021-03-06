import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 20;

  li {
    padding: 18px 10px;
    cursor:pointer;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    
    li {
      margin: 0 auto;
      color: #fff;
    }
  }
`

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
    <li> Home</li>
    <li> About me</li>
    <li> Contact me</li> 
   </Ul>
  )
}

export default RightNav
