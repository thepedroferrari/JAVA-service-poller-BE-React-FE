import { AddServiceForm } from "../AddServiceForm"
import { RefreshButton } from "../Buttons"
import { ServiceList } from "../ServiceList/ServiceList"
import { trackedStore } from "../store"

export const App = () => {
  const { error } = trackedStore()

  return (
    <main>
      <header>
        <h1>Services</h1>
        <RefreshButton />
      </header>
      <ServiceList />
      <footer>
        <AddServiceForm />
        <p>{error}</p>
      </footer>
    </main>
  )
}
