import { createContext } from "react"


export let CartConext = createContext()


function Context({children}) {

    let name = "Khan"

  return (
    <CartConext.Provider value={name}>
        {children}
    </CartConext.Provider>
  )
}

export default Context