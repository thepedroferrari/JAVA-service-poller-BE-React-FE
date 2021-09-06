import { Operation } from "../types/operation"
import { Payload } from "../types/payload"
import { fetchService } from "./fetchService"

export function handleAction(
  action: Extract<Operation, "DELETE">,
  service: Pick<Payload, "name">,
): void
export function handleAction(
  action: Extract<Operation, "POST">,
  service: Pick<Payload, "name" | "url">,
): void
export function handleAction(
  action: Extract<Operation, "PUT">,
  service: Pick<Payload, "name">,
): void

/**
 *
 * @param action Operation
 * @param service Payload
 * @description handles CRUD actions to the server, uses function overloading
 * to determine the necessary payloads.
 * @fires fetchService
 * @emits O(1)
 */
export function handleAction(action: Operation, service?: Partial<Payload>) {
  const name = service?.name
  const url = service?.url
  switch (action) {
    case "POST":
      if (name === undefined || url === undefined) break
      fetchService("POST", new AbortController(), { name, url })
      break

    case "DELETE":
      if (name === undefined) break
      fetchService("DELETE", new AbortController(), { name })
      break

    case "PUT":
      if (name === undefined) break
      fetchService("PUT", new AbortController(), {
        name,
      })
      break

    default:
      break
  }
}
