import { FETCH_ROUTE, SERVER_URL } from "../constants"
import { Operation } from "../types/operation"
import { Payload } from "../types/payload"

export function fetchService(
  method: Extract<Operation, "GET">,
  controller: AbortController,
): Promise<Response>

export function fetchService(
  method: Extract<Operation, "DELETE">,
  controller: AbortController,
  payload: Pick<Payload, "name">,
): Promise<Response>

export function fetchService(
  method: Extract<Operation, "POST">,
  controller: AbortController,
  payload: Pick<Payload, "name" | "url">,
): Promise<Response | null>

export function fetchService(
  method: Extract<Operation, "PUT">,
  controller: AbortController,
  payload: Pick<Payload, "name">,
): Promise<Response | null>

/**
 *
 * @param method Operation
 * @param payload Depending on the Operation, might include or not the url.
 * @returns Promisified HTTP Response or null
 * @description Fetches the server with the proper operation and required payload
 * and returns a valid response. Depending on the operation passed the fetching
 * will vary.
 * @fires window.fetch
 * @emits O(1)
 */
export async function fetchService(
  method: Operation,
  controller: AbortController,
  payload?: Partial<Payload>,
) {
  try {
    const response = await window.fetch(`${SERVER_URL}/${FETCH_ROUTE}`, {
      method,
      body: JSON.stringify(payload),
      signal: controller.signal,
    })

    if (!response.ok || response === null) {
      return null
    }

    return response
  } catch (error) {
    if (!controller.signal.aborted) {
      // Send to DataDog or similar
      // eslint-disable-next-line no-console
      console.error({ error, method, payload })
    }
  }
  return null
}
