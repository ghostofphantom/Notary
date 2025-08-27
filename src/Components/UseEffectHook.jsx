import React, { useEffect, useState } from 'react'

function UseEffectHook() {

    const [counter , setCounter] = useState(0)

    function Increase(){
        setCounter(counter+1)
    }

useEffect(() => {
    console.log("LKASJDFLKAJSFD;LKAJDS;LKF")
},[counter])


  return (
        <div>
                <h1> {counter} </h1>
             <button onClick={Increase}> INCEASE </button>
        </div>
  )
}

export default UseEffectHook