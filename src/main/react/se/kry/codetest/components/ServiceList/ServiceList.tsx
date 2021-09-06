import { ServiceListItem } from "../ServiceListItem"
import { trackedStore } from "../store"

export const ServiceList = () => {
  const { data } = trackedStore()

  const serviceList = data?.map((d) => (
    <ServiceListItem data={d} key={d.name} />
  ))
  return <ul>{serviceList}</ul>
}
