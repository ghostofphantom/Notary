import React, { useState } from 'react'

function UseState() {

    // const name = "jflsadjflksajfd"

    // const [cart , setCart] = useState(0)
    const [name , setName] = useState("24Trainers")


       function Increase(){
            setCart(cart + 1)
        }

        function Decrease(){
            setCart(cart - 1)
        }

        function ChangeName(){
          setName("GOOGLE")
        }

        function Original(){
          setName("24Trainers")
        }


  return (
    <div>
      {/* <h1> {cart} </h1> */}
      <h3> {name} </h3>

        <button onClick={Increase}>increase</button>
        <button onClick={Decrease}>decrease</button>

        <button onClick={ChangeName}> chagename </button>
        <button onClick={Original}> original </button>

    </div>
  )
}

export default UseState