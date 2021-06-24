import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import MSHLDABI from '../../../constants/abi/moonshield.json'
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import { MSHLDTokenAddress } from '../../../constants/tokenAddresses'
import NumberFormat from 'react-number-format';

const Header: React.FC = () => {    
  const [strBurnTotal, setBurnTotal] = useState('')

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)'
  })

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)'
  })

  const web3 = new Web3(
    new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org'),
  )

  const MSHLDContract = new web3.eth.Contract(
    MSHLDABI as unknown as AbiItem,
    MSHLDTokenAddress,
  )
  
    // ---------- CURRENT WALLET MSHLD HOLDINGS -------------  //
    const getBurnAmount = async () => {
        if(strBurnTotal.length < 1)
        {
            const balance = await MSHLDContract.methods
            .balanceOf('0x000000000000000000000000000000000000dead')
            .call()
            var burnTotal = web3.utils.toBN(balance).div(web3.utils.toBN(1000000000))
            setBurnTotal(burnTotal.toLocaleString())
        }
        
    }

  const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  margin-left: 0px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

const HeaderSection = styled.div`
    border: none!important;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`

const StyledLogoWrapper = styled.div`
  padding-left: 25%;
  @media (max-width: 400px) {
    width: auto;
  }
`

getBurnAmount()

  return (
    <>    
        <header className="text-center text-white masthead" style={{ width:'100%', marginTop:'0px'}}>
            <div className="masthead-content">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex flex-column flex-wrap flex-grow-1 align-items-center justify-content-center mb-5" style={{ position: 'relative' }}>
                            <h1 className="masthead-subheading mb-0 aos-init aos-animate" data-aos="slide-down" data-aos-duration="450" data-aos-delay="350">
                                <strong>Earn BNB</strong>
                            </h1>
                            <h1>just by holding</h1>
                            <div className="col-12 col d-flex align-items-center justify-content-center mt-3">
                                <iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/YkRC8nXgwEI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center mb-5 flex-wrap" id="header-btns">
                        <div className="col flex-grow-1">
                            <a className="btn btn-primary font-monospace btn-xl rounded-pill btn-border bg-primary carbon-bg-gray" role="button" data-bs-toggle="tooltip" data-bss-tooltip="" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xf565aaf0b8eb813a1c8c956d2c59f1ce27fd2366" title="Buy $MSHLD here">
                                BUY ON PANCAKESWAP
                            </a>
                        </div>
                        <div className="col font-monospace flex-grow-1">
                            <a className="btn btn-primary font-monospace btn-xl rounded-pill btn-border bg-primary carbon-bg-gray" role="button" data-bs-toggle="tooltip" data-bss-tooltip="" href="https://dapp.moonshield.finance/" title="Claim your $BNB here">
                                OPEN DAPP
                            </a>
                        </div>
                        <div className="col font-monospace flex-grow-1">
                            <a className="btn btn-primary font-monospace btn-xl rounded-pill btn-border bg-primary carbon-bg-gray" role="button" data-bs-toggle="tooltip" data-bss-tooltip="" href="https://poocoin.app/tokens/0xf565aaf0b8eb813a1c8c956d2c59f1ce27fd2366" title="View a live chart here">
                                POOCOIN CHART
                            </a>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center flex-column">
                        <div className="col p-0 m-0">
                            <HeaderSection className="features-blue m-0 p-5 border-dot">
                                <div className="intro mb-0" style={{ zIndex: 3 }}></div>
                                <div className="row features p-1 m-sm-15">
                                    <div className="col col-12 col-lg-6 justify-content-center align-items-center d-flex flex-column flex-wrap flex-grow-1">
                                        <h3 className="name">Holders</h3>
                                        <p className="description">7000+</p>
                                    </div>
                                    <div className="col col-12 col-lg-6 justify-content-center align-items-center d-flex flex-column flex-wrap flex-grow-1">
                                        <h3 className="name">Burned</h3>
                                        <p className="description">
                                        <NumberFormat value={strBurnTotal} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                        </p>
                                    </div>
                                </div>
                            </HeaderSection>
                        </div>
                        <div className="col d-flex align-items-center justify-content-evenly flex-row flex-wrap mt-5">
                            <div className="social-icons">
                                <a className="m-2" href="https://twitter.com/MoonShieldFi">
                                    <i className="icon ion-social-twitter m-2"></i>
                                </a>
                                <a className="m-2" href="https://www.facebook.com/MoonShieldDefi/">
                                    <i className="icon ion-social-facebook m-2"></i>
                                </a>
                                <a className="m-2" href="https://t.me/MoonShieldFinance">
                                    <i className="fa fa-telegram m-2"></i>
                                </a>
                                <a className="m-2" href="https://www.instagram.com/moonshieldfinance/">
                                    <i className="icon ion-social-instagram m-2"></i>
                                </a>
                                <a className="m-2" href="mailto:moonshieldfinance@gmail.com">
                                    <i className="icon ion-email m-2"></i>
                                </a><a className="m-2" href="https://www.reddit.com/r/MoonShieldFinance/">
                                    <i className="icon ion-social-reddit m-2"></i>
                                </a>
                                <a className="m-2" href="https://discord.gg/p8QDThhE5V">
                                    <i className="fab fa-discord m-2"></i>
                                </a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
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

export default Header