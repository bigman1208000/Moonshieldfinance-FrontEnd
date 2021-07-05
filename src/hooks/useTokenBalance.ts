import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import MoonShieldABI from '../constants/abi/moonshield.json'
import { getContract } from './../utils/web3'
import { getMaxBalance, getSlotAllowance, getTokenBalance } from './../utils/erc20'
import { Contract } from 'web3-eth-contract'
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import { MSHLDTokenAddress, MSHLDPairAddress, WBNBAddress, GetTimeAddress } from '../constants/tokenAddresses'

const web3 = new Web3(
    new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org'),
)

const MSHLDContract = new web3.eth.Contract(
    MoonShieldABI as unknown as AbiItem,
    MSHLDTokenAddress,
)

export const useTokenBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()

  useEffect(() => {
    const fetchBalance = async () => {
      const res = await getTokenBalance(ethereum, tokenAddress, account)
      setBalance(new BigNumber(res))
    }

    if (account && ethereum) {
      fetchBalance()
    }
  }, [account, ethereum, tokenAddress, 10000])

  return balance
}

export const useMaxBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {ethereum }: { account: string; ethereum: provider } = useWallet()
  useEffect(() => {
    const fetchBalance = async () => {
      const res = await getMaxBalance(ethereum, tokenAddress)
      setBalance(new BigNumber(res))
    }

    if (ethereum) {
      fetchBalance()
    }
  }, [ethereum, tokenAddress, 10000])

  return balance
}

export const useTotalSupply = () => {
  const [totalSupply, setTotalSupply] = useState<BigNumber>()

  useEffect(() => {
    async function fetchTotalSupply() {
      const supply = await MSHLDContract.methods.totalSupply().call()
      setTotalSupply(new BigNumber(supply))
    }

    fetchTotalSupply()
  }, [60000])

  return totalSupply
}

export const useBurnedBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()

  useEffect(() => {
    const fetchBalance = async () => {
      const res = await getTokenBalance(ethereum, tokenAddress, '0x000000000000000000000000000000000000dEaD')
      setBalance(new BigNumber(res))
    }

    if (account && ethereum) {
      fetchBalance()
    }
  }, [account, ethereum, tokenAddress, 60000])

  return balance
}

export const useTokenAllowance = (tokenAddress: Contract, slotAddress : string) => {
  const [allowance, setAllowance] = useState(new BigNumber(0))
  const { account } = useWallet()
  useEffect(() => {
    const fetchBalance = async () => {
      const res = await getSlotAllowance(tokenAddress, slotAddress, account)
      setAllowance(new BigNumber(res))
    }

    if (account) {
      fetchBalance()
    }
  }, [account, tokenAddress, 10000, slotAddress])

  return allowance
}

const p = 1000

export default p
