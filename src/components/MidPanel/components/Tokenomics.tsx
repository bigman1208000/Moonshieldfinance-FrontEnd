import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

const TokenomicsInfo: React.FC = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)'
  })

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)'
  })

  return (
            <>   
            <div className="row align-items-center col-xs-0 mb-5 mt-5" id="tokenomics" style={{width:'100%'}}>
                <div className="col p-0 m-0">
                    <section className="features-blue p-5">
                        <div className="intro mb-0" style={{ zIndex: 3 }}>
                            <h2 className="text-center" data-aos="zoom-in">Tokenomics</h2>
                        </div>
                        <div className="row features p-1 m-sm-15 text-center">
                            <div className="col col-12 col-lg-4" data-aos="fade" data-aos-duration="1200" data-aos-delay="500">
                                <h3 data-aos="fade" data-aos-duration="1200" className="name m-0">Initial LP</h3>
                                <p data-aos="fade" data-aos-duration="1200" className="description">90% of the supply was added to the liquidity pool on Pancakeswap, along with 3 BNB.</p>
                            </div>
                            <div className="col col-12 col-lg-4" data-aos="fade" data-aos-duration="1200" data-aos-delay="600">
                                <h3 data-aos="fade" data-aos-duration="1200" className="name m-0">Burn</h3>
                                <p data-aos="fade" data-aos-duration="1200" className="description">7% of the total supply was burned.</p>
                            </div>
                            <div className="col col-12 col-lg-4" data-aos="fade" data-aos-duration="1200" data-aos-delay="700">
                                <h3 className="name m-0">Team wallet</h3>
                                <p className="description">3% of tokens has been given to the team's wallet.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
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
export default TokenomicsInfo