import React, { createContext, useState } from 'react'

export const UIContext = createContext()

function UIProvider({ children }) {
  const [menuIsActive, setMenuIsActive] = useState(true)
  const showMenu = () => setMenuIsActive(false)
  const hideMenu = () => setMenuIsActive(true)

  return (
    <UIContext.Provider value={{menuIsActive, showMenu, hideMenu}}>
      {children}
    </UIContext.Provider>
  )
  
}

export default UIProvider
