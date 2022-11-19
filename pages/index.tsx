import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import React from 'react'
import Loader from '../src/loader/loader'

export default function Home() {
  const [val, setVal] = useState(0)


  useEffect(() => {
    if (val >= 100) return
    setTimeout(() => {
      console.log('c- val', val)
      setVal(val + Math.floor(Math.random() * 21))
    }, 1000)

  }, [val])
  return (
    <Box border="1px solid red" ml={12} mt={6} mr={12} p={5}>
      <Loader value={val} />
    </Box >
  )
}
