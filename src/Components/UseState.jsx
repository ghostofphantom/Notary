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


  return (
    <div>
      {/* <h1> {cart} </h1> */}
      <h3> {name} </h3>

        <button onClick={Increase}>INCREASE</button>
        <button onClick={Decrease}>INCREASE</button>

        <button onClick={ChangeName}> ChageName </button>


    </div>
  )
}

export default UseState