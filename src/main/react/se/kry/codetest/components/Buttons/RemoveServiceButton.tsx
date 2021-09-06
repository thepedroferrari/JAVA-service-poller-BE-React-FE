import { Payload } from "../../types/payload"
import { handleAction } from "../../utils/handleActions"

export const RemoveServiceButton = ({ name }: Pick<Payload, "name">) => (
  <input
    type="button"
    value="Delete"
    onClick={() => handleAction("DELETE", { name })}
  />
)
