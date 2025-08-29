import React, { useContext } from 'react'
import { CartConext } from '../context/Context'

function Example() {
   let test =  useContext(CartConext)
  return (
    <div>{test}</div>
  )
}

export default Example