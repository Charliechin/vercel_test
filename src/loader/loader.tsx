import { Text, Progress } from "@chakra-ui/react"
import React from "react"

interface PassedProps {
  value: number
}
const Loader = ({ value }: PassedProps) => {
  return (
    <>
      {value >= 100 ? <Text>Load complete</Text> : <Progress w="50%" hasStripe value={value} />}
    </>
  )
}

export default Loader