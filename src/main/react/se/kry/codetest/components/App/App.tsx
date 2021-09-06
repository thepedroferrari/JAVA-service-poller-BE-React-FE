import { AddServiceForm } from "../AddServiceForm"
import { RefreshButton } from "../Buttons"
import { ServiceList } from "../ServiceList/ServiceList"
import { trackedStore } from "../store"
import "./App.styles.css"

export const App = () => {
  const { error } = trackedStore()

  return (
    <>
      <header role="banner" className="app-banner">
        <img
          src="https://www.kry.se/logos/kry-logo.svg"
          width="70"
          height="38"
          alt="Kry Logo"
        />
        <h1>Services</h1>
        <RefreshButton />
      </header>
      <main>
        <ServiceList />
        <footer className="form-footer">
          {error && <p className="errors">{error}</p>}
          <AddServiceForm />
        </footer>
      </main>
    </>
  )
}
