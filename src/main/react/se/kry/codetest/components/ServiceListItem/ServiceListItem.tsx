import { Status } from "../../types/status"
import { StoreDataItem } from "../../types/store"
import { RemoveServiceButton, UpdateServiceButton } from "../Buttons"

interface Props {
  data: StoreDataItem
}
export const ServiceListItem = ({ data }: Props) => {
  const { name, status } = data
  const serviceStatus = JSON.parse(status) as Status

  return (
    <li>
      Name: {name}
      Name: {serviceStatus.name}
      URL: {serviceStatus.url}
      <RemoveServiceButton name={name} />
      <UpdateServiceButton name={name} />
    </li>
  )
}
