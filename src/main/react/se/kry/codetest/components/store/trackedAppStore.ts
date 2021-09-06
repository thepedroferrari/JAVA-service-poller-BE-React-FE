import { ChangeEvent } from "react"
import { createTrackedSelector } from "react-tracked"
import create, { GetState, SetState } from "zustand"
import { Payload } from "../../types/payload"
import type { Store, StoreData } from "../../types/store"

const store = create<Store>((set: SetState<Store>, get: GetState<Store>) => ({
  data: null,
  payload: { name: "", url: "" },
  error: null,

  // Methods
  setData: (data: StoreData) => set({ data }),
  setPayload: (e: ChangeEvent<HTMLInputElement>, key: keyof Payload) =>
    set({
      payload: {
        ...get().payload,
        [key]: e.target.value,
      },
    }),
  setError: (msg: string) => set({ error: msg }),
}))

export const trackedStore = createTrackedSelector(store)
