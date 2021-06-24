import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import shieldImg from '../../../assets/img/MoonShield%20Logo.png'
import accountImg from '../../../assets/img/logoletras.svg'
import AccountButton from '../../../components/TopBar/components/AccountButton'

const DashNav: React.FC = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)'
  })

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)'
  })

  const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  margin-left: 0px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`
  return (
    <>    
    <header className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark navbar-custom">
        <div className="container container-responsive" style={{paddingLeft:'0px', paddingRight:'0px'}}>
            <AccountButton />
        </div>
    </header>
    </>
  );
}

export default DashNav