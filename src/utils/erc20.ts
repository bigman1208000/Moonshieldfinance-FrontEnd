import Web3 from 'web3'
import { provider } from 'web3-core'
import { Contract } from 'web3-eth-contract'
import { AbiItem } from 'web3-utils'
import ERC20ABI from '../constants/abi/ERC20.json'
import addresses from './../config/constants/contracts'
import MoonshieldABI from '../constants/abi/moonshield.json'
import MultiCallABI from '../constants/abi/multicall.json'
import SlotABI from '../constants/abi/slot.json'
import PancakeABI from '../constants/abi/PancakePair.json'
import { MSHLDTokenAddress } from '../constants/tokenAddresses'

const web3 = new Web3(
  new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org'),
)

const MSHLDContract = new web3.eth.Contract(
  MoonshieldABI as unknown as AbiItem,
  MSHLDTokenAddress,
)

export const getContract = (provider: provider, address: string) => {
  const web3 = new Web3(provider)
  const contract = new web3.eth.Contract(
    (ERC20ABI.abi as unknown) as AbiItem,
    address,
  )
  return contract
}

export const getAllowance = async (
  contract: Contract,
  owner: string,
  spender: string,
): Promise<string> => {
  try {
    const allowance: string = await contract.methods
      .allowance(owner, spender)
      .call()
    return allowance
  } catch (e) {
    return '0'
  }
}

export const getTokenBalance = async (
  provider: provider,
  tokenAddress: string,
  userAddress: string,
): Promise<string> => {
  const lpContract = getContract(provider, tokenAddress)
  try {
    const balance: string = await lpContract.methods
      .balanceOf(userAddress)
      .call()
    return balance
  } catch (e) {
    return '0'
  }
}

export const getMaxBalance = async (
  provider: provider,
  tokenAddress: string
): Promise<string> => {
  const contract = getContract(provider, tokenAddress)
  try {
    const balance: string = await contract.methods._maxTxAmount().call()
    return balance
  } catch (e) {
    return '0'
  }
}

export const getSlotBalance = async (
  provider: provider,
  userAddress: string,
): Promise<string> => {
  const web3 = new Web3(provider)
  const chainId = process.env.REACT_APP_CHAIN_ID
  const address = addresses.slot[56]
  const contract = new web3.eth.Contract((SlotABI as unknown) as AbiItem, address)
  try {
    const balance: string = await contract.methods.balanceOf(userAddress).call()
    return balance
  } catch (e) {
    return '0'
  }
}

export const getMoonBalance = async (
  provider: provider,
  userAddress: string,
): Promise<string> => {
  const web3 = new Web3(provider)
  const chainId = process.env.REACT_APP_CHAIN_ID
  const address = addresses.moonShield[56]
  const contract = new web3.eth.Contract((MoonshieldABI as unknown) as AbiItem, address)
  try {
    const balance: string = await contract.methods.calculateBNBReward(userAddress).call()
    return balance
  } catch (e) {
    return '0'
  }
}

export const getLpBnbBalance = async (
  provider: provider,
): Promise<string> => {
  const web3 = new Web3(provider)
  const chainId = process.env.REACT_APP_CHAIN_ID
  const address = addresses.pancakepair[56]  
  const contract = new web3.eth.Contract((PancakeABI as unknown) as AbiItem, address)
  
  try {
    const balance: string = await contract.methods.getReserves().call()
    return balance[0]
  } catch (e) {
    return '0'
  }
}

export const getLpMshieldBalance = async (
  provider: provider,
): Promise<string> => {
  const web3 = new Web3(provider)
  const chainId = process.env.REACT_APP_CHAIN_ID
  const address = addresses.pancakepair[56]  
  const contract = new web3.eth.Contract((PancakeABI as unknown) as AbiItem, address)
  
  try {
    const balance: string = await contract.methods.getReserves().call()
    return balance[1]
  } catch (e) {
    return '0'
  }
}

export const getSlotAllowance = async (
  lpContract: Contract,
  slotAddress: string,
  account: string,
): Promise<string> => {
  try {
    const allowance: string = await lpContract.methods.allowance(account, slotAddress).call()
    return allowance
  } catch (e) {
    return '0'
  }
}

export const getNextClaimDate = async (
  provider: provider,
  userAddress: string,
): Promise<string> => {
  const web3 = new Web3(provider)
  const chainId = process.env.REACT_APP_CHAIN_ID
  const address = addresses.moonShield[56]
  const contract = new web3.eth.Contract((MoonshieldABI as unknown) as AbiItem, address)
  try {
    const balance: string = await contract.methods.nextAvailableClaimDate(userAddress).call()
    return balance
  } catch (e) {
    return '0'
  }
}


export const getTotalLiquidty = async (
  provider: provider,
  userAddress: string,
): Promise<string> => {
  const web3 = new Web3(provider)
  const chainId = process.env.REACT_APP_CHAIN_ID
  const address = addresses.multiCall[56]
  const contract = new web3.eth.Contract((MultiCallABI as unknown) as AbiItem, address)
  try {
    const balance: string = await contract.methods.getEthBalance(userAddress).call()
    return balance
  } catch (e) {
    return '0'
  }
}
