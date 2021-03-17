import React from 'react'
import UIProvider from './context/UIContext'
import RouterPage from './pages/RouterPage'

function TicketApp() {
  return (
    <UIProvider>
      <RouterPage />
    </UIProvider>
  )
}

export default TicketApp
