import { handleAction } from "../../utils"
import { trackedStore } from "../store"

export const AddServiceButton = () => {
  const { payload } = trackedStore()

  return (
    <input
      type="button"
      value="Add Service"
      onClick={() => handleAction("POST", payload)}
    />
  )
}
