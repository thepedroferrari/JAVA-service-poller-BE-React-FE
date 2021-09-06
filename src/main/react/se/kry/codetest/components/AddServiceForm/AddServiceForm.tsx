import { AddServiceButton } from "../Buttons"
import { trackedStore } from "../store"

export const AddServiceForm = () => {
  const { payload, setPayload } = trackedStore()

  return (
    <form>
      <label htmlFor="service-name">
        <span>Service Name</span>
        <input
          type="text"
          value={payload.name}
          id="service-name"
          placeholder="Heartburn"
          onChange={(e) => setPayload(e, "name")}
        />
      </label>
      <label htmlFor="service-url">
        <span>Service URL</span>
        <input
          type="text"
          value={payload.url}
          id="service-url"
          placeholder="http://heartburn.com"
          onChange={(e) => setPayload(e, "url")}
        />
      </label>
      <AddServiceButton />
    </form>
  )
}
