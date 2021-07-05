import { useEffect, useState } from 'react'
import { AbiItem } from 'web3-utils'
import { ContractOptions } from 'web3-eth-contract'
import useWeb3 from './../hooks/useWeb3'
import { getMasterChefAddress, getShieldAddress, getSlotAddress, getPancakePairAddress, getGettingTimeAddress } from './../utils/addressHelpers'
import erc20 from './../constants/abi/ERC20.json'
import masterChef from './../constants/abi/masterchef.json'
import slot from './../constants/abi/slot.json'
import gettingtime from './../constants/abi/GettingTime.json'

const useContract = (abi: AbiItem, address: string, contractOptions?: ContractOptions) => {
  const web3 = useWeb3()
  const [contract, setContract] = useState(new web3.eth.Contract(abi, address, contractOptions))

  useEffect(() => {
    setContract(new web3.eth.Contract(abi, address, contractOptions))
  }, [abi, address, contractOptions, web3])

  return contract
}

export const useERC20 = (address: string) => {
  const erc20Abi = (erc20 as unknown) as AbiItem
  return useContract(erc20Abi, address)
}

export const useShield = () => {
  return useERC20(getShieldAddress())
}

export const usePancakePair = () => {
  return useERC20(getPancakePairAddress())
}


export const useMasterchef = () => {
  const abi = (masterChef as unknown) as AbiItem
  return useContract(abi, getMasterChefAddress())
}

export const useSlot = () => {
  const abi = (slot as unknown) as AbiItem
  return useContract(abi, getSlotAddress())
}

export const useGettingTime = () => {
  const abi = (gettingtime as unknown) as AbiItem
  return useContract(abi, getGettingTimeAddress())
}


export default useContract
