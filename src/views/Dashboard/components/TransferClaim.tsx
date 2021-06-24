import BigNumber from 'bignumber.js'
import React, { useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import * as bsc from '@binance-chain/bsc-use-wallet'
import Button from '../../../components/Button'
import rewardPool from '../../../assets/img/reward_pool.png'
import { useCollectBNB, useSendToken } from '../../../hooks/useMoonshield'
import MSHLDABI from '../../../constants/abi/moonshield.json'
import { claimBNBReward } from '../../../tokencontract/utils'
import useTokenContract from '../../../hooks/useTokenContract'
import { MSHLDTokenAddress } from '../../../constants/tokenAddresses'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TokenInput from './../../../components/TokenInput'
import { faPaperPlane, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

import { useLPTotalLiquidity, useMoonBalance, useNextClaimDate, useTotalLiquidity, useLPBnbamount, useLPMshieldamount } from '../../../hooks/useSlotBalance'
import { useGetTime } from '../../../state/hooks'

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

const StyledContainer = styled.div`
    background: linear-gradient(0deg, rgba(0,0,0,0.67) 0%, rgba(42,45,52,0.49) 75%);
    border: 3px solid rgba(255,255,255,0.2);
    border-bottom: 3px solid var(--moonshield);
    border-radius: 0 0 15px 15px;
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

const TransferClaim: React.FC = () => {
  const [currentBalance, setCurrencyBalance] = useState(0)
  const history = useHistory()
  const [calculatedReward, setCalculatedReward] = useState(0)
  const [BNBRewardPool, setRewardPool] = useState('')
  const { onCollect } = useCollectBNB()
  const [sendAddress, setAddressVal] = useState('')
  const [val, setVal] = useState('')
  const { onSend } = useSendToken()
  const [pendingTx, setPendingTx] = useState(false)

  const wallet = bsc.useWallet()

  const web3 = new Web3(
    new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org'),
  )

  const MSHLDContract = new web3.eth.Contract(
    MSHLDABI as unknown as AbiItem,
    MSHLDTokenAddress,
  )

  const setRewardPoolBalance = async () => {
    const balance = await web3.eth.getBalance(MSHLDTokenAddress)
    setRewardPool(
      web3.utils.fromWei(web3.utils.toBN(balance).toString(), 'ether'),
    )
  }

  // ---------- CURRENT WALLET MSHLD HOLDINGS -------------  //
  const getCurrentMSHLDBalance = async () => {
    if (wallet.account) {
      const balance = await MSHLDContract.methods
        .balanceOf(wallet.account)
        .call()
      setCurrencyBalance(web3.utils.toBN(balance).toNumber() / 1000000000)
    }
  }
  
  const fullBalance = currentBalance === 0?'0':((currentBalance/1000000000)).toLocaleString('en-US', {minimumFractionDigits: 3})
  
  const setCalculatedRewardAmount = async () => {
    if (wallet.account) {
      const reward = await MSHLDContract.methods
        .calculateBNBReward(wallet.account)
        .call()
      setCalculatedReward(reward / 1000000000000000000)
    }
  }
  
  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      let valu = e.currentTarget.value;

      if (!Number(valu)) {
      return;
      }
      
      setVal(e.currentTarget.value)
    },
    [setVal],
  )

  const handleAddressChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setAddressVal(e.currentTarget.value)
    },
    [setAddressVal],
  )

  const handleSelectMax = useCallback(() => {
    setVal(fullBalance)
  }, [fullBalance, setVal])

  const mynextclaimdate = useNextClaimDate(wallet.account)
  const nowdate = useGetTime()
  const collectibleBNB = useMoonBalance(wallet.account);
  const BNBNum = collectibleBNB.toNumber()/1000000000000000000

  const tokenContract = useTokenContract()
  
  setCalculatedRewardAmount()
  setRewardPoolBalance()

  return (    
    <>    
        <div className="container mb-5 container-fluid" style={{paddingLeft:'0px', paddingRight:'0px'}}>
        <StyledClaim className="row d-flex flex-wrap flex-column mt-5 m-0">
                <StyledContainer className="row d-flex flex-wrap flex-grow-1 flex-column mt-5 m-0">
                    <div className="col p-3">
                        <section className="features-blue m-0 p-0 border-dot dapp-block">
                            <StyledTitle className="intro mb-0">
                                <p className="d-flex flex-grow-1 text-white">Disruptive transfer between 2 wallets</p>
                                <p className="d-flex flex-grow-1 text-white">Balance: {currentBalance} $MSHLD</p>
                            </StyledTitle>
                        </section>
                    </div>
                    <div className="col">
                        <section className="features-blue m-0 p-3 border-dot dapp-block mb-3">
                            <form className="m-0 p-0">
                                <div className="row">
                                    <div className="col col-lg-12">
                                        <div className="row w-100 d-flex flex-column flex-wrap flex-grow-1">
                                            <div className="col text-start m-2">
                                                <label className="form-label">Recipient (address)</label>
                                                <input className="form-control form-dark" type="text"></input>
                                            </div>
                                            <div className="col text-start m-2">
                                                <label className="form-label">Amount ($MSHLD)</label>                                           
                                                  <TokenInput
                                                    value={val}
                                                    onSelectMax={handleSelectMax}
                                                    onChange={handleChange}
                                                    max={currentBalance}
                                                    symbol='MSHLD'
                                                  />
                                            </div>
                                            <div className="row text-start m-2">
                                                <div className="btn col-md-3 col-sml-6" style={{ textAlign:'center', color :'#fff', width:'100%' }} data-bs-toggle="tooltip" /* onClick={onCollect} disabled={!BNBNum || mynextclaimdate.toNumber() > nowdate.toNumber()} */  
                                                   data-bss-tooltip="" title=" A transfer (between 2 wallets) that is more than 0.05% of the total supply will be charged for 2 BNB.">                                                    
                                                  <Button onClick={async () => {
                                                    setPendingTx(true)
                                                    await onSend(val, sendAddress)
                                                    setPendingTx(false)
                                                  }} disabled = {pendingTx || !val || val === "0" || sendAddress === ""}>
                                                    <FontAwesomeIcon icon={faPaperPlane} className="mr-1" style={{ color:'#fff'}}/>
                                                    <div style={{ textAlign:'center', color :'#fff', margin:'0px auto' }}>Send</div>
                                                  </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                </StyledContainer>
            </StyledClaim>
        </div>
    </>
  )
}


const StyledTitle = styled.div`
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

export default TransferClaim
