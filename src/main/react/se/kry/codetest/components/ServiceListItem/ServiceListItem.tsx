import { Status } from "../../types/status"
import { StoreDataItem } from "../../types/store"
import { RemoveServiceButton, UpdateServiceButton } from "../Buttons"

interface Props {
  data: StoreDataItem
}
export const ServiceListItem = ({ data: { status } }: Props) => {
  const { name, url } = JSON.parse(status) as Status
  return (
    <li>
      <a href={url} rel="noopener noreferrer" target="_blank">
        {name}
      </a>
      <RemoveServiceButton name={name} />
      <UpdateServiceButton name={name} />
    </li>
  )
}
