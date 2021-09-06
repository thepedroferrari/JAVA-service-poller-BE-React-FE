import { Status } from "../../types/status"
import { StoreDataItem } from "../../types/store"
import { RemoveServiceButton, UpdateServiceButton } from "../Buttons"

interface Props {
  data: StoreDataItem
}
export const ServiceListItem = ({ data: { status } }: Props) => {
  const { name, url, status: serviceStatus } = JSON.parse(status) as Status
  return (
    <li>
      <a
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        className="service-name">
        {name}
      </a>
      <RemoveServiceButton name={name} />
      <UpdateServiceButton name={name} />
      <div className={`status ${serviceStatus.toLocaleLowerCase()}`} />
    </li>
  )
}
