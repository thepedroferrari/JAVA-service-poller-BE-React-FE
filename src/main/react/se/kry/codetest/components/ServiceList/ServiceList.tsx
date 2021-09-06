import { ServiceListItem } from "../ServiceListItem"
import { trackedStore } from "../store"
import "./ServiceList.styles.css"

export const ServiceList = () => {
  const { data } = trackedStore()

  const serviceList = data?.map((d) => (
    <ServiceListItem data={d} key={d.name} />
  ))
  return <ul className="service-list">{serviceList}</ul>
}
