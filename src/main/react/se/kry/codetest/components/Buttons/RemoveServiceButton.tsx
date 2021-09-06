import { Payload } from "../../types/payload"
import { handleAction } from "../../utils/handleActions"

export const RemoveServiceButton = ({ name }: Pick<Payload, "name">) => (
  <input
    type="button"
    value="Remove Service"
    onClick={() => handleAction("DELETE", { name })}
  />
)
