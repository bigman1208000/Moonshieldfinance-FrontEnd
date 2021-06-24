import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import * as bsc from '@binance-chain/bsc-use-wallet'
import MSHLDABI from '../../../constants/abi/moonshield.json'
import { claimBNBReward } from '../../../tokencontract/utils'
import useTokenContract from '../../../hooks/useTokenContract'
import { MSHLDTokenAddress } from '../../../constants/tokenAddresses'
import { useNextClaimDate } from '../../../hooks/useSlotBalance'
import { useGettingTime } from '../../../hooks/useContract'

const StyledArea = styled.div`
  box-sizing: border-box;
  margin: 0px;
  width: 100%;
  padding: 20px;
  margin-bottom: 40px;
  position: relative;
  font-family: 'Catamaran';  
  border: 3px solid rgba(255,255,255,.2)!important;
  border-radius: 5px;
  background: linear-gradient(90deg,rgba(0,0,0,.67) 0,rgba(42,45,52,.49) 75%);
  border-bottom: 3px solid var(--moonshield)!important;
  border-radius-bottom: 15px;
  color: #fff;    
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-bottom: 20px;
`


const StyledClaim = styled.div`
  background: linear-gradient(0deg, rgba(0,0,0,0.67) 0%, rgba(42,45,52,0.49) 75%);
  border: 3px solid rgba(255,255,255,0.2);
  border-bottom: 3px solid var(--moonshield);
  border-radius: 0 0 15px 15px;
`

const StyledCollection = styled.div`
  z-index: 3;
  float: left;
  position: relative;
  top: 10px;
`
const StyledIconArea = styled.div`
  border-right: 2px solid #ffc107;
  text-align: center;
  padding: 0.25rem !important;
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;
`

const StyledInfoArea = styled.div`
  align-self: left;
  text-align: left;
  padding: 0.5rem !important;
  -ms-flex: 0 0 75%;
  flex: 0 0 75%;
  max-width: 75%;
`

const StyledClaimButtonArea = styled.div`
  max-width: 50%;
  margin-top: 10px;
  margin-left: 25%;
  borderRadius: 20px;
`

const StyledIcon = styled.div`
  text-align: center;
  position: relative;
  margin-top: 0px;
  @media (max-width: 767px) {
    left: 0px;
  }
`
const StyledInfo = styled.div`
  font-size: 13px;
  font-weight: 300;
  margin: 10px 10px 10px 0ox;
`

const StyledNote = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #ffc107;
  text-align: left;
  margin-top: 10px;
`

const StyledValue = styled.span`
  font-size: bold;
  font-size: 24px;
`

const WriteClaim: React.FC = () => {
  const history = useHistory()
  const [calculatedReward, setCalculatedReward] = useState(0)
  const [BNBRewardPool, setRewardPool] = useState('')

  const wallet = bsc.useWallet()

  const web3 = new Web3(
    new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org'),
  )

  const MSHLDContract = new web3.eth.Contract(
    MSHLDABI as unknown as AbiItem,
    MSHLDTokenAddress,
  )

  const getBalance = async () => {
    const balance = await web3.eth.getBalance(MSHLDTokenAddress)
    setRewardPool(
      web3.utils.fromWei(web3.utils.toBN(balance).toString(), 'ether'),
    )
  }

  const getMaxTransactionAmount = async () => {
    if (wallet.account) {
      const reward = await MSHLDContract.methods
        .calculateBNBReward(wallet.account)
        .call()
      setCalculatedReward(reward / 1000000000000000000)
    }
  }

  const mynextclaimdate = useNextClaimDate(wallet.account)
  const nowdate = useGettingTime()
  const nextclaimdateGmt = mynextclaimdate.toNumber() === 0?"":toUTCString(new Date(mynextclaimdate.toNumber()*1000))
  const nextclaimdateLocale = mynextclaimdate.toNumber() === 0?"Not available":toLocaleString(new Date(mynextclaimdate.toNumber()*1000))

  const tokenContract = useTokenContract()

  const handleClaimClick = () => {
    claimBNBReward(tokenContract)
  }

  getMaxTransactionAmount()
  getBalance()

  return (    
    <>    
      <div className="container mb-5 container-fluid" style={{paddingLeft:'0px', paddingRight:'0px'}}>
        <StyledClaim className="row d-flex flex-wrap flex-column mt-5 m-0">
          <div className="col p-3">
            <section className="features-blue m-0 p-0 border-dot dapp-block">
              <StyledCollection className="intro mb-0">
                <p className="d-flex flex-grow-1 text-white">
                  My collectible BNB: {calculatedReward} BNB
                </p>
                <p className="d-flex flex-grow-1">
                  <a href="https://docs.moonshield.finance/innovation/a-new-way-to-earn-bnb" target="_blank">
                        *pool is always changing based on buys, sells, and collects by others, learn more here</a>
                </p>
              </StyledCollection>
            </section>
          </div>
          <div className="col">
            <section className="features-blue m-0 border-dot dapp-block mb-3 px-0 ps-0 p-5">
              <h1 className="text-center">
                You can collect your BNB at: {nextclaimdateLocale}
              </h1>
              <div className="row features p-1 m-sm-15">
                <div className="col col-12 justify-content-center align-items-center d-flex flex-column flex-wrap">
                  <a className="btn btn-primary font-monospace btn-xl rounded-pill btn-border bg-primary carbon-bg-gray" role="button" data-bs-toggle="tooltip" data-bss-tooltip="" onClick={handleClaimClick} title="Collect your $BNB reward">
                    COLLECT MY BNB
                  </a>
                </div>
              </div>
            </section>
          </div>
        </StyledClaim>
      </div>
      {/* <StyledArea>
        <StyledIconArea>
          <StyledInfo> Reward Pool </StyledInfo>
          <StyledIcon>
            <img style={{ height: 80, borderRadius: 25 }} src={rewardPool} />
          </StyledIcon>
          <StyledInfo> BNB {BNBRewardPool} </StyledInfo>
        </StyledIconArea>
        <StyledInfoArea>
          <StyledInfo>
            My reward: <StyledValue>0.000000 BNB</StyledValue>
          </StyledInfo>
          <StyledNote>
            *pool is always changing based on buys, sells, and collects by others,
          learn more here{' '}
            <span>
              <a href="#" target="_blank">
                <i className="fa fa-question-circle"></i>
              </a>
            </span>
          </StyledNote>
          <StyledInfo>
            My collectible BNB: {calculatedReward}
          </StyledInfo>
          <StyledClaimButtonArea>
            <Button onClick={handleClaimClick}>
              <span>
                <i className="fa fa-gift"></i> Claim My Reward
              </span>
            </Button>
          </StyledClaimButtonArea>
        </StyledInfoArea>
      </StyledArea> */}
    </>
  )
}

export default WriteClaim

function toUTCString(arg0: Date) {
  return;
}

function toLocaleString(arg0: Date) {
  return;
}