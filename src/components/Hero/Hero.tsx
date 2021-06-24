import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

const HeroBanner: React.FC = () => {
    const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 768px)'
    })
  
    const isMobile = useMediaQuery({
      query: '(max-width: 767px)'
    })

    const StyledBannerContainer = styled.div`
      color: #ffc107;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.3;
    `
  
    const StyledLink = styled.a`
    color: ${(props) => props.theme.color.grey[400]};
    padding-left: 25%;
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.color.grey[500]};
      } 
    `

    const StyledHero = styled.div`
      align-items: center;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      padding-right: 0px;
      padding-left: 0px;
      margin-right: 0px;
      margin-left: 0px;
      @media (max-width: 767px) {
        padding-top: ${(props) => props.theme.spacing[2]}px;
      }
    `

    const StyledSection = styled.div`
      display: flex;
      flex-direction: row;
      border: none!important; 
      box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
      border-radius: 15px;
      border-bottom: 3px solid var(--moonshield)!important;
    `

    return (      
      <StyledHero className="container mb-5 container-fluid" style={{ width: '100%', paddingTop: 'calc(5rem + 72px)' }}>        
        <div style={{ width: '100%' }}>
          <div className="row">
            <div className="justify-content-evenly align-items-center flex-wrap flex-row">
                <div className="row">
                    <div className="col-lg-10 col-md-6 col-sml-6 justify-content-start">
                      <a href="http://moonshield.finance">
                        <p>Back to site</p> 
                      </a>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sml-6 justify-content-right" style={{ textAlign:'right'}}>
                      <a className="btn btn-primary font-monospace btn-md btn-border bg-primary carbon-bg-gray align-items-end justify-content-right" role="button" href="https://docs.moonshield.finance/">Guide</a>
                    </div>
                </div>
                <StyledSection className="row features-blue m-0 border-dot mb-5 mt-2 px-0 ps-0 p-5">
                    <div className="intro mb-0 col-lg-12" style={{zIndex: 3}}>
                        <img className="mb-3" src="assets/img/logoletras.svg" style={{ margin: 0, display:'block' }}></img>
                        <h1 className="text-center">A new way to earn BNB.</h1>
                    </div> 
                    <div className="features p-1 col-lg-12">
                      <div className="justify-content-center align-items-center d-flex flex-column flex-wrap flex-grow-1">
                        <a className="btn btn-primary font-monospace btn-xl rounded-pill btn-border bg-primary carbon-bg-gray" role="button" data-bs-toggle="tooltip" data-bss-tooltip="" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xf565aaf0b8eb813a1c8c956d2c59f1ce27fd2366" title="Buy $MSHLD here">Buy $MSHLD</a>
                      </div>
                    </div>
                </StyledSection>
              </div>
          </div>
        </div>
      </StyledHero>
    )
}

export default HeroBanner