import { useEffect } from "react"
import CryptoForm from "./components/CryptoForm"
import { useCryptoStore } from "./store"
import CriptoPriceDisplay from "./components/CryptoPriceDisplay"

function App() {

  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)

  useEffect(() => {
    fetchCryptos()
  }
    , [])

  return (
    <>
      <div className="container">

        <h1 className="app-title">
          Cotizador de <span>Crypto Coins</span>
        </h1>

        <div className="content">

          <CryptoForm />

          <CriptoPriceDisplay />

        </div>

      </div>
    </>
  )
}

export default App
