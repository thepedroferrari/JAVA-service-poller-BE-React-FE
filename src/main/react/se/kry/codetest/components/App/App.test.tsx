import { render, screen } from "@testing-library/react"
import { App } from "./App"

test("Renders Text", () => {
  render(<App />)
  const linkElement = screen.getByText(/Service/i)
  expect(linkElement).toBeInTheDocument()
})
