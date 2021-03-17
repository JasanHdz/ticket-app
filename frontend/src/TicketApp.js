import React from 'react'
import SocketProvider from './context/SocketContext'
import UIProvider from './context/UIContext'
import RouterPage from './pages/RouterPage'

function TicketApp() {
  return (
    <SocketProvider>
      <UIProvider>
        <RouterPage />
      </UIProvider>
    </SocketProvider>
  )
}

export default TicketApp
