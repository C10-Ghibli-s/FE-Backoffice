import { useEffect, useState, FC } from "react"
import { createPortal } from "react-dom"

const Portal: FC<{children: JSX.Element | JSX.Element[]}> = ({ children }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  let modal;
  if(typeof document !== "undefined") {
    modal = document?.querySelector("#modal");
  }
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