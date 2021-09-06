import { useState } from "react"
import { useGetData } from "../../hooks"

export const RefreshButton = () => {
  const [now, setNow] = useState(Date.now())
  useGetData(now)

  return (
    <input type="button" value="Refresh" onClick={() => setNow(Date.now())} />
  )
}
