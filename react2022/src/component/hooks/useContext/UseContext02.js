import React,{useContext} from 'react'
import { BioData } from './UseContext01'

export const UseContext02 = () => {
    const myname= useContext(BioData)
  return (
    <div>Hello, I am {myname}</div>
  )
}
