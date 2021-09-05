import { ChangeEvent, useLayoutEffect, useState } from "react"
import { MESSAGES } from "../../constants"
import { Operation } from "../../types/operation"
import { Payload } from "../../types/payload"
import { fetchService } from "../../utils/fetchService"

export const App = () => {
  const [service, setService] = useState<Payload>({
    name: "",
    url: "",
  })
  const [data, setData] = useState<unknown>()

  const updateService = (
    e: ChangeEvent<HTMLInputElement>,
    key: keyof Payload,
  ) => {
    e.preventDefault()
    setService((prev) => ({
      ...prev,
      [key]: e.target.value,
    }))
  }

  const handleAction = (action: Operation) => {
    const { name, url } = service
    console.log(`${action} was called with ${name} and ${url}`)
    switch (action) {
      case "DELETE":
        fetchService("DELETE", new AbortController(), { name })
        break

      case "POST":
        fetchService("POST", new AbortController(), { name, url })
        break

      case "PUT":
        fetchService("PUT", new AbortController(), {
          name,
        })
        break

      default:
        break
    }
  }

  useLayoutEffect(() => {
    const controller = new AbortController()
    const fetch = async () => {
      try {
        const response = await fetchService("GET", controller)
        if (!response) {
          setData(MESSAGES.SERVER_ERROR)
          return
        }
        if (response.ok && response.body !== null) {
          const d = await response.json()
          setData(d)
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          // eslint-disable-next-line no-console
          console.error(error)
        }
      }
    }
    fetch()

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <>
      <section>
        <header>
          <h1>Services</h1>
          <p>Don&apos;t worry, be happy</p>
        </header>
        <div>
          <label htmlFor="service-name">
            Service Name{" "}
            <input
              type="text"
              value={service.name}
              id="service-name"
              onChange={(e) => updateService(e, "name")}
            />
          </label>{" "}
        </div>
        <div>
          <label htmlFor="service-url">
            Service URL{" "}
            <input
              type="text"
              value={service.url}
              id="service-url"
              onChange={(e) => updateService(e, "url")}
            />
          </label>{" "}
        </div>

        <input
          type="button"
          value="Add Service"
          onClick={() => handleAction("POST")}
        />
        <input
          type="button"
          value="Remove Service"
          onClick={() => handleAction("DELETE")}
        />
        <input
          type="button"
          value="Update Service"
          onClick={() => handleAction("PUT")}
        />
        <footer>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </footer>
      </section>
    </>
  )
}
