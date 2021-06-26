import BigNumber from 'bignumber.js'
import { useEffect, useState } from 'react'
import { useGettingTime } from '../hooks/useContract'

const ZERO = new BigNumber(0)


export const useGetTime = () => {
  const [time, setTime] = useState(new BigNumber(0))
  const getTimeContract = useGettingTime()

  useEffect(() => {
    const fetchTime = async () => {
      const res = await getTimeContract.methods.gettingtime().call()
      setTime(new BigNumber(res))
    }
    fetchTime()
  }, [time,setTime,getTimeContract])

  return time
}