import React, { useState } from 'react'
import styled from 'styled-components'
import Page from '../../components/Page'
import { Input } from '@material-ui/core'
import * as bsc from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import { useMediaQuery } from 'react-responsive'
import MoonShieldABI from '../../constants/abi/moonshield.json'
import WBNBABI from '../../constants/abi/WBNB.json'
import GetTimeABI from '../../constants/abi/GettingTime.json'
import Web3 from 'web3'
import { NavLink } from 'react-router-dom'
import { AbiItem } from 'web3-utils'
import { useCollectBNB, useSendToken } from './../../hooks/useMoonshield'
import { useLPTotalLiquidity, useMoonBalance, useNextClaimDate, useTotalLiquidity, useLPBnbamount, useLPMshieldamount } from './../../hooks/useSlotBalance'
import mainImg from '../../assets/img/logoletras.svg'
import { useHistory } from 'react-router-dom'
import WriteClaim from './components/WriteClaim'
import ReadContractItem from './components/ReadContractItem'
import AccountButton from '../../components/TopBar/components/AccountButton'
import TopBar from '../../components/TopBar'
import Hero from '../../../src/components/Hero'
import DappInfo from '../../../src/components/DappInfoCard'
import { claimBNBReward } from '../../tokencontract/utils'
import { MSHLDTokenAddress, MSHLDPairAddress, WBNBAddress, GetTimeAddress, SlotAddress } from '../../constants/tokenAddresses'
import TransferClaim from './components/TransferClaim'
import { getTokenBalance } from '../../utils/erc20'
import accountImg from '../../assets/img/logoletras.svg'
import { useGettingTime } from '../../hooks/useContract'
import { toLocaleString, toUTCString } from '../../utils/translateTextHelpers'

