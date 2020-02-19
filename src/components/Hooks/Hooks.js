import { useState, useEffect } from 'react'

const useSessionState = ([key, initialValue]) => {
  const [value, setValue] = useState(window.sessionStorage.getItem(key) || initialValue)

  useEffect(() => {
    const setItem = () => {
      window.sessionStorage.setItem(key, value)
    }
    setItem()
  }, [key, value])

  return [value, setValue]
}

export { useSessionState }
