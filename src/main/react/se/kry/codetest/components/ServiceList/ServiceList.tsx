import { MESSAGES } from "../../constants"
import { ServiceListItem } from "../ServiceListItem"
import { trackedStore } from "../store"
import "./ServiceList.styles.css"

export const ServiceList = () => {
  const { data } = trackedStore()

  const serviceList = data?.map((d) => (
    <ServiceListItem data={d} key={d.name} />
  ))
  const content =
    serviceList && serviceList.length > 0 ? (
      serviceList
    ) : (
      <span>{MESSAGES.NO_SERVICES_AVAILABLE}</span>
    )
  return <ul className="service-list">{content}</ul>
}
