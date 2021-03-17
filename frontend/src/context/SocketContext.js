import React, { createContext } from 'react'
import useSocket from '../hooks/useSocket'

export const SocketContext = createContext()

function SocketProvider({ children }) {
  const { socket, online } = useSocket('https://tickets-server-jasanhdz.herokuapp.com')
  return (
    <SocketContext.Provider value={{socket, online}}>
      {children}
    </SocketContext.Provider>
  )
}



export default SocketProvider
