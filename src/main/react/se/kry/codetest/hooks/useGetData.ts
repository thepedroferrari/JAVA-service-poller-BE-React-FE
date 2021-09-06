import { useEffect, useRef } from "react"
import { trackedStore } from "../components/store"
import { MESSAGES } from "../constants"
import { fetchService } from "../utils"

export const useGetData = (epochTime: number) => {
  const cache = useRef(epochTime)
  const { setData, setError } = trackedStore()
  useEffect(() => {
    const controller = new AbortController()
    if (cache.current <= epochTime) {
      cache.current = epochTime
      const fetch = async () => {
        try {
          const response = await fetchService("GET", controller)
          if (!response || response.body === null) {
            setError(MESSAGES.SERVER_ERROR)
            return
          }
          if (response.ok) {
            const d = await response.json()
            setData(d)
          }
        } catch (error) {
          if (!controller.signal.aborted) {
            // eslint-disable-next-line no-console
            console.error(error)
          }
        }
      }
      fetch()
    }

    return () => {
      controller.abort()
    }
  }, [setData, setError, epochTime])
}
