import { useEffect, useMemo, useState } from 'react'
import io from 'socket.io-client'

function useSocket(serverPaht) {
  const socket = useMemo(() => io.connect(serverPaht, {
    transports: ['websocket']
  }), [serverPaht])
  const [online, setOnline] = useState(false)

  useEffect(() => {
    setOnline(socket.connected)
  }, [socket])

  useEffect(() => {
    socket.on('connect', () => {
      setOnline(true)
    })
  }, [socket])

  useEffect(() => {
    socket.on('disconnect', () => {
      setOnline(false)
    })
  }, [socket])

  return {
    socket,
    online
  }
}

export default useSocket
