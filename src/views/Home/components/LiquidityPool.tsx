import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import shieldImg from '../../../assets/img/MoonShield%20Logo.png'
import accountImg from '../../../assets/img/logoletras.svg'
import AccountButton from '../../../components/TopBar/components/AccountButton'

const LiquidityPool: React.FC = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)'
  })

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)'
  })

  return (
            <>    
                <SectionContainer className="feature-section" style={{ width:'100%'}}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-1">
                                <div className="p-5">
                                    <img data-aos="fade" data-aos-duration="1250" className="img-fluid feature-img" src="assets/img/18749396-Convertido.svg"></img>
                                </div>
                            </div>
                            <DescriptionContainer className="col-lg-6 order-lg-2 feature-body" data-aos="slide-right" data-aos-duration="800">
                                <div className="p-5">
                                    <h2 className="display-4 tx-bg-fx tx-bg-no-fx border-dot">Automatic Liquidity Pool</h2>
                                    <p className="tx-bg-fx">4% of every transaction is locked into the liquidity pool on Pancake Swap. Unlike most projects, where buying and selling only benefits the project owner and whales can endanger the liquidity, Moonshield constantly gives back to holders in the form of weekly BNB rewards and reflection interest.</p>
                                </div>
                            </DescriptionContainer>
                        </div>
                    </div>
                </SectionContainer>
            </>
        );
}

const StyledLogo = styled(NavLink)`
  align-items: start;
  display: flex;
  justify-content: left;
  margin: 0;
  min-height: 44px;
  min-width: 44px;
  padding: 0;
  text-decoration: none;
`

const SectionContainer = styled.div`
    background: linear-gradient(var(--deep-purple) 50%, rgba(255,255,255,0) 0) 0 0, 
                radial-gradient(circle closest-side, var(--bg-primary) 53%, rgba(255,255,255,0) 0) 0 0, 
                radial-gradient(circle closest-side, var(--bg-primary) 50%, rgba(255,255,255,0) 0) 55px 0 var(--bg-black);
    background-size: 110px 200px;
    background-repeat: repeat-x;
  }
`

const DescriptionContainer = styled.div`
    background: radial-gradient(circle at 100% 50%, transparent 20%, rgba(255,255,255,.3) 21%, rgba(255,255,255,.3) 34%, transparent 35%, transparent), 
                radial-gradient(circle at 0% 50%, transparent 20%, rgba(255,255,255,.3) 21%, rgba(255,255,255,.3) 34%, transparent 35%, transparent) 0 -50px;
    background-color: var(--bg-black);
    background-size: 75px 100px;
  }
`
export default LiquidityPool