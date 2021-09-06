import { Payload } from "../../types/payload"
import { handleAction } from "../../utils/handleActions"

export const UpdateServiceButton = ({ name }: Pick<Payload, "name">) => (
  <input
    type="button"
    value="Update Service"
    onClick={() => handleAction("PUT", { name })}
  />
)
