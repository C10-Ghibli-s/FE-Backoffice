import { useEffect, useState, FC } from "react"
import { createPortal } from "react-dom"

const Portal: FC<{children: any}> = ({ children }) => {
  const [mounted, setMounted] = useState(false)
  let modal = document?.querySelector("#modal");
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if(modal !== null && modal !== undefined) {
    return mounted
      ? createPortal(children, modal)
      : null
  } else {
    return null
  }
}

export default Portal