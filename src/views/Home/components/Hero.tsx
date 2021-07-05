import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import shieldImg from '../../../assets/img/MoonShield%20Logo.png'
import accountImg from '../../../assets/img/logoletras.svg'
import AccountButton from '../../../components/TopBar/components/AccountButton'

const HeroHowTo: React.FC = () => {
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

const StyledAccountButton = styled.div`
  margin-top: 20px;
  align-items: center;
  width: auto;
  @media (max-width: 767px) {
    justify-content: center;
    width: auto;
  }
`

const StyledLogoWrapper = styled.div`
  padding-left: 25%;
  @media (max-width: 400px) {
    width: auto;
  }
`

  return (
    <>   
        <section id="buy" className="bg-primary feature-section bg-stars" style={{ width:'100%' }}>
            <div className="container">
                <div className="row align-items-center col-xs-0 how-to-buy">
                    <div className="col p-0 m-0">
                        <section className="features-blue m-0 p-5">
                            <div className="intro mb-0">
                                <h2 className="text-center mb-0" data-aos="zoom-in">How to buy</h2>
                            </div>
                            <img data-aos="fade" data-aos-duration="1200" src="assets/img/logoletras.svg" style={{maxWidth: '60%', minWidth: '40%', display: 'block', margin: '0 auto'}}></img>
                            <div className="row p-5 pb-0 d-flex align-items-start justify-content-evenly text-center" data-aos="fade" data-aos-duration="1200">
                                <div className="col col-12" data-aos="fade" data-aos-duration="1200">
                                    <div className="row" data-aos="fade" data-aos-duration="1200">
                                        <div className="col col-12">
                                            <h3 data-aos="fade" data-aos-duration="1200" className="name m-0 p-0">Please note</h3>
                                            <p data-aos="fade" data-aos-duration="1200" className="description">
                                                Max buy is 500 billion MSHLD per transaction.
                                                <p>Set Pancakeswap slippage to 10% - 15%</p>
                                                <p>
                                                    If you want to buy more $MSHLD but don’t want to have your claim date pushed back, purchase 2% or less of your first transaction amount.&nbsp;
                                                    For example, if you bought 500 billion $MSHLD and you buy an additional 10 billion (2% of 500 billion) then your BNB claim date will not get pushed back.&nbsp;
                                                    If you buy more than 2% of your first transaction the claim date will be extended.&nbsp;You can do this as many times as you want.&nbsp;Adjust your gas 
                                                    fee so each transaction is less than $0.50
                                                </p>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-5 pb-0 d-flex align-items-start justify-content-evenly text-center" data-aos="fade" data-aos-duration="1200">
                                <div className="col col-12" data-aos="fade" data-aos-duration="1200">
                                    <div className="row" data-aos="fade" data-aos-duration="1200">
                                        <div className="col-sm-6 col-md-4 mb-2 p-2" data-aos="fade" data-aos-duration="1200" data-aos-delay="500">
                                            <h3 data-aos="fade" data-aos-duration="1200" className="name">Get a web3 wallet</h3>
                                            <p data-aos="fade" data-aos-duration="1200" className="description">Download Trustwallet or MetaMask on the App Store or Google Play. You need another currency such as $BNB or $BUSD to buy $MSHLD</p>
                                        </div>
                                        <div className="col-sm-6 col-md-4 mb-2 p-2" data-aos="fade" data-aos-duration="1200" data-aos-delay="600">
                                            <h3 data-aos="fade" data-aos-duration="1200" className="name">Go to Pancakeswap</h3>
                                            <p data-aos="fade" data-aos-duration="1200" className="description">Navigate to Pancakeswap's exchange to buy $MSHLD</p>
                                        </div>
                                        <div className="col-sm-6 col-md-4 mb-2 p-2" data-aos="fade" data-aos-duration="1200" data-aos-delay="700">
                                            <h3 className="name">Copy the contract ID</h3>
                                            <p className="description" style={{ wordWrap: 'break-word' }}>
                                                Copy our contract ID below and use it on Pancakeswap to buy $MSHLD&nbsp;
                                                <strong>0XF565AAF0B8EB813A1C8C956D2C59F1CE27FD2366</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col d-flex align-items-center justify-content-center col-xs-12 flex-wrap mt-5" id="buy-btns-1">
                                <a className="btn btn-primary btn-xl rounded-pill btn-border carbon-bg-gray m-2" role="button" data-aos="slide-up" data-aos-duration="950" href="https://metamask.io/">METAMASK</a>
                                <a className="btn btn-primary btn-xl rounded-pill btn-border carbon-bg-gray m-2" role="button" data-aos="slide-up" data-aos-duration="950" href="https://trustwallet.com/">TRUSTWALLET</a>
                                <a className="btn btn-primary btn-xl rounded-pill btn-border carbon-bg-gray m-2" role="button" data-aos="slide-up" data-aos-duration="950" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0XF565AAF0B8EB813A1C8C956D2C59F1CE27FD2366">PANCAKESWAP</a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
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

export default HeroHowTo