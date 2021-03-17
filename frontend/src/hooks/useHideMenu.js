import { useContext, useEffect } from 'react'
import { UIContext } from '../context/UIContext'

function useHideMenu(hidden) {
  const { showMenu, hideMenu, menuIsActive } = useContext(UIContext)
  console.log(menuIsActive)
  useEffect(() => {
    if (hidden) {
      hideMenu()
    } else {
      showMenu()
    }
  }, [hidden, showMenu, hideMenu])
}

export default useHideMenu
