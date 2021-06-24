import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

const Footer: React.FC = () => {


  return (
            <>   
              <FooterMain id="footer" className="py-5 bg-stars">
                  <FooterHeader></FooterHeader>
                  <FooterContainer className="container p-3 pb-5">
                      <div className="row d-flex justify-content-center align-items-center flex-column">
                          <div className="col d-flex align-items-center justify-content-center">
                              <img src="assets/img/logo-blanco.svg" style={{width: '35px', margin: '15px'}}></img>
                              <p className="text-center text-white m-0 small">Copyright © 2021. All rights reserved by MoonShield Finance.</p>
                          </div>
                          <div className="col d-flex align-items-center justify-content-center">
                              <p className="text-center text-white m-0 small text-muted">
                                Made with&nbsp;
                                <p>❤️</p>
                                by Crypto Astronaut
                              </p>
                          </div>
                      </div>
                      <div className="row mt-5">
                          <div className="col d-flex align-items-center justify-content-evenly flex-row flex-wrap">
                              <div className="social-icons">
                                <a className="m-2" href="https://twitter.com/MoonShieldFi">
                                  <i className="icon ion-social-twitter m-2"></i>
                                </a>
                                <a className="m-2" href="https://www.facebook.com/MoonShieldDefi/">
                                  <i className="icon ion-social-facebook m-2"></i>
                                </a>
                                <a className="m-2" href="https://t.me/MoonShieldFinance">
                                  <i className="fa fa-telegram m-2"></i></a>
                                <a className="m-2" href="https://www.instagram.com/moonshieldfinance/">
                                  <i className="icon ion-social-instagram m-2"></i></a>
                                <a className="m-2" href="mailto:moonshieldfinance@gmail.com">
                                  <i className="icon ion-email m-2"></i>
                                </a>
                                <a className="m-2" href="https://www.reddit.com/r/MoonShieldFinance/">
                                  <i className="icon ion-social-reddit"></i>
                                </a>
                                <a className="m-2" href="https://discord.gg/p8QDThhE5V">
                                  <i className="fab fa-discord m-2"></i>
                                </a>
                              </div>
                          </div>
                      </div>
                  </FooterContainer>
              </FooterMain>
            </>
        );
}

const FooterHeader = styled.div`
    position: absolute;width: 100%;
    background: linear-gradient( 0deg , rgba(0,0,0,0.46) 50%, rgba(50,50,50,0) 75%);
    height: 100%;top: 0;
    left: 0;z-index: 1;
  }
`

const FooterContainer = styled.div`
    background: rgba(0,0,0,0.5);
    z-index: 5;
    position: relative;
  }
`

const FooterMain = styled.div`
    width: 100%;
    height:100%;
    @media(min-width: 768px) {
      margin-bottom:-72px;
    }
  }
`

export default Footer

/* import React from 'react'
import styled from 'styled-components'

import Nav from './components/Nav'
import bgImg from '../../assets/img/footerbg.svg'

const Footer: React.FC = () => (
  <StyledFooter>
    <StyledFooterInner>
      <Nav />
    </StyledFooterInner>
  </StyledFooter>
) */