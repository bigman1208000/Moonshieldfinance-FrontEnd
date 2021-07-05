import React, { useRef, useEffect } from 'react'
// import { BookOpen, Code, PieChart, MessageCircle, Send } from 'react-feather'
import styled from 'styled-components'
import Container from '../Container'

const StyledMenuButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 35px;
  background-color: #000000;
  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;
  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: #000000;;
  }
`

const StyledMenu = styled.div`
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`

const MenuItem = styled.div`
  flex: 1;
  :hover {
    color: #fff;
    cursor: pointer;
    text-decoration: none;
  }
`

const CODE_LINK = 'https://github.com/justliquidity/SwapLiquidity'

export default function Menu() {
  const node = useRef<HTMLDivElement>()

  return (    
          <>
            <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark navbar-custom">
                <div className="container">
                    <div className="col">
                      <a href="https://moonshield.finance">
                        <img src="assets/img/Horizontal%20logo.svg" style={{ maxWidth:'50%'}} loading="lazy"></img>                          
                      </a>
                    </div>
                    <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarResponsive">
                      <span className="visually-hidden">Toggle navigation</span>
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                      <ul className="navbar-nav ms-auto">
                          <li className="nav-item"><a className="nav-link" href="#features">FEATURES</a></li>
                          <li className="nav-item"><a className="nav-link" href="#tokenomics">TOKENOMICS</a></li>
                          <li className="nav-item"><a className="nav-link" href="#buy">HOW TO BUY</a></li>
                          <li className="nav-item"><a className="nav-link" href="#team">TEAM</a></li>
                          <li className="nav-item"><a className="nav-link" href="https://moonshield.finance/dashboard">LAUNCH DAPP</a></li>
                      </ul>
                    </div>
                </div>
            </nav>
          </>
  )
}