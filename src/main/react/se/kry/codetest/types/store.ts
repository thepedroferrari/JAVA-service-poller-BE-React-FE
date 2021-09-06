import { ChangeEvent } from "react"
import { Payload } from "./payload"

export interface StoreDataItem {
  name: string
  status: string
}

export type StoreData = StoreDataItem[]

export interface Store {
  data: StoreData | null
  payload: Payload
  error: string | null

  setData: (data: StoreData) => void
  setPayload: (e: ChangeEvent<HTMLInputElement>, key: keyof Payload) => void
  setError: (msg: string) => void
}