const Home: React.FC = () => {
  const history = useHistory()
  const wallet = bsc.useWallet()

  const chainId = process.env.REACT_APP_CHAIN_ID
  const tokenAddress = MSHLDPairAddress
  const [maxTransaction, setMaxTransaction] = useState('')
  const [totalBNB, setTotalBNB] = useState('')
  const [totalBNBValue, setTotalBNBValue] = useState(0)
  const [BNBPrice, setBNBPrice] = useState(0)
  const [MSHLDPrice, setMSHLDPrice] = useState(0)
  const [currencyPrice, setCurrencyPrice] = useState('')
  const [currentBalance, setCurrencyBalance] = useState(0)
  const [BNBRewardPool, setRewardPool] = useState('')

  const web3 = new Web3(
    new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org'),
  )

  const MSHLDContract = new web3.eth.Contract(
    MoonShieldABI as unknown as AbiItem,
    MSHLDTokenAddress,
  )

  const WBNBContract = new web3.eth.Contract(
    WBNBABI as unknown as AbiItem,
    WBNBAddress,
  )  

  const getBNBPrice = async () => {
    const prices = await fetch(
      'https://api3.binance.com/api/v3/ticker/price',
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    setBNBPrice(prices[98].price)
  }

  const collectibleBNB = useMoonBalance(wallet.account);
  const BNBNum = collectibleBNB.toNumber()/1000000000000000000
  const formattedBNBNum = BNBNum === 0?'0':BNBNum.toLocaleString('en-US', {minimumFractionDigits: 8})

  const mynextclaimdate = useNextClaimDate(wallet.account)
  const nowdate = useGettingTime()
  const nextclaimdateGmt = mynextclaimdate.toNumber() === 0?"":toUTCString(new Date(mynextclaimdate.toNumber()*1000))
  const nextclaimdateLocale = mynextclaimdate.toNumber() === 0?"Not available":toLocaleString(new Date(mynextclaimdate.toNumber()*1000))

  const contracttotalliquidity = useTotalLiquidity();
  const totalliquidity = contracttotalliquidity.toNumber()
  const realtotalliquidity = totalliquidity === 0?'0':(totalliquidity/1000000000000000000).toLocaleString('en-US', {maximumFractionDigits: 3});

  const totalvalue = BNBPrice
  const realvalue = totalvalue === 0?'0':(totalliquidity*totalvalue/1000000000000000000).toLocaleString('en-US', {maximumFractionDigits: 3});

  const contractlptotalliquidity = useLPBnbamount();
  const lptotalliquidity = contractlptotalliquidity.toNumber()
  const reallptotalliquidity = lptotalliquidity === 0?'0':(lptotalliquidity/1000000000000000000).toLocaleString('en-US', {maximumFractionDigits: 3});

  const reallpvalue = lptotalliquidity*totalvalue===0?'0':(lptotalliquidity*totalvalue/1000000000000000000).toLocaleString('en-US', {maximumFractionDigits: 3});

  const LpMshield = useLPMshieldamount();
  const LpMshieldValue = LpMshield.toNumber()
  const LpRatio = lptotalliquidity/LpMshieldValue
  const maxtransvalue = ((LpRatio*500000000000)/1000000000).toFixed(3);

  // ---------------  MAX TRANSACTION -------------------  //
  const getMaxTransactionAmount = async () => {
    const maxTransactionAmount = await MSHLDContract.methods
      ._maxTxAmount()
      .call()
    setMaxTransaction('$MSHLD ' + maxTransactionAmount / 1000000000)
  }

  // ------------  BNB in Liquidity Pool ---------------- //
  const getTotalBNBInLiquidityPool = async () => {
    const totalBNBInLiquidityPool = await WBNBContract.methods
      .balanceOf(MSHLDPairAddress)
      .call()
    setTotalBNBValue(totalBNBInLiquidityPool)
    setTotalBNB(
      web3.utils.fromWei(
        web3.utils.toBN(totalBNBInLiquidityPool).toString(),
        'ether',
      ) + ' BNB',
    )
  }

  // ---------------  MoonShield Price ------------------  //
  const getCurrentMSHLDPrice = async () => {
    const totalBNBInLiquidityPool = await WBNBContract.methods
      .balanceOf(MSHLDPairAddress)
      .call()
    const totalMSHLDInLiquidityPool = await MSHLDContract.methods
      .balanceOf(MSHLDPairAddress)
      .call()

    const price = web3.utils
      .toBN(totalBNBInLiquidityPool)
      .div(web3.utils.toBN(totalMSHLDInLiquidityPool))
      .toNumber()

    setMSHLDPrice(price / 1000000000)
    setCurrencyPrice((price / 1000000000).toString() + ' BNB')
  }

  // ---------- CURRENT WALLET MSHLD HOLDINGS -------------  //
  const getCurrentMSHLDBalance = async () => {
    if (wallet.account) {
      const balance = await MSHLDContract.methods
        .balanceOf(wallet.account)
        .call()
      setCurrencyBalance(web3.utils.toBN(balance).toNumber() / 1000000000)
      return (web3.utils.toBN(balance).toNumber() / 1000000000).toLocaleString('en-US', {maximumFractionDigits: 3})
    }
  }

  // -------- CURRENT WALLET BNB REWARD BALANCE -----------  //
  const getBalance = async () => {
    const balance = await web3.eth.getBalance(MSHLDTokenAddress)
    setRewardPool(
      web3.utils.fromWei(web3.utils.toBN(balance).toString(), 'ether'),
    )
  }

  getBNBPrice()
  getMaxTransactionAmount()
  getTotalBNBInLiquidityPool()
  getCurrentMSHLDPrice()
  getCurrentMSHLDBalance()
  getBalance()

  return (
          <div style={{marginTop:'-1100px'}}>
            <Page>
              <Hero />
                {!wallet.account?
                  (
                    <div className="container container-fluid w-full md:w-10/12 mx-auto p-4 shadow-2xl mt-10 rounded-xl divide-y-4 border-yellow-300 border border-solid">
                      {/* <div className="text-center">
                        <StyledLink target="_blank" href="https://moonshield.finance">
                          <StyledLogo to="/">
                            <img src={accountImg} alt="logo" style={{ marginTop: 0, width: 250, marginLeft: 0 }} className="d-none d-md-inline" loading="lazy" />
                            <img className="d-sm-inline d-md-none" src="assets/img/MoonShield%20Logo.png" loading="lazy" style={{ width: '45px' }}></img>
                          </StyledLogo>
                        </StyledLink>
                      </div> */}
                      <div className="mt-8">
                        <h1 className="text-3xl font-bold text-yellow-600 text-center">Your wallet is not connected or you are not using Binance Smart Chain network</h1>
                      </div>
                      <div className="text-center mt-5">
                        <h2 className="text-2xl text-white">
                          To use the app, please make sure:
                        </h2>
                        <h2 className="text-2xl text-yellow-600 w-full sm:max-w-xl mx-auto">
                        </h2>
                        <div className="row align-items-center justify-content-center">
                          <div className="text-xl col-md-6 col-sml-12 align-items-center justify-content-center">
                            <ol>
                              <li>You have the <b className="font-bold">Binance Smart Chain</b> network selected in your wallet.</li>
                              <li>You may also need to connect your wallet in order to continue</li>
                            </ol>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-5">
                        <h2 className="text-2xl text-white">
                          Please switch to BSC Network if you use:
                        </h2>
                        <div className="text-2xl text-green-400 w-full sm:max-w-xl mx-auto">
                          <StyledAccountButton>
                            <AccountButton />
                          </StyledAccountButton>
                        </div>
                      </div>
                    </div>
                  ):(
                    <>
                      <DappInfo
                        maxTransaction={maxtransvalue}
                        totolLP={((totalBNBValue * BNBPrice) / 1000000000000000000).toLocaleString('en-US', {maximumFractionDigits: 3})}
                        totalReward={realvalue}
                        BNBinLp={totalBNB.toLocaleString()}
                        BNBinRewardPool={reallptotalliquidity}
                        MSHLDBalance={currentBalance.toLocaleString()} />
                        <StyledRowArea>
                          <StyledArea>
                            <WriteClaim />
                            <TransferClaim />
                          </StyledArea>
                        </StyledRowArea>
                    </>
                  )}
                <TopBar />
                </Page>
              </div>
  )
}

const StyledRowArea = styled.div`
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

const StyledDetail = styled.div`
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;
`

const StyledLink = styled.a`
color: ${(props) => props.theme.color.grey[400]};
margin-left: 0px;
text-decoration: none;
&:hover {
  color: ${(props) => props.theme.color.grey[500]};
}
`

const StyledArea = styled.div`
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  padding: 10px;
  margin-top: 30px;
`

const StyledContractDetail = styled.div`
  width: 100;
  display: flex;
  margin-left: 15px;
  margin-right: 15px;
  flex-wrap: wrap;
  justify-content: space-between;
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
export default Home