import { string } from 'prop-types'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

    const StyledLink = styled.a`
    color: ${(props) => props.theme.color.grey[400]};
    padding-left: 25%;
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.color.grey[500]};
      } 
    `
    const DappRow = styled.div`
      align-items: center;
      box-sizing: border-box;
      display: flex;
      padding-top: -5%;
      padding-left: 0px; 
      padding-right: 0px;
      padding-bottom: ${(props) => props.theme.spacing[4]}px;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
      @media (max-width: 767px) {
        padding-top: ${(props) => props.theme.spacing[2]}px;
      }
    `

    const DappInfoContainer = styled.div`
    --bs-gutter-x: 0rem;
      text-align: center;      box-sizing: border-box;
      margin: auto;
      padding-left: 0px; 
      padding-right: 0px;
      max-width: 400px;
      width: 100%;
      position: relative;
      font-family: 'Catamaran';  
      border: 3px solid rgba(255,255,255,.2)!important;
      background: linear-gradient(90deg,rgba(0,0,0,.67) 0,rgba(42,45,52,.49) 75%);
      box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
      border-radius: 15px;
    `
    
    const StyledIcon = styled.img`
      width: 100px;
    `
    
    const StyledDescription = styled.div`
      border: 1px solid #ffc107;
      margin-top: 15px;
      padding: 20px;
      border-radius: 20px;
      box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%), 0 6px 20px 0 rgb(0 0 0 / 19%);
    `

interface DappInfoProps {
    maxTransaction: string
    totolLP: string
    totalReward: string
    BNBinLp: string
    BNBinRewardPool: string
    MSHLDBalance: string
}

const DappInfo: React.FC<DappInfoProps> = ({
    maxTransaction,
    totolLP,
    totalReward,
    BNBinLp,
    BNBinRewardPool,
    MSHLDBalance
  }) => {
return (      
    <>
        <div className="container mb-5 container-fluid" style={{paddingLeft:'0px', paddingRight:'0px'}}>
            <DappRow>
                <div className="row" style={{ width: '100%', paddingLeft:'0px', paddingRight:'0px' }}>
                    <DappInfoContainer className="col-lg-4 col-md-12 my-2 my-md-0">
                        <div className="dapp-block d-flex flex-column justify-content-evenly align-items-center">
                            <div className="row w-75">
                                <div className="col">
                                    <StyledIcon src="assets/img/max_trans.svg" className="dapp-img" style={{ width:'auto'}} />
                                    {/* <img className="dapp-img" src="assets/img/max_trans.svg" loading="lazy" style={{ width: 'auto' }}></img> */}
                                </div>
                            </div>
                            <div className="row  w75">
                                <div className="col text-center">
                                    <h1>Max transaction</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>MSHLD 500000000000 | BNB  { maxTransaction }</p>
                                </div>
                            </div>
                        </div>
                    </DappInfoContainer>
                    <DappInfoContainer className="col-lg-4 col-md-12 my-2 my-md-0 dapp-block" style={{ width: '100%' }}>
                        <section className="dapp-block d-flex flex-column justify-content-evenly align-items-center">
                            <div className="row w-75">
                                <div className="col">
                                    <StyledIcon src="assets/img/18749396-Convertido.svg" className="dapp-img" style={{ width:'auto'}} />
                                </div>
                            </div>
                            <div>
                                <div className="col text-center">
                                    <h1>Total LP</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>$ {totolLP}</p>
                                </div>
                            </div>
                        </section>
                    </DappInfoContainer>
                    <DappInfoContainer className="col-lg-4 col-md-12 my-2 my-md-0 dapp-block" style={{ width: '100%' }}>
                        <section className="dapp-block d-flex flex-column justify-content-evenly align-items-center">
                            <div className="row w-75">
                                <div className="col">
                                    <StyledIcon src="assets/img/money-fly-7.svg" className="dapp-img" style={{ width:'auto'}} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-center">
                                    <h1>Total reward pool</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>${ totalReward }</p>
                                </div>
                            </div>
                        </section>
                    </DappInfoContainer>
                </div>
            </DappRow>
            <DappRow>
                <div className="row" style={{ width: '100%'}}>
                    <DappInfoContainer className="col-lg-4 col-md-12 my-2 my-md-0">
                        <div className="dapp-block d-flex flex-column justify-content-evenly align-items-center">
                            <div className="row w-75" style={{ marginTop: '-5%' }}>
                                <div className="col">
                                    <StyledIcon src="assets/img/total_bnb_in_liquidity_pool.svg" className="dapp-img" style={{ width:'auto'}} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-center">
                                    <h1>$BNB in liquidity pool</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>{ BNBinLp }</p>
                                </div>
                            </div>
                        </div>
                    </DappInfoContainer>
                    <DappInfoContainer className="col-lg-4 col-md-12 my-2 my-md-0">
                        <section className="dapp-block d-flex flex-column justify-content-evenly align-items-center">
                            <div className="row w-75">
                                <div className="col">
                                    <StyledIcon src="assets/img/bnb_reward.svg" className="dapp-img" style={{ width:'auto'}} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-center">
                                    <h1><strong>Total</strong>&nbsp;BNB in reward pool</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>BNB {BNBinRewardPool}</p>
                                </div>
                            </div>
                        </section>
                    </DappInfoContainer>
                    <DappInfoContainer className="col col-lg-4 col-md-12 my-2 my-md-0" style={{ width: '100%' }}>
                        <section className="dapp-block d-flex flex-column justify-content-evenly align-items-center">
                            <div className="row w-75">
                                <div className="col">
                                    <StyledIcon src="assets/img/smart_balance.svg" className="dapp-img" style={{ width:'auto'}} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-center">
                                    <h1>Your $MSHLD balance</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>${MSHLDBalance}</p>
                                </div>
                            </div>
                        </section>
                    </DappInfoContainer>
                </div>
            </DappRow>
        </div>
        
    </>
  );
}

export default DappInfo