import { AddServiceButton } from "../Buttons"
import { trackedStore } from "../store"

export const AddServiceForm = () => {
  const { payload, setPayload } = trackedStore()

  return (
    <form>
      <label htmlFor="service-name">
        Service Name{" "}
        <input
          type="text"
          value={payload.name}
          id="service-name"
          onChange={(e) => setPayload(e, "name")}
        />
      </label>{" "}
      <label htmlFor="service-url">
        Service URL{" "}
        <input
          type="text"
          value={payload.url}
          id="service-url"
          onChange={(e) => setPayload(e, "url")}
        />
      </label>{" "}
      <AddServiceButton />
    </form>
  )
}
