import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { collectBNB, sendToken } from '../utils/callHelpers'
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import MoonShieldABI from '../constants/abi/moonshield.json'
import { MSHLDTokenAddress } from '../constants/tokenAddresses'

const web3 = new Web3(
  new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org'),
)

const MSHLDContract = new web3.eth.Contract(
  MoonShieldABI as unknown as AbiItem,
  MSHLDTokenAddress,
)

export const useCollectBNB = () => {
  const { account } = useWallet()
  const abi = (MoonShieldABI as unknown) as AbiItem

  const handleCollect = useCallback(
    async () => {
      const txHash = await collectBNB(MSHLDTokenAddress, account)
      console.info(txHash)
    },
    [account, MSHLDTokenAddress],
  )

  return { onCollect: handleCollect }
}

export const useSendToken = () => {
  const { account } = useWallet()
  const abi = (MoonShieldABI as unknown) as AbiItem

  const handleSend = useCallback(
    async (amount: string, address : string) => {
      const txHash = await sendToken(MSHLDTokenAddress, amount, address, account)
      console.info(txHash)
    },
    [account, MSHLDTokenAddress],
  )

  return { onSend: handleSend }
}

const p = 1000
export default p;
